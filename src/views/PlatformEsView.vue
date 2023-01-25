<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('platform_es.title')"/>
      <v-card-subtitle v-text="$t('platform_es.subtitle')"/>

      <v-container>
        <v-form>
          <v-textarea v-model="sampleTxt"
                      @input="analyzeSample"
                      :placeholder="$t('platform_es.placeholder')"
                      outlined
          />
        </v-form>
      </v-container>
      <v-btn-toggle mandatory
                        @change="analyzeSample"
          >
            <v-btn v-text="$t('pipeline.default')"
                   @click="pipeline='default'"/>
            <v-btn v-text="$t('pipeline.translate')"
                   @click="pipeline='translate'"
            />
          </v-btn-toggle>

      <v-skeleton-loader v-if="loading" type="article@1"/>
      <v-skeleton-loader v-if="loading" type="table@1"/>

      <br/>
      <div v-if="entities">
        <h2 style="text-align: center">{{ $t('platform_es.resultsTitle') }}</h2>

        <div v-if="sampleHTML" v-html="sampleHTML"/>

        <br/>

        <h2 style="text-align: center">{{ $t('platform_es.entitiesTitle') }}</h2>
        <br/>
        <div v-if="error_terms">
           <v-alert
            border="left"
            colored-border
            type="warning"
            elevation="2"
          >
             {{$t('error.validation.tooManyTerms',{value:2})}}
          </v-alert>
        </div>
        <br/>
        <h3 style="text-align: center">{{ $t('platform_es.tables.titles.diseases') }}</h3>
        <v-btn-toggle v-model="idx_sel_e"  v-on:change="get_selected_entities" multiple>
        <v-container v-for="(e, idx_e) in enfermedades" :key="idx_e" style="padding-right: 2%">
          <entity-button :entity_value="e" :entity_type="'E'"/>
        </v-container>
        </v-btn-toggle>
        <br/>
        <h3 style="text-align: center">{{ $t('platform_es.tables.titles.chemicals') }}</h3>
        <v-btn-toggle v-model="idx_sel_m" v-on:change="get_selected_entities" multiple>
        <v-container v-for="(m, idx_m) in medicamentos" :key="idx_m" style="padding-right: 2%">
          <entity-button :entity_value="m" :entity_type="'M'"/>
        </v-container>
          </v-btn-toggle>
        <br/>
        <div v-if="timeout">
          <v-alert
          v-model="alert"
          border="left"
          close-text="Close Alert"
          color="purple accent-1"
          dark
          dismissible
        >
            {{$t('error.validation.timeout')}}
          </v-alert>

        </div>
        <div v-if="evidences">
          <h2 style="text-align: center">{{ $t('platform_es.entitiesTitle') }}</h2>
            <div v-for="(ev, idx_ev) in evidences" :key="idx_ev" style="padding-top: 1%">
              <v-card>
                <v-card-title>{{titles[idx_ev]}}</v-card-title>
                <v-card-text v-html="ev"></v-card-text>
              </v-card>
            </div>
          </div>
        <div v-for="(table, index) in tableList"
             :key="index"
        >
          <v-data-table :headers="table.headers"
                        :items="table.items"
                        v-if="table.items.length !== 0"
                        dense disable-filtering disable-pagination
                        disable-sort hide-default-footer
          >
            <template #top>
              <v-card-title v-text="$t(table.title)"></v-card-title>
            </template>
          </v-data-table>
        </div>


      </div>
    </v-card>
  </v-container>
</template>

<script>
import axiosService from "@/service/axiosService";
import i18n from "@/i18n";
import EntityButton from "@/components/EntityButton";

export default {
  name: "PlatformEsView",
  components: {EntityButton},

  data: () => ({
    idx_sel_m: [],
    idx_sel_e: [],
    error_terms: false,
    timeout: false,
    selected_terms:[],
    evidences: null,
    titles: null,
    entities: null,
    sampleHTML: null,
    sampleTxt: null,
    sampleLang: "es",
    pipeline: "default",
    enfermedades: null,
    medicamentos: null,
    tableList: [
      {
        title: "platform_es.tables.titles.diseases",
        entityName: "enfermedades",
        items: [],
        headers: [
          { text: i18n.t("platform_es.tables.headers.term"), value: "text_term", align: "start", sortable: false,},
          { text: i18n.t("platform_es.tables.headers.foundTerm"), value: "found_term"},
          { text: i18n.t("platform_es.tables.headers.meshId"), value: "mesh_id" },
          { text: i18n.t("platform_es.tables.headers.cui"), value: "cui" },
          { text: i18n.t("platform_es.tables.headers.icd10"), value: "ICD10_id" },
          { text: i18n.t("platform_es.tables.headers.crossReferences"), value: "cross_references" },
          { text: i18n.t("platform_es.tables.headers.semanticType"), value: "semantic_type" },
        ],
      },
      {
        title: "platform_es.tables.titles.chemicals",
        entityName: "medicamentos",
        items: [],
        headers: [
          { text: i18n.t("platform_es.tables.headers.term"), value: "text_term", align: "start", sortable: false,},
          { text: i18n.t("platform_es.tables.headers.foundTerm"), value: "found_term"},
          { text: i18n.t("platform_es.tables.headers.meshId"), value: "mesh_id" },
          { text: i18n.t("platform_es.tables.headers.chebiId"), value: "chebi_id" },
          { text: i18n.t("platform_es.tables.headers.atc"), value: "ATC" },
          { text: i18n.t("platform_es.tables.headers.atcLevel"), value: "ATC_level" },
          { text: i18n.t("platform_es.tables.headers.crossReferences"), value: "cross_references" },
          { text: i18n.t("platform_es.tables.headers.cid"), value: "cid" },
        ],
      }

    ],
  }),
  computed: {
    loading(){
      return !this.entities && this.sampleTxt
    },
  },
  methods:{

    get_selected_entities(){
      this.selected_terms=[]
      this.evidences=null
      this.error_terms=false
      this.titles=null
      this.timeout=false

      this.idx_sel_e.forEach((e_item) => {
        this.selected_terms.push(this.enfermedades[e_item])
      })
      this.idx_sel_m.forEach((m_item) => {
        this.selected_terms.push(this.medicamentos[m_item])
      })
      if (this.selected_terms.length > 2){
        this.error_terms=true
      }else{
        console.log(this.selected_terms)
        axiosService.platformEsGetEvidences(this.selected_terms)
          .then(response => {
            if(response.status==504){
              this.timeout=true
            }
            this.evidences = response.data.evidences
            this.titles= response.data.titles
          })
      }
    },

    analyzeSample(){
      if(!this.sampleTxt) return

      this.entities = null
      this.sampleHTML = null
      this.tableList.map(table => {table.items = []})
      this.enfermedades = null
      this.medicamentos = null

      axiosService.platformEs(this.sampleTxt,this.pipeline)
          .then(response =>{
            this.entities = response.data.entities
            this.sampleHTML = response.data.html
            this.enfermedades = response.data.enfermedades
            this.medicamentos = response.data.medicamentos

            this.tableList.map(table => {
              table.items = this.entities[table.entityName]
            })

          })
          .catch(error => {
            console.log(error)
          })
    },
  },

}
</script>

<style scoped>

</style>
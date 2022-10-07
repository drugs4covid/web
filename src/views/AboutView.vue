<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('about.title')"/>
      <v-card-subtitle v-html="$t('about.subtitle')"/>
      <v-img src="@/assets/planofi.jpg"/>

      <v-card-title v-text="$t('about.team')"/>
      <v-container>
        <v-row>

          <v-col v-for="(member, index) in team"
                 :key="index"
          >
            <v-card width="175px">
              <v-row justify="center" dense>
                <v-col>
                  <v-avatar width="150px">
                    <v-img :src="member.source" contain/>
                  </v-avatar>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col class="text-center">
                  <span>{{ member.name }}</span>
                </v-col>
              </v-row>
              <v-row justify="center" class="mt-1">
                <v-chip-group>
                  <v-chip label outlined>
                    {{member.group}}
                  </v-chip>
                  <v-chip label>
                    {{ member.institution }}
                  </v-chip>
                </v-chip-group>
              </v-row>
              <v-row justify="center">
                <v-btn icon plain :href="member.twitter">
                  <v-icon color="#1DA1F2">mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon plain :href="member.linkedin">
                  <v-icon color="#0077b5">mdi-linkedin</v-icon>
                </v-btn>
                <v-btn icon plain :href="member.github">
                  <v-icon color="#c9510c">mdi-github</v-icon>
                </v-btn>
                <v-btn icon plain :href=member.email>
                  <v-icon color="#4285F4">mdi-email</v-icon>
                </v-btn>
              </v-row>
            </v-card>
          </v-col>

        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "AboutView",
  computed: {

  },
  data: () => ({
    team: [
      {
        source:"/assets/teamImages/OscarCorcho.jpeg",
        name: "Oscar Corcho",
        role: "Promoter",
        group: "Support",
        institution: "UPM",
        twitter: "https://twitter.com/ocorcho",
        github: "https://github.com/ocorcho",
        linkedin: "https://www.linkedin.com/in/ocorcho/",
        email: "mailto:ocorcho@fi.upm.es"
      },
      {
        source:"/assets/teamImages/AnaIglesiasMolina.jpg",
        name: "Ana Iglesias-Molina",
        role: "Knowledge Engineer",
        group: "KG",
        institution: "UPM",
        twitter: "https://twitter.com/_aieme",
        github: "https://github.com/anaigmo",
        linkedin: "https://www.linkedin.com/in/ana-iglesias-molina/",
        email: "mailto:ana.iglesiasm@upm.es"
      },
      {
        source:"/assets/teamImages/CarlosBadenesOlmedo.png",
        name: "Carlos Badenes-Olmedo",
        role: "Product Owner",
        group: "NLP",
        institution: "UPM",
        twitter: "https://twitter.com/carbadol",
        github: "https://github.com/cbadenes",
        linkedin: "https://www.linkedin.com/in/cbadenes",
        email: "mailto:cbadenes@fi.upm.es"
      },
    ]
  }),
  methods: {

  },
  created() {
  }
}
</script>

<style scoped>

</style>
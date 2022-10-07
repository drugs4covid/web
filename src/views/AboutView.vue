<template>
  <v-container>
    <v-card flat>

      <v-card-title v-text="$t('about.team')"/>
        <v-row dense>
          <v-col v-for="(member, index) in team" :key="index">
            <team-card :name="member.name"
                       :role="member.role"
                       :group="member.group"
                       :institution="member.institution"
                       :img="member.source"
                       :twitter="member.twitter"
                       :github="member.github"
                       :linkedin="member.linkedin"
                       :email="member.email"
            />
          </v-col>
        </v-row>

      <br/><br/><v-divider/>

      <v-card-title v-text="$t('about.title')"/>
      <v-card-subtitle v-html="$t('about.subtitle')"/>
      <v-col cols="12" flat>
        <iframe class="h_iframe" id="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.173372904003!2d-3.841707684344045!3d40.405009879366546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4185f258e5eec5%3A0xdf7b007bb6904fa5!2sEscuela%20T%C3%A9cnica%20Superior%20de%20Ingenieros%20Inform%C3%A1ticos%20de%20la%20Universidad%20Polit%C3%A9cnica%20de%20Madrid!5e0!3m2!1ses!2ses!4v1665149738222!5m2!1ses!2ses"
                allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        />
      </v-col>

    </v-card>
  </v-container>
</template>

<script>

import TeamCard from "@/components/TeamCard";
import OCPic from "@/assets/Team-Images/OscarCorcho.jpeg";
import AIPic from "@/assets/Team-Images/AnaIglesiasMolina.jpg";
import CBPic from "@/assets/Team-Images/CarlosBadenesOlmedo.png";

export default {
  name: "AboutView",
  components: {TeamCard},
  computed: {

  },
  data: () => ({
    team: [
      {
        source: OCPic,
        name: "Oscar Corcho",
        role: "Promoter",
        group: "Support",
        institution: "UPM",
        twitter: "ocorcho",
        github: "ocorcho",
        linkedin: "ocorcho",
        email: "ocorcho@fi.upm.es"
      },
      {
        source: AIPic,
        name: "Ana Iglesias-Molina",
        role: "Knowledge Engineer",
        group: "KG",
        institution: "UPM",
        twitter: "_aieme",
        github: "anaigmo",
        linkedin: "ana-iglesias-molina/",
        email: "ana.iglesiasm@upm.es"
      },
      {
        source: CBPic,
        name: "Carlos Badenes-Olmedo",
        role: "Product Owner",
        group: "NLP",
        institution: "UPM",
        twitter: "carbadol",
        github: "cbadenes",
        linkedin: "cbadenes",
        email: "cbadenes@fi.upm.es"
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
#iframe{
  height: 600px;
  border: 0;
}
.h_iframe iframe {
  width: 100%;
  height: 100%;
}
.h_iframe {
  height: 100%;
  width: 100%;
}
</style>
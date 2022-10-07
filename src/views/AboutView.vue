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

      <v-card-title v-text="$t('about.title')"/>
      <v-card-subtitle v-html="$t('about.subtitle')"/>
      <v-img src="@/assets/planofi.jpg"/>
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

</style>
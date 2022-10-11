<template>
  <v-container fluid>

    <v-card flat no-body class="overflow-hidden border-0">
      <v-row align-content="space-around">
        <v-spacer/>
        <v-col cols="4" align-self="center">
          <h4 v-text="$t('home.header')"/>
        </v-col>
        <v-col>
          <v-img cols="4" src="@/assets/Home-Images/pc-image.png"
                 contain width="300px"
          />
        </v-col>
        <v-spacer/>
        <v-col class="text-center" cols="12">
          <p v-text="$t('home.subheader')"/>
        </v-col>
      </v-row>
    </v-card>

    <div v-for="section in sections" :key="section.name">
      <br/><v-divider/><br/><br/>
      <v-card no-body class="overflow-hidden border-0" flat>
        <v-row>

          <v-spacer/>
          <v-col cols="5">
            <v-card-title v-text="$t(section.title)"/>
            <v-card-subtitle v-text="$t(section.subtitle)"/>
            <v-card-text v-html="$t(section.text)"/>
            <v-card-actions>
              <v-btn v-text="$t(section.btnText)"
                     :to="{name: section.to}"
              />
            </v-card-actions>
          </v-col>

          <v-col cols="5">
            <v-img :src="section.img" class="rounded-0"
                   max-width="500px"
                   contain
            />
          </v-col>
          <v-spacer/>

        </v-row>
      </v-card>
    </div>

  </v-container>
</template>

<script>
import Section1Img from "@/assets/Home-Images/graph-image.png";
import Section2Img from "@/assets/Home-Images/parse-diagram.png";
import Section3Img from "@/assets/Home-Images/extract-table.png";
import Section4Img from "@/assets/Home-Images/integrate-ontology.png";
import Section5Img from "@/assets/Home-Images/publish-diagram.png";

export default {
  name: 'HomeView',
  data: () => ({
    sections: [
      {
        name: "harvest",
        title: "home.section1.title",
        text: "home.section1.text",
        btnText: "home.section1.btnText",
        to: "corpus",
        img: Section1Img,
        imgPosition: "left",
      },
      {
        name: "parse",
        title: "home.section2.title",
        text: "home.section2.text",
        btnText: "home.section2.btnText",
        to: "bio-ner",
        img: Section2Img,
        imgPosition: "left",
      },
      {
        name: "extract",
        title: "home.section3.title",
        text: "home.section3.text",
        btnText: "home.section3.btnText",
        to: "bio-search",
        img: Section3Img,
        imgPosition: "left",
      },
      {
        name: "integrate",
        title: "home.section4.title",
        text: "home.section4.text",
        btnText: "home.section4.btnText",
        to: "ontology",
        img: Section4Img,
        imgPosition: "left",
      },
      {
        name: "publish",
        title: "home.section5.title",
        text: "home.section5.text",
        btnText: "home.section5.btnText",
        to: "bio-qa",
        img: Section5Img,
        imgPosition: "left",
      },
    ],

  }),
}
</script>

<template>
  <v-container fluid>

    <v-card flat max-width="500px" >
      <v-card-text v-text="$t('homeView.header')"
      />
    </v-card>

    <br/><v-divider/><br/><br/>
    <problem-component></problem-component>

    <br/><v-divider/><br/><br/>
    <resources-component></resources-component>

    <br/><v-divider/><br/><br/>
    <approach-component></approach-component>

  </v-container>
</template>

<script>
import ProblemComponent from "@/components/ProblemCard";
import ResourcesComponent from "@/components/ResourcesCard";
import ApproachComponent from "@/components/ApproachCard";

export default {
  name: 'HomeView',
  components: {
    ApproachComponent,
    ResourcesComponent,
    ProblemComponent},
}
</script>

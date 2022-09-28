<template>
    <v-container fluid>

      <problem-component></problem-component>

      <br/><hr/><br/><br/>
      <resources-component></resources-component>

      <br/><hr/><br/><br/>
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

<template>
  <div id="home">
    <b-container>
      <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
        <p>For more information visit our website</p>
        <b-btn variant="primary" href="https://bootstrap-vue.org/">More Info</b-btn>
      </b-jumbotron>

      <b-form-group
          horizontal
          :label-cols="4"
          description="Let us know your name."
          label="Enter your name"
      >
      </b-form-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {

  }
}
</script>

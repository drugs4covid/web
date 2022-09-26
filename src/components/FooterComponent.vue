<template>
  <v-footer>
    <v-container fluid>
      <hr/>
      <v-row no-gutters align-h="between">
        <v-col>
          <v-img max-height="50px" src="@/assets/d4c-logo.svg"/>
        </v-col>
        <v-col>
          <v-row style="font-size: small">
            {{$t('footer.sponsor')}}
          </v-row>
          <v-row align-h="center">
            <v-img max-height="50px" style="vertical-align: middle" src="@/assets/BBVA-logos/JPG/AFF LOGO Fundación 2 colores/USO PRINCIPAL/Fundacion-BBVA_principal.png"></v-img>
            <v-col cols="5" style="text-align: left; font-size: xx-small  ;color: rgb(0,0,0,.65)">
              {{$t('footer.caption')}}
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-img max-width="50px" src="@/assets/oeg-logo.jpg"/>
          <v-img max-width="50px" src="@/assets/ETSIINF-logo.png"/>
          <v-img max-height="50px" src="@/assets/UPM-logo.png"/>
        </v-col>
      </v-row>
      <br/>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "footerComponent",
}
</script>

<style scoped>

</style>
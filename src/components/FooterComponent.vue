<template>
  <v-footer padless absolute height="100px">
    <v-card tile flat min-width="100%" color="transparent">
      <v-row align-content="center" justify="center">

        <v-col cols="3" align-self="center">
          <v-img src="@/assets/d4c-logo.svg"
                 max-height="50px"
                 contain
          />
        </v-col>

        <v-col cols="6">
          <v-row justify="center">
            <span id="footer-sponsor" v-text="$t('footer.sponsor')"/>
            <v-img src="@/assets/BBVA-logos/JPG/AFF LOGO Fundación 2 colores/USO PRINCIPAL/Fundacion-BBVA_principal.png"
                   max-height="50px"
                   contain
            />
            <span id="footer-caption" v-text="$t('footer.caption')"/>
          </v-row>
        </v-col>

        <v-col cols="3" align-self="center" >
          <v-row justify="center">
            <v-img contain max-width="50px" src="@/assets/oeg-logo.jpg"/>
            <v-img contain max-width="50px" src="@/assets/ETSIINF-logo.png"/>
            <v-img contain max-width="50px" src="@/assets/UPM-logo.png"/>
          </v-row>
        </v-col>

      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "footerComponent",
}
</script>

<style scoped>
#footer-sponsor{
  font-size: small;
}
#footer-caption{
  vertical-align: middle;
  text-align: left;
  font-size: xx-small;
  color: rgb(0,0,0,.65);
}
</style>
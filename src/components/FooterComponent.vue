<template>
  <footer>
    <b-container fluid>
      <hr/>
      <b-row no-gutters align-h="between">
        <b-col>
          <b-img height="50px" style="vertical-align: middle" src="@/assets/d4c-logo.svg"/>
        </b-col>
        <b-col>
          <b-row style="font-size: small">
            {{$t('footer.sponsor')}}
          </b-row>
          <b-row align-h="center">
            <b-img height="50px" style="vertical-align: middle" src="@/assets/BBVA-logos/JPG/AFF LOGO Fundación 2 colores/USO PRINCIPAL/Fundacion-BBVA_principal.png"></b-img>
            <b-col cols="5" style="text-align: left; font-size: xx-small  ;color: rgb(0,0,0,.65)">
              {{$t('footer.caption')}}
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-img width="50px" src="@/assets/oeg-logo.jpg"/>
          <b-img width="50px" src="@/assets/ETSIINF-logo.png"/>
          <b-img height="50px" src="@/assets/UPM-logo.png"/>
        </b-col>
      </b-row>
      <br/>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "footerComponent",
}
</script>

<style scoped>

</style>
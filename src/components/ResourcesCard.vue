<template>
  <b-container>
    <b-card no-body class="overflow-hidden border-0">
      <b-row no-gutters>

        <b-col>
          <b-card-body style="text-align: justify">
            <b-card-title>
              {{$t('resources.title')}}
            </b-card-title>
            <b-card-sub-title>
              {{$t('resources.subtitle')}}
            </b-card-sub-title>
            <b-card-text>
              {{$t('resources.text')}}
            </b-card-text>
          </b-card-body>
        </b-col>

      </b-row>
      <b-row no-gutters>
        <b-col>
          <b-card-img src="https://picsum.photos/400/400/?image=21" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col>
          <b-card-img src="https://picsum.photos/400/400/?image=22" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "ResourcesComponent"
}
</script>

<style scoped>

</style>
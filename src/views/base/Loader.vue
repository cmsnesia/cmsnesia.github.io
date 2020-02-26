<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card header="Loader themes">
            <b-button style="width: 200px; margin-right: 5px" @click='loaderThemes("spinner")' variant="info" size="sm">Loader spinner</b-button>
            <b-button style="width: 200px; margin-right: 5px" @click='loaderThemes("dots")' variant="info" size="sm">Loader dots</b-button>
            <b-button style="width: 200px; margin-right: 5px" @click='loaderThemes("bars")' variant="info" size="sm">Loader bars</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// spinner or dots or bars
export default {
  name: 'Loader',
  methods: {
    loaderThemes (val) {
      const loader = this.$loading.show({
        opacity: 0.4,
        loader: val,
        zIndex: 99999
      })
      setTimeout(() => {
        loader.hide()
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card header="Embed">
            <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/yROIqgfirGU" allowfullscreen/>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Embed'
}
</script>

<style scoped>

</style>

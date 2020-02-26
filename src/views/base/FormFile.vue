<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card header="Upload File">
            <b-form-file
              v-model="file"
              :state="Boolean(file)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."/>
            <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormFile',
  data () {
    return {
      file: null
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <div class="row">
      <div class="col-6">
        <v-select-2 :data="options"></v-select-2>
      </div>
      <div class="col-6">
        <v-select-2 :data="options"></v-select-2>
      </div>
    </div>
  </div>
</template>

<script>
import VSelect2 from '../components/VSelect2'
export default {
  name: 'ComponentPlayground',
  data () {
    return {
      options: [
        'foo',
        'bar',
        'baz'
      ]
    }
  },
  components: {
    VSelect2
  }
}
</script>

<style scoped>
</style>

<template>
    <div>
      <v-select ref="vSelect" :options="data" :placeholder="placeholder" :searchable="searchable"></v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  name: 'VSelect2',
  props: {
    'data': Array,
    'placeholder': String,
    'searchable': {
      type: Boolean,
      default: true
    }
  },
  components: {
    vSelect
  },
  mounted: function () {
  }
}
</script>

<style lang="sass" scoped>
</style>

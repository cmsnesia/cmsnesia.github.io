<template>
  <div class="table-filter font-table">
    <div class="table-responsive" style="font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;">
      <b-table :busy="isBusy" show-empty emptyText="Tidak ada data" head-variant="white" :fields="columns" :items="item.data" :tbody-tr-class="rowclass">
        <div slot="HEAD[]" class="text-nowrap" slot-scope="scope">{{ scope.label }}</div>

        <!-- thead-top digunakan untuk menambahkan ekstra thead -->
        <template slot="thead-top" slot-scope="data">
          <slot name="thead-top" v-bind="data"></slot>
        </template>
        <!-- thead-top digunakan untuk menambahkan ekstra thead -->

        <!-- dinamis slot by key columns untuk mengcustom column table -->
        <template v-for="column in columns" v-slot:[`cell(${column.key})`]="data">
          <slot :name="column.key" v-bind="data" v-if="column.key === 'number'">{{ data.index + 1 + ((currentPage - 1) * item.size) }} </slot>
          <slot :name="column.key" v-bind="data">
            <template>{{data.value}}</template>
          </slot>
        </template>
        <!-- dynamy slot by key columns untuk mengcustom column table -->

        <!-- empty & table loader on get data -->
        <template v-slot:empty="scope">
          <p class="text-center">{{ scope.emptyText }}</p>
        </template>
        <div slot="table-busy" class="text-center">
          <b-spinner class="align-middle mx-2" small />
          <span>Memuat...</span>
        </div>
        <!-- empty & table loader on get data -->
      </b-table>
    </div>
    <div style="margin-left: 10px" class="pagination-section align-items-right">
      <b-pagination pagination-lg v-model="currentPage" next-text="Selanjutnya" prev-text="Sebelumnya" :total-rows="item.total" :per-page="item.size" :hide-goto-end-buttons="true" @input="onChangePage"></b-pagination>
    </div>
  </div>
</template>

<script>
// import Readmore from './readmore'

export default {
  name: 'table',
  components: {
    // Readmore
  },
  props: {
    minword: Number,
    item: {
      type: Object,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    rowclass: {
      type: Function
    },
    isBusy: {
      default: false,
      type: Boolean
    }
  },
  data: function () {
    return {
      currentPage: 1
    }
  },
  methods: {
    onChangePage: function (page) {
      if (this.$parent.paging) {
        this.$parent.paging.page = page - 1
        this.$emit('pagination', page - 1)
      } else if (this.$parent.$parent.paging) {
        this.$parent.$parent.paging.page = page - 1
        this.$emit('pagination', page - 1)
      } else if (this.$parent.$parent.$parent.paging) {
        this.$parent.$parent.$parent.paging.page = page - 1
        this.$emit('pagination', page - 1)
      } else if (this.$parent.$parent.$parent.$parent.paging) {
        this.$parent.$parent.$parent.$parent.paging.page = page - 1
        this.$emit('pagination', page - 1)
      } else if (this.$parent.$parent.$parent.$parent.$parent.paging) {
        this.$parent.$parent.$parent.$parent.$parent.paging.page = page - 1
        this.$emit('pagination', page - 1)
      } else if (this.$parent.$parent.$parent.$parent.$parent.$parent.paging) {
        this.$parent.$parent.$parent.$parent.$parent.$parent.paging.page = page - 1
        this.$emit('pagination', page - 1)
      } else {
        this.$parent.$parent.$parent.$parent.$parent.$parent.$parent.paging.page = page - 1
        this.$emit('pagination', page - 1)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .b-table-sticky-header {
    overflow: auto;
    height: 70vh;
  }
  .table-responsive  {
    font-size: 11px;
  }
  .table-file {
    min-height: 500px;
  }
</style>

<template>
  <div>
    <b-card>
      <div slot="header" show-header>
        <b-navbar toggleable="lg">
          <b-navbar-brand href="#">Pages</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-input size="sm" v-model="search" class="mr-sm-2" placeholder="Kata kunci"></b-input>
                <b-button size="sm" style="margin-left: 5px; float: right" class="my-2 my-sm-0"
                          @click="onClickButtonSearch">Cari
                </b-button>
                <b-button size="sm" style="margin-left: 5px; float: right" class="my-2 my-sm-0"
                          @click="onClickButtonAdd">Tambah
                </b-button>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <table-plate sticky-header="false" :columns="tableColumn" :item="listItem" :useNumber="false"
                   @pagination="getDataTable">
        <template slot="action" slot-scope="data">
          <b-button style="margin: 0 3px 0 3px" size="sm" variant="info" @click="onClickButtonEdit(data.item)"><i
            class="fa fa-pencil"></i></b-button>
          <b-button style="margin: 0 3px 0 3px" size="sm" variant="danger" @click="doDelete(data.item)"><i
            class="fa fa-trash"></i></b-button>
        </template>
      </table-plate>
    </b-card>
  </div>
</template>

<script>

import swall from 'sweetalert'
import TablePlate from '../../components/Table'
import { BaseMixin } from '../../components/BaseMixin'
import PageService from '../../service/PageService'

const pageService = PageService.build()

export default {
  name: 'table',
  data () {
    return {
      selectedCategories: [],
      categories: [],
      isLoading: false,
      id: '',
      search: '',
      menuName: '',
      tableColumn: [
        { key: 'number', label: 'No', tdClass: 'text-center', thClass: 'text-center index th-fixed' },
        { key: 'name', label: 'Nama', thClass: 'th-fixed' },
        { key: 'action', label: 'Aksi', thClass: 'th-fixed, text-center', tdClass: 'text-center' }
      ],
      listItem: {},
      listData: []
    }
  },
  components: {
    TablePlate
  },
  mixins: [BaseMixin],
  created () {
    this.getDataTable()
  },
  methods: {
    getDataTable: async function () {
      let param = Object.assign(this.paging)
      let data = {}
      const response = await pageService.find(data, param)
      this.listItem = Object.assign({
        data: response.content,
        total: response.totalElements,
        size: response.size,
        page: response.pageable.offset + 1
      })
    },
    async doDelete (val) {
      let data = Object.assign({
        id: val.id
      })
      const response = await pageService.delete(data)
      this.resetFields()
      swall(response.statusCode.message)
      this.getDataTable()
    },
    async onClickButtonAdd () {
      this.$router.push({ name: 'Page Editor', params: { id: null } })
    },
    async onClickButtonEdit (val) {
      this.$router.push({ name: 'Page Editor', params: { id: val.id } })
    },
    async onClickButtonSearch () {
      let param = Object.assign(this.paging)
      let data = {
        name: this.search
      }
      const response = await pageService.find(data, param)
      this.listItem = Object.assign({
        data: response.content,
        total: response.totalElements,
        size: response.size,
        page: response.pageable.offset + 1
      })
    },
    async resetFields () {
      this.id = null
      this.menuName = null
    }
  }
}
</script>

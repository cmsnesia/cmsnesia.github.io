<template>
  <div>
    <b-card>
      <div slot="header" show-header>
        <b-navbar toggleable="lg">
          <b-navbar-brand href="#">Posts</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-input size="sm" class="mr-sm-2" v-model="search" placeholder="Kata kunci"></b-input>
                <b-button size="sm" style="margin-left: 5px; float: right" class="my-2 my-sm-0" @click="onClickButtonSearch">Cari</b-button>
                <b-button size="sm" style="margin-left: 5px; float: right" class="my-2 my-sm-0" @click="onClickButtonAdd">Tambah</b-button>
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
import PostService from '../../service/PostService'

const postService = PostService.build()
export default {
  name: 'table',
  data () {
    return {
      search: '',
      tableColumn: [
        { key: 'number', label: 'No', tdClass: 'text-center', thClass: 'text-center index th-fixed' },
        { key: 'title', label: 'Judul', thClass: 'th-fixed' },
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
      const response = await postService.find(data, param)
      this.listItem = Object.assign({
        data: response.content,
        total: response.totalElements,
        size: response.size,
        page: response.pageable.offset + 1
      })
    },
    async doDelete (val) {
      swall({
        title: 'Konfirmasi',
        text: 'Apakah anda yakin akan menghapus data ini?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            let data = Object.assign({
              id: val.id
            })
            postService.delete(data).then(result => {
              if (result.statusCode.code === parseInt(process.env.VUE_APP_STATUS_DELETE_SUCCESS)) {
                swall('Success', {
                  icon: 'success',
                  title: 'Sucess',
                  text: result.statusCode.message
                })
                this.getDataTable()
              }
            })
          }
        })
    },
    async onClickButtonAdd () {
      this.$router.push({ name: 'Editor', params: { id: null } })
    },
    async onClickButtonEdit (val) {
      let data = Object.assign({
        id: val.id
      })
      postService.edit(data).then(response => {
        this.$router.push({ name: 'Editor', params: { id: response.data.id } })
      })
    },
    async onClickButtonSearch () {
      let param = Object.assign(this.paging)
      let data = {
        title: this.search
      }
      const response = await postService.find(data, param)
      this.listItem = Object.assign({
        data: response.content,
        total: response.totalElements,
        size: response.size,
        page: response.pageable.offset + 1
      })
    }
  }
}
</script>

<style scoped>

</style>

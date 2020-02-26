<template>
  <div>
    <b-card>
      <div slot="header" show-header>
        <b-navbar toggleable="lg">
          <b-navbar-brand href="#">Categories</b-navbar-brand>
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
      <b-modal ref="categoryModal" title="Tambah Kategori">
        <div class="form-row">
          <div class="col-12">
            <ValidationObserver ref="observer" v-slot="{ invalid }">
              <div class="form-group">
                <label>Category Name</label>
                <ValidationProvider rules="required|alpha_spaces" v-slot="{ errors }">
                  <input type="text" class="form-control" v-model="categoryName" required>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </ValidationObserver>
          </div>
        </div>
        <div slot="modal-footer">
          <button type="submit" class="btn btn-primary" @click="doSave">Simpan</button>
        </div>
      </b-modal>
    </b-card>
  </div>
</template>

<script>

import swall from 'sweetalert'
import TablePlate from '../../components/Table'
import { BaseMixin } from '../../components/BaseMixin'
import CategoriService from '../../service/CategoryService'

const categoriService = CategoriService.build()
export default {
  name: 'table',
  data () {
    return {
      id: '',
      search: '',
      categoryName: '',
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
      const response = await categoriService.find(data, param)
      this.listItem = Object.assign({
        data: response.content,
        total: response.totalElements,
        size: response.size,
        page: response.pageable.offset + 1
      })
    },
    async doSave () {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return
      }
      if (this.id) {
        let data = Object.assign({
          id: this.id,
          name: this.categoryName
        })
        categoriService.edit(data).then(result => {
          swall('Data berhasil disimpan!', {
            icon: 'success',
            title: 'Sukses',
            text: result.statusCode.message
          })
          this.$refs['categoryModal'].hide()
          this.resetFields()
          this.getDataTable()
        })
      } else {
        let data = Object.assign({
          name: this.categoryName
        })
        categoriService.add(data).then(result => {
          swall('Data berhasil disimpan!', {
            icon: 'success',
            title: 'Sukses',
            text: result.statusCode.message
          })
          this.$refs['categoryModal'].hide()
          this.resetFields()
          this.getDataTable()
        })
      }
    },
    async doDelete (val) {
      let data = Object.assign({
        id: val.id
      })
      categoriService.delete(data).then(result => {
        swall('Data berhasil disimpan!', {
          icon: 'success',
          title: 'Sukses',
          text: result.statusCode.message
        })
        this.$refs['menuModal'].hide()
        this.resetFields()
        this.getDataTable()
      })
    },
    async onClickButtonAdd () {
      this.id = null
      this.$refs['categoryModal'].show()
    },
    async onClickButtonEdit (val) {
      this.id = val.id
      if (val.id) {
        this.$refs['categoryModal'].show()
        this.categoryName = val.name
      }
    },
    async onClickButtonSearch () {
      let param = Object.assign(this.paging)
      let data = {
        name: this.search
      }
      const response = await categoriService.find(data, param)
      this.listItem = Object.assign({
        data: response.content,
        total: response.totalElements,
        size: response.size,
        page: response.pageable.offset + 1
      })
    },
    async resetFields () {
      this.id = null
      this.categoryName = null
    }
  }
}
</script>

<style scoped>

</style>

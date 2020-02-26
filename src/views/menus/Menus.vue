<template>
  <div>
    <b-card>
      <div slot="header" show-header>
        <b-navbar toggleable="lg">
          <b-navbar-brand href="#">Menus</b-navbar-brand>
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
      <b-modal ref="menuModal" title="Tambah Menu">
        <div class="form-row">
          <div class="col-12">
            <ValidationObserver ref="observer" v-slot="{ invalid }">
              <div class="form-group">
                <label>Menu Name</label>
                <ValidationProvider rules="required|alpha_spaces" v-slot="{ errors }">
                  <input type="text" class="form-control" v-model="menuName" required>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
                <br/>
                <label>Categories</label>
                <ValidationProvider v-slot="{ errors }">
                  <multiselect style="height: 40px" v-model="selectedCategories" id="ajax" label="name" track-by="id"
                               placeholder="Type to search categories"
                               open-direction="bottom" :options="categories" :multiple="true" :searchable="true"
                               :loading="isLoading"
                               :internal-search="false" :clear-on-select="false" :close-on-select="false"
                               :options-limit="300"
                               :limit="5" :limit-text="limitTextCategories" :max-height="300" :show-no-results="false"
                               :hide-selected="true"
                               @search-change="asyncFindCategories">
                    <template slot="tag" slot-scope="{ option, remove }"><span><span>{{ option.name }}</span><span
                      @click="remove(option)"> ❌ </span></span></template>
                    <template slot="clear" slot-scope="props">
                      <div v-if="selectedCategories.length"
                           @mousedown.prevent.stop="clearAllSelectedCategories(props.search)"></div>
                    </template>
                    <span slot="noResult">Menu tidak ditemukan. Selahkan menggunakan kata kunci lain.</span>
                  </multiselect>
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
import Multiselect from 'vue-multiselect'
import TablePlate from '../../components/Table'
import { BaseMixin } from '../../components/BaseMixin'
import MenuService from '../../service/MenuService'
import CategoryService from '../../service/CategoryService'

const menuService = MenuService.build()
const categoryService = CategoryService.build()

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
    TablePlate,
    Multiselect
  },
  mixins: [BaseMixin],
  created () {
    this.getDataTable()
  },
  methods: {
    getDataTable: async function () {
      let param = Object.assign(this.paging)
      let data = {}
      const response = await menuService.find(data, param)
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
          name: this.menuName,
          categories: this.selectedCategories
        })
        menuService.edit(data).then(result => {
          swall('Data berhasil disimpan!', {
            icon: 'success',
            title: 'Sukses',
            text: result.statusCode.message
          })
          this.$refs['menuModal'].hide()
          this.resetFields()
          this.getDataTable()
        })
      } else {
        let data = Object.assign({
          name: this.menuName,
          categories: this.selectedCategories
        })
        menuService.add(data).then(result => {
          swall('Data berhasil disimpan!', {
            icon: 'success',
            title: 'Sukses',
            text: result.statusCode.message
          })
          this.$refs['menuModal'].hide()
          this.resetFields()
          this.getDataTable()
        })
      }
    },
    async doDelete (val) {
      let data = Object.assign({
        id: val.id
      })
      menuService.delete(data).then(result => {
        swall('Data berhasil dihapus!', {
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
      this.$refs['menuModal'].show()
    },
    async onClickButtonEdit (val) {
      this.id = val.id
      if (val.id) {
        this.$refs['menuModal'].show()
        this.menuName = val.name
        this.selectedCategories = val.categories
      }
    },
    async onClickButtonSearch () {
      let param = Object.assign(this.paging)
      let data = {
        name: this.search
      }
      const response = await menuService.find(data, param)
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
    },
    limitTextCategories (count) {
      return `and ${count} kategori lainnya`
    },
    asyncFindCategories (query) {
      this.isLoading = true
      let param = Object.assign({ page: 0, size: 100 })
      let data = { name: query }
      categoryService.find(data, param).then(response => {
        this.categories = response.content.map(function (category) {
          return Object.assign({ id: category.id, name: category.name })
        })
        this.isLoading = false
      })
    },
    clearAllSelectedCategories () {
      this.selectedCategories = []
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<template>

  <b-card>
    <div slot="header" show-header>
      <b-navbar-brand v-if="this.$route.params.id === null || this.$route.params.id === ''">Tambah Data</b-navbar-brand>
      <b-navbar-brand v-else>Ubah Data</b-navbar-brand>
    </div>
    <b-row>
      <b-col sm="12" md="12">
        <b-card style="height: 80px">
          <b-input style="height: 40px" placeholder="Title of your post" v-model="title" required></b-input>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" md="6">
        <b-card style="height: 80px">
          <multiselect style="height: 40px" v-model="selectedCategories" id="ajax" label="name" track-by="id" placeholder="Masukan nama kategori untuk mencari"
                       open-direction="bottom" :options="categories" :multiple="true" :searchable="true" :loading="isLoading"
                       :internal-search="false" :clear-on-select="false" :close-on-select="false" :options-limit="300"
                       :limit="5" :limit-text="limitTextCategories" :max-height="300" :show-no-results="false" :hide-selected="true"
                       @search-change="asyncFindCategories">
            <template slot="tag" slot-scope="{ option, remove }"><span><span>{{ option.name }}</span><span @click="remove(option)"> ❌ </span></span></template>
            <template slot="clear" slot-scope="props">
              <div v-if="selectedCategories.length" @mousedown.prevent.stop="clearAllSelectedCategories(props.search)"></div>
            </template><span slot="noResult">Kategori tidak ditemukan. Selahkan menggunakan kata kunci lain.</span>
          </multiselect>
        </b-card>
      </b-col>
      <b-col sm="12" md="6">
        <b-card style="height: 80px">
          <multiselect style="height: 40px" v-model="selectedTags" tag-placeholder="Tambah tag" placeholder="Tambahkan tag" label="name" track-by="id" :options="tags" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12" md="12">
        <b-card>
          <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="content"></vue-editor>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12" md="6">
        <b-card style="height: 80px">
          <input type="file" id="file" ref="thumbnailImage" v-on:change="handleThumbnailImageAdded()"/>
        </b-card>
      </b-col>
      <b-col sm="12" md="6">
        <b-card style="height: 80px">
          <b-button style="float: right" @click="doSave">Simpan</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-card>

</template>

<script>
import { VueEditor } from 'vue2-editor'
import swall from 'sweetalert'
import Multiselect from 'vue-multiselect'
import CategoryService from '../../service/CategoryService'
import PostService from '../../service/PostService'
import StoreageService from '../../service/StoreageService'

const postService = PostService.build()
const categoryService = CategoryService.build()
const storeageService = StoreageService.build()

export default {
  components: {
    VueEditor,
    Multiselect
  },
  props: ['id'],
  created () {
    if (this.$route.params.id !== null && this.$route.params.id !== '') {
      postService.findDraftById({ id: this.$route.params.id }).then(response => {
        this.title = response.data.title
        this.content = response.data.content
        this.medias = response.data.medias
        this.selectedCategories = response.data.categories
        this.selectedTags = response.data.tags
      })
    } else {
      this.title = ''
      this.content = ''
      this.medias = []
      this.selectedCategories = []
      this.selectedTags = []
    }
  },
  data () {
    return {
      title: '',
      medias: [],
      content: '',
      selectedCategories: [],
      categories: [],
      isLoading: false,
      selectedTags: [],
      tags: [],
      thumbnailUrl: '',
      defaultWidth: 360,
      defaultHeight: 240
    }
  },

  methods: {
    imageToBase64: function (file, callback) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (function (f) {
        return function (e) {
          var data = this.result
          callback(data)
        }
      })(file)
    },
    imageResizedToBase64: function (file, width, height, callback) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = event => {
        const img = new Image()
        img.src = event.target.result
        img.onload = () => {
          const elem = document.createElement('canvas')
          elem.width = width
          elem.height = height
          const ctx = elem.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)
          ctx.canvas.toBlob((blob) => {
            const newFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now()
            })
            this.imageToBase64(newFile, callback)
          }, 'image/jpeg', 1)
        }
      }
    },
    handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
      this.imageResizedToBase64(file, this.defaultWidth, this.defaultHeight, async function (data) {
        const response = await storeageService.upload(data)
        Editor.insertEmbed(cursorLocation, 'image', response.data.content.download_url)
      })
    },
    limitTextCategories (count) {
      return `and ${count} kategori lainnya`
    },
    handleThumbnailImageAdded: function () {
      const file = this.$refs.thumbnailImage.files[0]
      var parent = this
      this.imageResizedToBase64(file, this.defaultWidth, this.defaultHeight, async function (data) {
        const response = await storeageService.upload(data)
        const media = {
          'name': response.data.content.name,
          'url': response.data.content.download_url,
          'type': 'THUMBNAIL'
        }
        if (parent.medias === null) {
          parent.medias = [ media ]
        } else {
          parent.medias.splice(0, 0, media)
        }
      })
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
    },
    addTag (newTag) {
      const tag = {
        name: newTag,
        id: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          let r = Math.random() * 16 | 0; var v = c === 'x' ? r : (r & 0x3 | 0x8)
          return v.toString(16)
        })
      }
      this.tags.push(tag)
      this.selectedTags.push(tag)
    },
    async doSave () {
      let data = Object.assign({
        categories: this.selectedCategories,
        content: this.content,
        medias: this.medias,
        tags: this.selectedTags,
        title: this.title,
        id: this.$route.params.id
      })
      if (data.title === null || data.title === '') {
        swall('Harap tidak mengosongkan judul')
      } else if (data.categories === null || data.categories.length === 0) {
        swall('Harap menambahkan minimal satu kategori')
      } else if (data.tags === null || data.tags.length === 0) {
        swall('Harap menambahkan minimal satu tag')
      } else if (data.content === null || data.content === '') {
        swall('Harap mengisi konten')
      } else if (data.medias === null || data.medias.length === 0) {
        swall('Harap meng-unggah thumbnail')
      } else {
        swall({
          title: 'Konfirmasi',
          text: 'Apakah anda yakin akan menyiman data ini?',
          icon: 'warning',
          buttons: true,
          dangerMode: true
        })
          .then((willSave) => {
            if (willSave) {
              if (data.id) {
                postService.editDraft(data).then(result => {
                  swall('Data berhasil disimpan!', {
                    icon: 'success',
                    title: 'Sukses',
                    text: result.statusCode.message
                  })
                  this.$router.push({ name: 'Published' })
                })
              } else {
                postService.add(data).then(result => {
                  swall('Data berhasil disimpan!!', {
                    icon: 'success',
                    title: 'Sukses',
                    text: result.statusCode.message
                  })
                  this.$router.push({ name: 'Published' })
                })
              }
            }
          })
      }
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

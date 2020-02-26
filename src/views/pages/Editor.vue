<template>

  <b-card>
    <div slot="header" show-header>
      <b-navbar-brand v-if="this.$route.params.id === null || this.$route.params.id === ''">Tambah Data</b-navbar-brand>
      <b-navbar-brand v-else>Ubah Data</b-navbar-brand>
    </div>
    <b-row>
      <b-col sm="12" md="12">
        <b-card style="height: 80px">
          <b-input style="height: 40px" placeholder="Nama" v-model="name" required></b-input>
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
import PageService from '../../service/PageService'
import StoreageService from '../../service/StoreageService'

const pageService = PageService.build()
const storeageService = StoreageService.build()

export default {
  components: {
    VueEditor
  },
  props: ['id'],
  created () {
    if (this.$route.params.id !== null && this.$route.params.id !== '') {
      pageService.findById({ id: this.$route.params.id }).then(response => {
        this.name = response.data.name
        this.content = response.data.content
        this.medias = response.data.medias
      })
    } else {
      this.name = ''
      this.content = ''
      this.medias = []
    }
  },
  data () {
    return {
      name: '',
      medias: [],
      content: '',
      isLoading: false
    }
  },

  methods: {
    handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (function (f) {
        return async function (e) {
          var data = this.result
          const response = await storeageService.upload(data)
          Editor.insertEmbed(cursorLocation, 'image', response.data.content.download_url)
        }
      })(file)
    },
    async doSave () {
      let data = Object.assign({
        content: this.content,
        medias: this.medias,
        name: this.name,
        id: this.$route.params.id
      })
      if (data.name === null || data.name === '') {
        swall('Harap tidak mengosongkan kolom nama')
      } else if (data.content === null || data.content === '') {
        swall('Harap tidak mengosokan konten')
      } else {
        swall({
          title: 'Konfirmasi',
          text: 'Apakah anda yakin akan menyimpan data ini?',
          icon: 'warning',
          buttons: true,
          dangerMode: true
        })
          .then((willSave) => {
            if (willSave) {
              if (data.id) {
                pageService.edit(data).then(result => {
                  swall('Data berhasil disimpan!', {
                    icon: 'success',
                    title: 'Sukses',
                    text: result.statusCode.message
                  })
                  this.$router.push({ name: 'Pages' })
                })
              } else {
                pageService.add(data).then(result => {
                  swall('Data berhasil disimpan!', {
                    icon: 'success',
                    title: 'Sukses',
                    text: result.statusCode.message
                  })
                  this.$router.push({ name: 'Pages' })
                })
              }
            }
          })
      }
    }
  }
}
</script>

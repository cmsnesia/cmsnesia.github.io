<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card header="Size Modal">
            <div>
              <b-button style="width: 200px; margin-right: 5px" v-b-modal.modal-xl variant="info" size="sm">Extra Large modal</b-button>
              <b-button style="width: 200px; margin-right: 5px" v-b-modal.modal-lg variant="info" size="sm">Large modal</b-button>
              <b-button style="width: 200px; margin-right: 5px" v-b-modal.modal-md variant="info" size="sm">Medium modal</b-button>
              <b-button style="width: 200px; margin-right: 5px" v-b-modal.modal-sm variant="info" size="sm">Small modal</b-button>
              <b-modal id="modal-xl" size="xl" title="Extra Large Modal">Hello Extra Large Modal!</b-modal>
              <b-modal id="modal-lg" size="lg" title="Large Modal">Hello Large Modal!</b-modal>
              <b-modal id="modal-md" size="md" title="Large Modal">Hello Medium Modal!</b-modal>
              <b-modal id="modal-sm" size="sm" title="Small Modal">Hello Small Modal!</b-modal>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style scoped>

</style>

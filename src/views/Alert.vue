<template>
    <b-card header="Alert">
      <div class="chart-wrapper">
        <b-button class="m-2" size="xl" variant="info" href="https://sweetalert.js.org/guides/">>> Go to Sweetalert</b-button>
        <hr/>
        <b-button style="width: 200px; margin-right: 5px" @click='warningAlert' variant="warning" size="sm">Launching Alert Warning</b-button>
        <b-button style="width: 200px; margin-right: 5px" @click='errorAlert' variant="danger" size="sm">Launching Alert Error</b-button>
        <b-button style="width: 200px; margin-right: 5px" @click='infoAlert' variant="info" size="sm">Launching Alert Info</b-button>
        <b-button style="width: 200px" @click='successAlert' variant="success" size="sm">Launching Alert Success</b-button>
      </div>
    </b-card>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'Alert',
  methods: {
    warningAlert () {
      swal({
        title: 'Are you sure?',
        text: 'Are you sure that you want to leave this page?',
        icon: 'warning',
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal('Deleted!', 'Your imaginary file has been deleted!', 'success')
        }
      })
    },
    successAlert () {
      swal({
        title: 'Saved',
        text: 'Your imaginary file has been saved!',
        icon: 'success'
      })
    },
    errorAlert () {
      swal('Oops!', 'Something went wrong!', 'error')
    },
    infoAlert () {
      swal({
        title: 'Message',
        text: 'Your have a new massage',
        icon: 'info'
      })
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <b-card header="Size and variant button">
      <div class="chart-wrapper">
        <div class="mb-2">
          <h4>Small</h4>
          <b-button class="mr-1" size="sm" variant="primary" disabled>Disable</b-button>
          <b-button class="mr-1" size="sm" variant="primary">Primary</b-button>
          <b-button class="mr-1" size="sm" variant="info">Info</b-button>
          <b-button class="mr-1" size="sm" variant="danger">Danger</b-button>
          <b-button class="mr-1" size="sm" variant="light">Light</b-button>
          <b-button class="mr-1" size="sm" variant="secondary">Secondary</b-button>
          <b-button class="mr-1" size="sm" variant="warning">Warning</b-button>
          <b-button class="mr-1" size="sm" variant="dark">Dark</b-button>
          <b-button size="sm" variant="success">Success</b-button>
        </div>
        <div class="mb-2">
          <h4>Normal</h4>
          <b-button class="mr-1" variant="primary" disabled>Disable</b-button>
          <b-button class="mr-1" variant="primary">Primary</b-button>
          <b-button class="mr-1" variant="info">Info</b-button>
          <b-button class="mr-1" variant="danger">Danger</b-button>
          <b-button class="mr-1" variant="light">Light</b-button>
          <b-button class="mr-1" variant="secondary">Secondary</b-button>
          <b-button class="mr-1" variant="warning">Warning</b-button>
          <b-button class="mr-1" variant="dark">Dark</b-button>
          <b-button variant="success">Success</b-button>
        </div>
        <div class="mb-2">
          <h4>Large</h4>
          <b-button class="mr-1" size="lg" variant="primary" disabled>Disable</b-button>
          <b-button class="mr-1" size="lg" variant="primary">Primary</b-button>
          <b-button class="mr-1" size="lg" variant="info">Info</b-button>
          <b-button class="mr-1" size="lg" variant="danger">Danger</b-button>
          <b-button class="mr-1" size="lg" variant="light">Light</b-button>
          <b-button class="mr-1" size="lg" variant="secondary">Secondary</b-button>
          <b-button class="mr-1" size="lg" variant="warning">Warning</b-button>
          <b-button class="mr-1" size="lg" variant="dark">Dark</b-button>
          <b-button size="lg" variant="success">Success</b-button>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'

export default {
  name: 'Buttons',
  components: {
    BButton
  }
}
</script>

<style scoped>

</style>

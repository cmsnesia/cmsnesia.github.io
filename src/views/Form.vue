<template>
  <div class="row">
    <div class="col-6">
      <b-card title="Vertical">
        <ValidationObserver ref="form">
          <b-form @submit.prevent="submit">
            <ValidationProvider name="E-mail" rules="required" v-slot="validationContext">
              <b-form-group label="Email:">
                <b-form-input
                  :state="getValidationState(validationContext)"
                  v-model="form1.email"
                  placeholder="Enter email"/>
                <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider name="Nama" rules="required" v-slot="validationContext">
              <b-form-group label="Your Name:">
                <b-form-input
                  :state="getValidationState(validationContext)"
                  v-model="form1.name"
                  placeholder="Enter name"
                />
                <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <b-form-group label="Combo" label-for="input-3">
              <v-select-2
                v-model="form1.combo"
                :data="options"
                :placeholder="'Combo'"
                :searchable="false" class="mb-2"/>
            </b-form-group>
            <b-form-group label="Combo With Search" label-for="input-3">
              <v-select-2 :data="options" :placeholder="'Combo'" class="mb-2"/>
            </b-form-group>
            <b-form-group id="input-group-4">
              <b-form-checkbox-group id="checkboxes-4">
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-button type="submit" variant="info" class="pull-right">Save</b-button>
            <b-button type="reset" variant="light" class="pull-right mr-2">Cancel</b-button>
          </b-form>
        </ValidationObserver>
      </b-card>
    </div>
    <div class="col-6">
      <b-card title="Horizontal">
        <b-form>
          <b-form-group
            label-cols="3"
            label="Email:"
          >
            <b-form-input
              type="email"
              required
              placeholder="Enter email"
            />
          </b-form-group>
          <b-form-group
            label-cols="3"
            label="Your Name:">
            <b-form-input
              required
              placeholder="Enter name"
            />
          </b-form-group>

          <b-form-group label-cols="3" label="Combo">
            <v-select-2 :data="options" :placeholder="'Combo'" :searchable="false" class="mb-2"/>
          </b-form-group>

          <b-form-group label-cols="3" label="Combo With Search">
            <v-select-2 :data="options" :placeholder="'Combo'" class="mb-2"/>
          </b-form-group>

          <b-form-group>
            <b-form-checkbox-group id="checkboxes-4">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="info" class="pull-right">Save</b-button>
          <b-button type="reset" variant="light" class="pull-right mr-2">Cancel</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import VSelect2 from '../components/VSelect2'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '{_field_} harus diisi'
})

export default {
  name: 'Form',
  components: {
    VSelect2,
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      fullPage: true,
      form1: {
        email: '',
        name: '',
        combo: ''
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      options: [
        'foo',
        'bar',
        'baz'
      ],
      show: true
    }
  },
  created: function () {

  },
  methods: {
    getValidationState: function ({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    submit: function (evt) {
      this.$refs.form.validate().then(success => {
        if (!success) {
        }
      })
    }
  }
}
</script>

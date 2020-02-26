<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card header="Radios using options and slots">
            <b-form-group label="Radios using options and slots">
              <b-form-radio-group
                id="radio-slots"
                v-model="selected2"
                :options="options2"
                name="radio-options-slots"
              >
                <!-- Radios in this slot will appear first -->
                <template v-slot:first>
                  <b-form-radio value="first">Toggle this custom radio from slot first</b-form-radio>
                </template>

                <!-- Radios in the default slot will appear after any option generated radios -->
                <b-form-radio :value="{ fourth: 4 }">This is the 4th radio</b-form-radio>
                <b-form-radio value="fifth">This is the 5th radio</b-form-radio>
              </b-form-radio-group>
            </b-form-group>

            <div class="mt-3">Selected: <strong>{{ selected2 }}</strong></div>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <b-card header="Individual radios">
            <b-form-group>
              <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>
              <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>
            </b-form-group>
            <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
          </b-card>
        </b-col>
        <b-col cols="6">
          <b-card header="Radios using options">
              <b-form-group>
                <b-form-radio-group
                  id="radio-group-1"
                  v-model="selected1"
                  :options="options"
                  name="radio-options"
                ></b-form-radio-group>
              </b-form-group>

              <b-form-group label="Radios using sub-components">
                <b-form-radio-group id="radio-group-2" v-model="selected1" name="radio-sub-component">
                  <b-form-radio value="first">Toggle this custom radio</b-form-radio>
                  <b-form-radio value="second">Or toggle this other custom radio</b-form-radio>
                  <b-form-radio value="third" disabled>This one is Disabled</b-form-radio>
                  <b-form-radio :value="{ fourth: 4 }">This is the 4th radio</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <div class="mt-3">Selected: <strong>{{ selected1 }}</strong></div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',
  data () {
    return {
      selected: '',
      selected1: 'first',
      options: [
        { text: 'Toggle this custom radio', value: 'first' },
        { text: 'Or toggle this other custom radio', value: 'second' },
        { text: 'This one is Disabled', value: 'third', disabled: true },
        { text: 'This is the 4th radio', value: { fourth: 4 } }
      ],
      selected2: '',
      options2: [
        { text: 'Or toggle this other custom radio', value: 'second' },
        { text: 'Third radio', value: 'third' }
      ]
    }
  }
}
</script>

<style scoped>

</style>

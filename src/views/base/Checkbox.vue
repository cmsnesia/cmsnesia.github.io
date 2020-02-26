<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card header="Checkbox">
            <div>
              <b-form-group label="Using options array:">
                <b-form-checkbox-group
                  id="checkbox-group-1"
                  v-model="selected"
                  :options="options"
                  name="flavour-1"
                ></b-form-checkbox-group>
              </b-form-group>

              <b-form-group label="Using sub-components:">
                <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
                  <b-form-checkbox value="orange">Orange</b-form-checkbox>
                  <b-form-checkbox value="apple">Apple</b-form-checkbox>
                  <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
                  <b-form-checkbox value="grape">Grape</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <div>Selected: <strong>{{ selected }}</strong></div>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-card header="Checkbox">
            <div>
              <b-form-checkbox-group
                v-model="selected2"
                :options="options2"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-checkbox-group>
              <div class="mt-3">Selected: <strong>{{ selected2 }}</strong></div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data () {
    return {
      selected: [], // Must be an array reference!
      selected2: [], // Must be an array reference!
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' }
      ],
      options2: [
        { item: 'A', name: 'Option A' },
        { item: 'B', name: 'Option B' },
        { item: 'D', name: 'Option C', notEnabled: true },
        { item: { d: 1 }, name: 'Option D' }
      ]
    }
  }
}
</script>

<style scoped>

</style>

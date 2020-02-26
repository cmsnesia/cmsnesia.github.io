<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12" >
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Bootstrap button group</strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/button-group" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </div>
            <div>
              <b-button-group>
                <b-button>One</b-button>
                <b-button>Two</b-button>
                <b-button>Three</b-button>
                <b-button>Four</b-button>
                <b-button class="d-sm-down-none">Five</b-button>
              </b-button-group>
              <br><br>
              <b-button-group>
                <b-button class="d-sm-down-none" variant="success">Success</b-button>
                <b-button variant="info">Info</b-button>
                <b-button variant="warning">Warn</b-button>
                <b-button class="d-sm-down-none" variant="primary">Primary</b-button>
                <b-button variant="danger">Danger</b-button>
                <b-button variant="link">Link</b-button>
              </b-button-group>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Button group </strong>sizing
            </div>
            <div>
              <b-button-group>
                <b-button>Left</b-button>
                <b-button>Middle</b-button>
                <b-button>Right</b-button>
              </b-button-group>
              <br><br>
              <b-button-group size="sm">
                <b-button>Left</b-button>
                <b-button>Middle</b-button>
                <b-button>Right</b-button>
              </b-button-group>
              <br><br>
              <b-button-group size="lg">
                <b-button>Left</b-button>
                <b-button>Middle</b-button>
                <b-button>Right</b-button>
              </b-button-group>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Button group </strong>dropdown support
            </div>
            <div>
              <b-button-group>
                <b-button class="d-sm-down-none">Button 1</b-button>
                <b-button class="d-sm-down-none">Button 2</b-button>
                <b-dropdown right text="Menu" variant="success">
                  <b-dropdown-item>Item 1</b-dropdown-item>
                  <b-dropdown-item>Item 2</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-button class="d-sm-down-none">Button 3</b-button>
                <b-dropdown right split text="Split Menu" variant="info">
                  <b-dropdown-item>Item 1</b-dropdown-item>
                  <b-dropdown-item>Item 2</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
              </b-button-group>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Button group </strong>vertical variation
            </div>
            <div>
              <b-button-group vertical>
                <b-button>Top</b-button>
                <b-button>Middle</b-button>
                <b-button>Bottom</b-button>
              </b-button-group>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button-groups'
}
</script>

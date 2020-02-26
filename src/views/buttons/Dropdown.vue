<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Bootstrap Dropdown</strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/dropdown" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </div>
            <div>
              <b-dropdown id="ddown1" text="Dropdown Button" class="m-2">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>
            <div>
              <b-dropdown id="ddown-buttons" text="Dropdown using buttons as menu items" class="m-2">
                <b-dropdown-item-button>I'm a button</b-dropdown-item-button>
                <b-dropdown-item-button>I'm also a button</b-dropdown-item-button>
                <b-dropdown-item-button disabled>I'm a button, but disabled!</b-dropdown-item-button>
                <b-dropdown-item-button>I don't look like a button, but I am!</b-dropdown-item-button>
              </b-dropdown>
            </div>
            <div>
              <b-dropdown id="ddown-divider" text="Dropdown with divider" class="m-2">
                <b-dropdown-item-button>First item</b-dropdown-item-button>
                <b-dropdown-item-button>Second item</b-dropdown-item-button>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>Separated Item</b-dropdown-item-button>
              </b-dropdown>
            </div>
            <div>
              <b-dropdown id="ddown-header" text="Dropdown with header" class="m-2">
                <b-dropdown-header>Dropdown header</b-dropdown-header>
                <b-dropdown-item-button>First item</b-dropdown-item-button>
                <b-dropdown-item-button>Second Item</b-dropdown-item-button>
              </b-dropdown>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Dropdown </strong><small>positioning</small>
            </div>
            <div>
              <b-dropdown id="ddown-left" text="Left align" variant="primary" class="m-2">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown-right" right text="Right align" variant="primary" class="m-2">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <div>
              <b-dropdown id="ddown-dropup" dropup text="Drop-Up" variant="info" class="m-2">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <div>
              <b-dropdown id="ddown-offset" offset="25" text="Offset Dropdown" class="m-2">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <div>
              <b-dropdown id="ddown-split" split text="Split Dropdown" class="m-2">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here...</b-dropdown-item>
              </b-dropdown>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Dropdown </strong><small>sizing</small>
            </div>
            <div>
              <b-dropdown id="ddown-lg" size="lg" text="Large" class="m-2">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown id="ddown-lg-split" size="lg" split text="Large Split" class="m-2">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
              </b-dropdown>
              <br>
              <b-dropdown id="ddown-sm" size="sm" text="Small" class="m-2">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown id="ddown-sm-split" size="sm" split text="Small Split" class="m-2">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
              </b-dropdown>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown'
}
</script>

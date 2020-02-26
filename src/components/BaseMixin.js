export const BaseMixin = {
  data () {
    return {
      paging: {
        page: 0,
        size: 10
      },
      pagingNol: {
        page: 0,
        size: 10
      },
      paramFilter: {
        isComplete: false
      }
    }
  },
  methods: {
    generateFilter: function (filter, suffix = ';', uri = '') {
      Object.keys(filter).forEach((item, index) => {
        if (filter[item] !== undefined && filter[item] !== null && filter[item] !== '') {
          uri += item + filter[item] + suffix
        }
      })
      return uri.slice(0, -1)
    },
    resetFilter () {
      location.reload()
    }
  }
}

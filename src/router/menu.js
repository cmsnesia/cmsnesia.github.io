export default {
  items: [
    {
      title: true,
      name: 'Navigation',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Posts',
      url: '/posts',
      icon: 'fa fa-bars',
      children: [
        {
          name: 'Published',
          url: '/posts/published',
          icon: 'fa fa-bars'
        },
        {
          name: 'Drafts',
          url: '/posts/drafts',
          icon: 'fa fa-bars'
        }
      ]
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'fa fa-bars'
    },
    {
      name: 'Categories',
      url: '/categories',
      icon: 'fa fa-bars'
    },
    {
      name: 'Menus',
      url: '/menus',
      icon: 'fa fa-bars'
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: 'fa fa-bars',
      children: [
        {
          name: 'Profile',
          url: '/settings/profile',
          icon: 'fa fa-bars'
        }
      ]
    },
    {
      divider: true
    }
  ]
}

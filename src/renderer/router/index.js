import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '/',
      name: 'home',
      component:require('@/components/Home.vue').default,
      children:[{
        path:'/',
        component: require('@/components/Photo.vue').default,
      }]

    },
    {
      path: '/:name',
      name: 'skin',
      component: require('@/components/Details.vue').default
    },
    {
      path: '/post',
      name: 'post',
      component: require('@/components/Post.vue').default
    },
    {
      path: '/details',
      name: 'details',
      component: require('@/components/Details.vue').default
    },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})

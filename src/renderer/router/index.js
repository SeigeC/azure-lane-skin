import Vue from 'vue'
import Router from 'vue-router'
import ScrollPosition from '../server/scross'
Vue.use(Router)

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home.vue').default,
      children: [
        {
          path: '/list',
          component: require('@/components/Photo.vue').default,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/',
          redirect: '/list'
        }
      ]
    },
    {
      path: '/:name',
      name: 'skin',
      component: require('@/components/Details.vue').default
    },
    {
      path: '/',
      name: 'post',
      redirect: '/list'
    },
    {
      path: '/details',
      name: 'details',
      component: require('@/components/Details.vue').default
    }
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
router.beforeEach((to, from, next) => {
  // 保存滚动条位置
  ScrollPosition.save(from.path)

  next()
})
export default router

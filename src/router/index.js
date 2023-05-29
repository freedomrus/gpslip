import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/jobopening',
    name: 'JobOpeningView',
    component: () => import('../views/JobOpeningView.vue')
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/partner',
    name: 'PartnerView',
    component: () => import('../views/PartnerView.vue')
  },
  {
    path: '/equipment',
    name: 'EquipmentView',
    component: () => import('../views/EquipmentView.vue')
  },

  {
    path: '/glonassequipment',
    name: 'GlonassEqView',
    component: () => import('../views/Equipment/GlonassEqView.vue')
  },
  {
    path: '/ztmequipment',
    name: 'ZtmEqView',
    component: () => import('../views/Equipment/ZtmEqView.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/client',
    name: 'client',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClientProfile.vue')
  },
  {
    path: '/meal-plans',
    name: 'mealplans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MealPlans.vue')
  },
  {
    path: '/create-meal-plan',
    name: 'createmealplan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateMealPlan.vue')
  },
  {
    path: '/account',
    name: 'account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AccountView.vue')
  },
  {
    path: '/assessment',
    name: 'assessment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HealthAssessment.vue')
  },
  {
    path: '/sign-in',
    name: 'signin',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  },
  {
    path: '/create-account',
    name: 'create-account',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateAccount.vue')
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: () => import(/* webpackChunkName: "about" */ '../views/IntroductionView.vue')
  },
  {
    path: '/client-home',
    name: 'client-home',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClientHomeView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

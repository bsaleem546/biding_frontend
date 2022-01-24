import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueRouter from 'vue-router'

import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Profile from './components/Profile'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  { path: '/terms-and-conditions', component: Terms },
  { path: '/privacy-policy', component: Privacy },
  { path: '/sign-in', component: Signin },
  { path: '/sign-up', component: Signup },
  { path: '/my-profile', component: Profile },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

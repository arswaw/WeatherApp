// You could load these from local files if you wanted to.
import Vue from 'https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.js'
import VueRouter from 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.1.3/vue-router.esm.browser.min.js'

import {
    Navbar
} from './components/navbar.js'

import {
    MainTemplate
} from './templates/main-template.js'

// Note that this should only be done while you are not exposed to the public Internet.
// If you are, then you may need a server so you can keep this variable hidden.
export const WEATHER_API_KEY = 'YOUR_KEY_HERE'

import Current from './components/current.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
  {
    path: '/',
    component: Current, // Could also be dynamic in case user clicks here from another page.
    name: "Current Weather Page"
  },    
  {
    path: '/fiveday',
    // Here we import a dynamic component.
    // This will be fetched from the server
    // if the user clicks on that page, saving
    // bandwidth and memory.
    component: () => import('./components/fiveday.js'),
    name: "Five Day Page"
  }]
})

new Vue({
    el: '#app',
    components: {
        'navbar': Navbar
    },
    router,
    template: MainTemplate
})

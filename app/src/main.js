import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import Firebase from './plugins/firebase'
import routes from './routes'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(VueRouter)
Vue.use(Firebase)

Vue.config.debug = true

const router = new VueRouter()

router
  .map(routes)
  .beforeEach(() => {
    window.scrollTo(0, 0)
  })
  .afterEach(function (transition) {
    if (document.getElementById('drawer').classList.contains('is-visible')) {
      document.querySelector('.mdl-layout').MaterialLayout.drawerToggleHandler_()
    }
  })
  .redirect({
    '*': '/'
  })
  .start(App, 'app')

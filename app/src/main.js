/*globals componentHandler*/

import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import VueRouter from 'vue-router'
import Snackbar from 'vue-mdl-snackbar'

import FirebaseConfig from './plugins/firebase'
import routes from './routes'
import App from './App'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(VueRouter)
Vue.use(FirebaseConfig)
Vue.use(Snackbar, '#snackbar')

Vue.config.debug = true

const router = new VueRouter()

router
  .map(routes)
  .beforeEach(() => {
    window.scrollTo(0, 0)
  })
  .afterEach(transition => {
    // tell me where I am
    console.debug('Successfully navigated to: ' + transition.to.path)

    // reinitialize mdl js components. @componentHandler is global
    componentHandler.upgradeAllRegistered()

    // close drawer on transition
    if (document.getElementById('drawer').classList.contains('is-visible')) {
      document.querySelector('.mdl-layout').MaterialLayout.drawerToggleHandler_()
    }
  })
  .redirect({
    '*': '/login'
  })
  .start(App, 'app')

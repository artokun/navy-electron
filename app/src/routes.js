import LandingPage from './components/LandingPage'
import Auth from './components/Auth'
import Registration from './components/Registration'
import Fiz from './components/Fiz'
import Baz from './components/Baz'

export default {
  '/': {
    component: LandingPage,
    name: 'landing-page'
  },
  '/auth': {
    component: Auth,
    name: 'auth'
  },
  '/registration/': {
    component: Registration,
    name: 'registration'
  },
  '/fiz': {
    component: Fiz,
    name: 'fiz'
  },
  '/baz': {
    component: Baz,
    name: 'baz'
  }
}

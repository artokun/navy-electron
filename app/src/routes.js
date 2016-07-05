import LandingPage from './components/LandingPage'
import Auth from './components/Auth'
import Bar from './components/Bar'
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
  '/bar/:userId': {
    component: Bar,
    name: 'bar'
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

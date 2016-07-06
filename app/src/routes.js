import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Registration from './components/Registration'
import Fiz from './components/Fiz'
import Baz from './components/Baz'

export default {
  '/': {
    component: LandingPage,
    name: 'landing-page',
    auth: true
  },
  '/login': {
    component: Login,
    name: 'login',
    auth: false
  },
  '/registration': {
    component: Registration,
    name: 'registration',
    auth: false
  },
  '/fiz': {
    component: Fiz,
    name: 'fiz',
    auth: false
  },
  '/baz': {
    component: Baz,
    name: 'baz',
    auth: true
  }
}

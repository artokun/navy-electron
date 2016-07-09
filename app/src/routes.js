import Locations from './components/pages/Locations'
import Login from './components/pages/Login'
import Registration from './components/pages/Registration'
import Test from './components/pages/Test'

export default {
  '/': {
    component: Locations,
    name: 'locations',
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
  '/test': {
    component: Test,
    name: 'test',
    auth: false
  }
}

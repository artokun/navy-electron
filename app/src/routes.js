import Locations from './components/pages/Locations'
import Login from './components/pages/Login'
import Registration from './components/pages/Registration'
import Test from './components/pages/Test'
import Users from './components/pages/Users'

export default {
  '/': {
    component: Locations,
    name: 'Locations',
    auth: true
  },
  '/login': {
    component: Login,
    name: 'Login',
    auth: false
  },
  '/registration': {
    component: Registration,
    name: 'registration',
    auth: false
  },
  '/test/:locationId': {
    component: Test,
    name: 'Test',
    auth: false
  },
  '/users': {
    component: Users,
    name: 'users',
    auth: false
  }
}

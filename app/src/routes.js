import LandingPage from './components/LandingPage'
import Foo from './components/Foo'
import Bar from './components/Bar'
import Fiz from './components/Fiz'
import Baz from './components/Baz'

export default {
  '/': {
    component: LandingPage,
    name: 'landing-page'
  },
  '/foo': {
    component: Foo,
    name: 'foo'
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

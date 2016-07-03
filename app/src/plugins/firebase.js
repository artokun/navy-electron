import firebase from 'firebase/app'
import {} from 'firebase/auth'
import {} from 'firebase/database'

const provider = new firebase.auth.GoogleAuthProvider()

// Install access to firebase services as global properties
export default function install (Vue) {
  // Initialize the Firebase Application
  firebase.initializeApp({
    apiKey: 'AIzaSyDtJsucR1agKmbNxCvV3_yrT9-zlWWGpeo',
    authDomain: 'navy-app.firebaseapp.com',
    databaseURL: 'https://navy-app.firebaseio.com',
    storageBucket: 'navy-app.appspot.com'
  })

  // Extend Vue with Firebase
  Object.defineProperties(Vue.prototype, {
    $firebase: {
      get () {
        return firebase
      }
    },
    $database: {
      get () {
        return firebase.database()
      }
    },
    $auth: {
      get () {
        return Object.assign(firebase.auth(), {
          signIn () {
            return firebase.auth().signInWithRedirect(provider)
          }
        })
      }
    }
  })
}

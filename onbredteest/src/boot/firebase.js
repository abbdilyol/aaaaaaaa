import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseService from '../services/firebase'

let db
let increment
let decrement
export default ({ Vue, store }) => {
  Vue.use(firestorePlugin)

  const firebaseConfig = {
    apiKey: 'AIzaSyBjd46F1rXJEoQ-fSX8xgSKhwSLipdC6r4',
    authDomain: 'ontimebread-2baeb.firebaseapp.com',
    databaseURL: 'https://ontimebread-2baeb.firebaseio.com',
    projectId: 'ontimebread-2baeb',
    storageBucket: 'ontimebread-2baeb.appspot.com',
    messagingSenderId: '824326542255',
    appId: '1:824326542255:web:c120ac0b6465a86dc4d55a',
    measurementId: 'G-6WQV51E4B4'
  }

  firebase.initializeApp(firebaseConfig)

  // Tell the application what to do when the
  // authentication state has changed
  firebaseService.auth().onAuthStateChanged((user) => {
    firebaseService.handleOnAuthStateChanged(store, user)
  }, (error) => {
    console.error(error)
  })

  Vue.prototype.$fb = firebaseService
  store.$fb = firebaseService

  db = firebase.firestore()
  increment = firebase.firestore.FieldValue.increment(1)
  decrement = firebase.firestore.FieldValue.increment(-1)
}

export { db, increment, decrement }

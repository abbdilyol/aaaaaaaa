// Remember, we have access to our Vue instance not using
// an arrow function in our actions file. This allows us
// to create a scoped reference to our firebaseService - $fb
// That was assigned to the Vue instance earlier in our serviceConnection
// boot file.

import { firestoreAction } from 'vuexfire'
import User from '../../models/User.js'

export const addUserToUsersCollection = async (state, userRef) => {
  const { email, firstName, lastName, id } = state,
    user = new User({ email, firstName, lastName, id })

  return userRef.set(user)
}

export const createNewUser = async function ({ dispatch, commit }, data) {
  const $fb = this.$fb
  const { email, password, firstName, lastName } = data
  const fbAuthResponse = await $fb.createUserWithEmail(email, password)
  const id = fbAuthResponse.user.uid
  const userRef = $fb.userRef('users', id)
  return addUserToUsersCollection({ email, firstName, lastName, id }, userRef)
}

export const loginUser = async function ({ commit }, payload) {
  const $fb = this.$fb
  const { email, password } = payload
  return $fb.loginWithEmail(email, password)
}

export const logoutUser = async function ({ commit }, payload) {
  await firestoreAction(({ unbindFirestoreRef }) => { unbindFirestoreRef('currentUser') })
  this.$fb.logoutUser()
}

export function routeUserToAuth () {
  // eslint-disable-next-line handle-callback-err
  this.$router.push({ path: '/' }).catch(err => { })
}

export const sendEmailVerification = async function () {
  this.$fb.sendEmailVerification()
}

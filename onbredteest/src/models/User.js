/** Class representing a User. */
export default class User {
  /**
   * Create a user.
   * @param {String} id - Place holder for a unique Firebase id.
   * @param {String} backgroundPhoto - A generated URL from Google Storage.
   * @param {String} email - A valid email.
   * @param {String} firstName - The user's firstname name.
   * @param {String} lastName - The user's lastname name.
   * @param {String} mobile - the user's mobile number.
   * @param {String} profilePhoto - A generated URL from Google Storage.
  */
  id = ''
  backgroundPhoto = ''
  email = ''
  firstName = ''
  lastName = ''
  mobile = ''
  profilePhoto = ''

  /**
   * @param  {Object} args - User args
   */
  // eslint-disable-next-line space-before-function-paren
  constructor(args) {
    Object.keys(args).forEach((v, i) => {
      this[v] = args[v]
    })

    return {
      ...this
    }
  }
}

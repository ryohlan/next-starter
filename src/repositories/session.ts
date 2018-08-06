import { auth } from './firebase'
import { session } from 'src/storage'
const actionCodeSettings = {
  url: 'https://next-starter.firebaseapp.com',
  handleCodeInApp: true
}

export const sendSignInLinkToEmail = (email: string): Promise<any> =>
  auth
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(a => {
      session.set(email)
      console.log(session.get())
    })
    .catch(e => console.log(e))

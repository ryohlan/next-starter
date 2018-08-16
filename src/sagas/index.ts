import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as SignupActions from 'src/reducers/signup/actions'
import { auth } from 'src/repositories/firebase'
import { Store } from 'src/reducers'

async function firebaseSignup(email: string, password: string) {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    if (user) {
      const idToken = await user.getIdToken()
      fetch('https://us-central1-next-starter.cloudfunctions.net/api/sessionLogin', {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idToken })
      })
    }
  } catch (e) {
    throw e
  }
}

function* signup(action) {
  if (!SignupActions.signup.started.match(action)) return
  try {
    const hoge: Store = yield select()
    const response = yield call(firebaseSignup, hoge.Signup.email, hoge.Signup.password)
    alert(JSON.stringify(response))
    yield put(SignupActions.signup.done({ params: action.payload, result: {} }))
  } catch (e) {
    yield put(
      SignupActions.signup.failed({ params: action.payload, error: { message: 'Signup error. Please try again.' } })
    )
  }
}

function* sagas() {
  yield takeEvery(SignupActions.signup.started.type, signup)
}

export default sagas

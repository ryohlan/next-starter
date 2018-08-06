import { call, put, takeEvery } from 'redux-saga/effects'
import * as SignupActions from 'src/reducers/signup/actions'
import { Firebase, auth } from 'src/repositories/firebase'

function* signup(action) {
  if (!SignupActions.signup.started.match(action)) return
  try {
    auth.createUserWithEmailAndPassword = auth.createUserWithEmailAndPassword.bind(auth)
    const response = yield call(auth.createUserWithEmailAndPassword, action.payload.email, action.payload.password)
    yield put(SignupActions.signup.done({ params: action.payload, result: {} }))
    const idToken = response.getIdToken()
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

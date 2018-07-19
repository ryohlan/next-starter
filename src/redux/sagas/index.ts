import { call, put, takeEvery } from 'redux-saga/effects'
import * as UserRepository from '../../repositories/user'

function* fetchUser(action) {
  try {
    const user = yield call(UserRepository.get, action.payload.userId)
    yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser)
}

export default mySaga

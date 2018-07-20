import { call, put, takeEvery } from 'redux-saga/effects'
import * as UserRepository from 'src/repositories/user'
import * as UserActions from 'src/reducers/user/actions'

function* fetchUser(action) {
  if (!UserActions.fetchUser.started.match(action)) return

  try {
    const { user } = yield call(UserRepository.get, action.payload.userId)
    yield put(UserActions.fetchUser.done({ params: action.payload, result: { user } }))
  } catch (e) {
    yield put(UserActions.fetchUser.failed({ params: action.payload, error: { message: 'fetchError' } }))
  }
}

function* sagas() {
  yield takeEvery(UserActions.fetchUser.started.type, fetchUser)
}

export default sagas

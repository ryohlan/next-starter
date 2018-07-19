import { call, put, takeEvery } from 'redux-saga/effects'
import * as UserRepository from 'src/repositories/user'
import * as UserActions from 'src/reducers/user/actions'

function* fetchUser(action) {
  try {
    const user = yield call(UserRepository.get, action.payload.userId)
    yield put(UserActions.fetchUser.done({ result: { user: { name: user.name } }, params: {} }))
  } catch (e) {
    yield put(UserActions.fetchUser.failed({ params: {}, error: { message: 'fetchError' } }))
  }
}

function* sagas() {
  yield takeEvery(UserActions.fetchUser.started.type, fetchUser)
}

export default sagas

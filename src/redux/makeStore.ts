import { combineReducers, createStore, applyMiddleware } from 'redux'
import { reducers } from '../reducers'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

export const makeStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  return store
}

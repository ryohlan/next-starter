import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { reducers } from '../reducers'
import createSagaMiddleware from 'redux-saga'

export const makeStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : compose

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
  const store = createStore(combineReducers(reducers), initialState, enhancer)
  return store
}

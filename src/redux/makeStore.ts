import { combineReducers, createStore, applyMiddleware } from 'redux'
import { reducers } from 'src/reducers'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import sagas from 'src/sagas'

export const makeStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(sagas)
  return store
}

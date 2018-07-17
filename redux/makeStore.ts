import { combineReducers, createStore } from 'redux'
import { reducers } from '../reducers'

export const makeStore = initialState => {
  return createStore(
    combineReducers(reducers),
    initialState,
    (true &&
      (global as any).window &&
      (global as any).window.__REDUX_DEVTOOLS_EXTENSION__ &&
      (global as any).window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      undefined
  )
}

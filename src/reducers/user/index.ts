import { isType } from 'typescript-fsa'
import { Action } from 'redux'
import * as Actions from './actions'

export interface State {
  name: string
}

export const initial: State = {
  name: ''
}

export const reducer = (state: State = initial, action: Action): State => {
  if (isType(action, Actions.setName)) {
    return {
      ...state,
      name: action.payload.name
    }
  }

  return state
}

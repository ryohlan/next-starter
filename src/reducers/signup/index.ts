import { isType } from 'typescript-fsa'
import { Action } from 'redux'
import * as Actions from './actions'

export interface State {
  email: string
  password: string
  posting: boolean
  postErrorMessage?: string
}

export const initial: State = {
  email: '',
  password: '',
  posting: false
}

export const reducer = (state: State = initial, action: Action): State => {
  if (isType(action, Actions.setEmail)) {
    return {
      ...state,
      email: action.payload
    }
  }

  if (isType(action, Actions.setPassword)) {
    return {
      ...state,
      password: action.payload
    }
  }

  if (isType(action, Actions.signup.started)) {
    return {
      ...state,
      posting: true,
      postErrorMessage: undefined
    }
  }

  if (isType(action, Actions.signup.done)) {
    return {
      ...state,
      posting: false
    }
  }

  if (isType(action, Actions.signup.failed)) {
    return {
      ...state,
      posting: false,
      postErrorMessage: action.payload.error.message
    }
  }

  return state
}

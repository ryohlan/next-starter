import { isType } from 'typescript-fsa'
import { Action } from 'redux'
import * as Actions from 'src/reducers/user/actions'

export interface State {
  name: string
  isFetchingUser: boolean
  fetchUserErrorMessage?: string
}

export const initial: State = {
  name: '',
  isFetchingUser: false
}

export const reducer = (state: State = initial, action: Action): State => {
  if (isType(action, Actions.setName)) {
    return {
      ...state,
      name: action.payload.name
    }
  }

  if (isType(action, Actions.fetchUser.started)) {
    return {
      ...state,
      isFetchingUser: true
    }
  }

  if (isType(action, Actions.fetchUser.done)) {
    console.log(action)
    return {
      ...state,
      isFetchingUser: false,
      name: action.payload.result.user.name
    }
  }

  if (isType(action, Actions.fetchUser.failed)) {
    return {
      ...state,
      isFetchingUser: false,
      fetchUserErrorMessage: action.payload.error.message
    }
  }

  return state
}

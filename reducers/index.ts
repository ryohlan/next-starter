import { reducer as UserReducer, State as UserState } from './user'

export interface ReduxState {
  User: UserState
}

export const reducers = {
  User: UserReducer
}

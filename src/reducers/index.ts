import { reducer as UserReducer, State as UserState } from 'src/reducers/user'

export interface Store {
  User: UserState
}

export const reducers = {
  User: UserReducer
}

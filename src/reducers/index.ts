import { reducer as User, State as UserState } from 'src/reducers/user'
import { reducer as Signup, State as SignupState } from './signup'

export interface Store {
  User: UserState
  Signup: SignupState
}

export const reducers = {
  User,
  Signup
}

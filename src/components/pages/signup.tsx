import { connect } from 'react-redux'
import { Template, Props } from 'src/components/templates/signup'
import { Store } from 'src/reducers'
import { setEmail, setPassword, signup } from 'src/reducers/signup/actions'

export const Page = connect<
  { email: string; password: string; posting: boolean },
  { dispatch: Function },
  { name: string },
  Props,
  Store
>(
  ({ Signup: { email, password, posting } }) => ({
    email,
    password,
    posting
  }),
  dispatch => ({ dispatch }),
  ({ email, password, posting }, { dispatch }, {}) => ({
    email,
    password,
    posting,
    onChangeEmail: ({ target: { value } }) => dispatch(setEmail(value)),
    onChangePassword: ({ target: { value } }) => dispatch(setPassword(value)),
    onClickSend: e => {
      e.preventDefault()
      dispatch(signup.started({ email, password }))
    }
  })
)(Template)

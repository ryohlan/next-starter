import { NextInitialProps } from '../../typings'
import { auth } from 'src/repositories/firebase'

export const validateLoginFromEmailLink = ({ req }: NextInitialProps) => {
  if (req && auth.isSignInWithEmailLink(req.headers.host || '')) {
  }
  return {}
}

import * as UserRepository from 'src/repositories/user'
import { NextInitialProps } from '../../typings'

export const fetchUser = async (props: NextInitialProps): Promise<{}> => {
  const result = await UserRepository.get()
  return {}
}

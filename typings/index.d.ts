import { NextContext } from 'next'
import { Store } from '../src/reducers'
export interface NextInitialProps extends NextContext {
  store: {
    dispatch: (action: any) => void
    subscribe: () => void
    getState: () => Store
  }
}

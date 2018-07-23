import React from 'react'
import { makeStore } from 'src/redux/makeStore'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState: any = {}) {
  if (isServer) {
    return makeStore(initialState)
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = makeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export const initializer = App => {
  return class Redux extends React.Component {
    reduxStore: any

    static async getInitialProps(context) {
      const reduxStore = getOrCreateStore()
      context.ctx.reduxStore = reduxStore

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(context)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor(props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}

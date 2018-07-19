import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { initializer } from 'src/redux/initializer'

class MyApp extends App<any> {
  static async getInitialProps(props) {
    let pageProps = {}
    if (props.Component.getInitialProps) {
      pageProps = await props.Component.getInitialProps(props.ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, reduxStore, pageProps, ...props } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} {...props} store={reduxStore} />
        </Provider>
      </Container>
    )
  }
}
export default initializer(MyApp)

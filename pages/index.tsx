import React from 'react'
import { Page } from 'src/components/pages/top'
import { initialPropsComposer } from 'src/libs/initialPropsComposer'

export default class Root extends React.Component {
  static getInitialProps = initialPropsComposer([])

  render() {
    return <Page />
  }
}

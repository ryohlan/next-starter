import React from 'react'
import { initialPropsComposer } from 'src/libs/initialPropsComposer'
import { Page } from 'src/components/pages/my'

export default class extends React.Component {
  static getInitialProps = initialPropsComposer([])

  render() {
    return <Page />
  }
}

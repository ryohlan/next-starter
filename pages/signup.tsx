import React from 'react'
import { Page } from 'src/components/pages/signup'
import { initialPropsComposer } from 'src/libs/initialPropsComposer'
import { validateLoginFromEmailLink } from 'src/initialProps/validateLoginFromEmailLink'

export default class extends React.Component {
  static getInitialProps = initialPropsComposer([validateLoginFromEmailLink])

  render() {
    return <Page name="Name" />
  }
}

import React from 'react'
import { PageTitle } from 'src/components/atom/PageTitle'

export class Page extends React.Component {
  static getInitialProps(a) {
    console.log(a)
  }

  render() {
    return <PageTitle>Second</PageTitle>
  }
}

import React from 'react'
import { PageTitle } from 'src/components/atom/PageTitle'
import Link from 'next/link'

export class Page extends React.Component {
  static getInitialProps(a) {
    console.log(a)
  }

  render() {
    return (
      <>
        <PageTitle>HelloWorld</PageTitle>
        <Link href="/second">
          <a>Second</a>
        </Link>
      </>
    )
  }
}

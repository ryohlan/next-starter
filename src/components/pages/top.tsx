import React from 'react'
import { PageTitle } from 'src/components/atom/PageTitle'
import { Link, Router } from 'src/routing'

export class Page extends React.Component {
  static getInitialProps(a) {
    console.log(a)
  }

  render() {
    return (
      <>
        <PageTitle>HelloWorld</PageTitle>
        <Link route="second">
          <a>Second</a>
        </Link>
        <br />
        <Link route="user" params={{ id: 1 }}>
          <a>User1</a>
        </Link>
        <br />
        <button onClick={() => Router.pushRoute('user', { id: 2 })}>User2</button>
      </>
    )
  }
}

import React from 'react'
import { PageTitle } from 'src/components/atom/PageTitle'
import { Link } from 'src/routing'
import * as UserActions from 'src/reducers/user/actions'

export class Page extends React.Component<any> {
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
        <button onClick={() => this.props.store.dispatch(UserActions.fetchUser.started({ userId: '12' }))}>
          fetchUser
        </button>
      </>
    )
  }
}

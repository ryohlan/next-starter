import React from 'react'
import { PageTitle } from 'src/components/atom/PageTitle'

interface Props {
  userId: string
}

export class Page extends React.Component<Props> {
  static async getInitialProps(props): Promise<Props> {
    const { id } = props.query

    return { userId: id }
  }

  render() {
    return <PageTitle>User{this.props.userId}'s page</PageTitle>
  }
}

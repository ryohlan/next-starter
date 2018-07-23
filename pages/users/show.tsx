import React from 'react'
import { Page } from 'src/components/pages/users/show'

interface Props {
  userId: string
}

export default class extends React.Component<Props> {
  static async getInitialProps(props): Promise<Props> {
    const { id } = props.query

    return { userId: id }
  }

  render() {
    return <Page {...this.props} />
  }
}

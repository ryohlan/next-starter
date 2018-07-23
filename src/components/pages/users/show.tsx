import React from 'react'
import { PageTitle } from 'src/components/atom/PageTitle'

interface Props {
  userId: string
}

export const Page = ({ userId }: Props) => <PageTitle>User{userId}'s page</PageTitle>

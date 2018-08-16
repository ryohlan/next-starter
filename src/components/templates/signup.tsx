import React from 'react'
import Styled from 'styled-components'
import { PageTitle } from 'src/components/atom/PageTitle'
import { InputForm } from 'src/components/atom/InputForm'
import { Button } from 'src/components/atom/Button'
import { Indicator } from 'src/components/atom/Indicator'

export interface Props {
  email: string
  password: string
  onChangeEmail: (e: any) => void
  onChangePassword: (e: any) => void
  onClickSend: (e: any) => void
  posting: boolean
}

export class Template extends React.Component<Props> {
  static async getIntialProps() {
    const { user }: any = await fetch('https://us-central1-next-starter.cloudfunctions.net/api/login', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    console.log(user)
  }

  render() {
    const { email, password, onChangeEmail, onChangePassword, posting, onClickSend } = this.props
    return (
      <Wrapper>
        <PageTitle style={{ margin: '2rem' }}>TORI</PageTitle>
        <Frame>
          <SignUpTitle>SIGN UP</SignUpTitle>
          <SignUpDescription>We'll send sign up link to your submitted email address.</SignUpDescription>
          <form>
            <InputLabel>Email</InputLabel>
            <EmailInputForm value={email} onChange={onChangeEmail} />
            <InputLabel style={{ marginTop: '1rem' }}>Password</InputLabel>
            <PasswordInputForm value={password} type="password" onChange={onChangePassword} />
            <EmailSubmitButton onClick={onClickSend}>
              {posting ? <Indicator color="rgba(255,255,255,.9)" /> : 'Send'}
            </EmailSubmitButton>
          </form>
        </Frame>
      </Wrapper>
    )
  }
}

const Wrapper = Styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 1rem;
  flex-direction: column;
`

const Frame = Styled.div`
  background-color: #FFF;
  border-radius: 6px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 50px rgba(0, 0, 0, .1);
  box-sizing: border-box;
  padding: 2rem;
`

const SignUpTitle = Styled.h2`
  color: #555;
  font-size: 1.4rem;
  margin: 0;
`

const SignUpDescription = Styled.p`
  font-size: 0.8rem;
  color: #BBB;
  margin-bottom: 1rem;
`

const InputLabel = Styled.div`
  font-size: 0.8rem;
  color: #BBB;
  margin-bottom: 0.2rem;
`

const EmailInputForm = Styled(InputForm)``

const PasswordInputForm = Styled(InputForm)``

const EmailSubmitButton = Styled(Button)`
`

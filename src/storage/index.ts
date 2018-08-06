import * as Cookie from 'universal-cookie'

const Keys = {
  SIGNUP_EMAIL: 'SIGNUP_EMAIL'
}

const defaultMaxAge = 7 * 24 * 60 * 60 // 7 days

export const session = {
  setEmail: (value: string) => new Cookie().set(Keys.SIGNUP_EMAIL, value, { path: '/', maxAge: defaultMaxAge }),
  getEmail: (headers?: any): string => new Cookie(headers).get(Keys.SIGNUP_EMAIL, { path: '/', maxAge: defaultMaxAge })
}

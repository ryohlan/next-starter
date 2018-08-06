import actionCreatorFactory from 'typescript-fsa'

const ac = actionCreatorFactory('SIGNUP')

export const setEmail = ac<string>('SET_EMAIL')

export const setPassword = ac<string>('SET_PASSWORD')

export const signup = ac.async<{ email: string; password: string }, {}, { message: string }>('SIGNUP')

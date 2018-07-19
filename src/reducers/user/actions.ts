import actionCreatorFactory from 'typescript-fsa'

const ac = actionCreatorFactory('USER')

export const setName = ac<{ name: string }>('SET_NAME')

export const fetchUser = ac.async<{ userId: string }, { user: { name: string } }, { message: string }>('FETCH_USER')

import actionCreatorFactory from 'typescript-fsa'

const ac = actionCreatorFactory('USER')

export const setName = ac<{ name: string }>('SET_NAME')

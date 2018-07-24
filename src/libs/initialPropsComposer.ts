/**
 * e.g in /pages/**
 * static getInitialProps = initialPropsComposer([
 *  fetchUser,
 *  validateLogin
 * ])
 */
import { NextInitialProps } from '../../typings'

type GetInitialProps = (props: NextInitialProps) => Promise<any> | object

export const initialPropsComposer = (array: GetInitialProps[]) => async (props: NextInitialProps) => {
  let length = array.length
  let composed = {}
  for (let index = 0; index < length; index++) {
    const result = await array[index](props)
    composed = { ...composed, ...result }
  }

  return composed
}

import Styled from 'styled-components'

export const InputForm = Styled.input`
  padding: 0.3rem;
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-bottom: solid 1px rgba(0, 0, 0, .1);
  transition: all 300ms 0ms;
  &:focus {
    outline: none;
    border-bottom: solid 1px rgba(0, 0, 0, .5);
  }
`

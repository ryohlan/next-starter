import Styled from 'styled-components'

export const Button = Styled.button`
  background-color: #666;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  color: #FFF;
  width: 100%;
  border: none;
  margin-top: 2rem;
  min-height: 44px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, .2);
  border-top: solid 1px rgba(255, 255, 255, .3);
  transition: all 300ms 0ms;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
`

import React from 'react'
import Styled, { keyframes } from 'styled-components'

interface Props {
  color?: string
}

export const Indicator = ({ color }: Props) => (
  <Spinner>
    <Rect1 color={color} />
    <Rect2 color={color} />
    <Rect3 color={color} />
    <Rect4 color={color} />
    <Rect5 color={color} />
  </Spinner>
)

const skStretchdelay = keyframes`
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
`

const Spinner = Styled.div`
  display: inline-block;
  width: 50px;
  height: 20px;
  text-align: center;
  font-size: 10px;
`

const Rect1 = Styled.div`
  background-color: ${({ color }) => color || '#555'};
  height: 100%;
  width: 4px;
  margin: 0 1px;
  display: inline-block;

  animation: ${skStretchdelay} 1.2s infinite ease-in-out;
`

const Rect2 = Styled(Rect1)`
   -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
`

const Rect3 = Styled(Rect1)`
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
`

const Rect4 = Styled(Rect1)`
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
`

const Rect5 = Styled(Rect1)`
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
`

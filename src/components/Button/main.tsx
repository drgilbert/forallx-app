import React, { useState } from 'react'
import useJSS from './style'
import { animated, useSpring } from 'react-spring'

const upShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
const downShadow = '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19)'

const upFont = 'calc(10px + 2vmin)'
const downFont = 'calc(9px + 2vmin)'

interface Props {
  style?: object,
  onClick: () => void,
  children: any
}

function Button({ style, onClick, children }: Props) {
  const classes = useJSS()
  const [pressed, setPressed] = useState(false)
  const buttonSpring = useSpring({
    boxShadow: pressed ? downShadow : upShadow,
    fontSize: pressed ? downFont : upFont,
    transform: pressed ? 'scale(0.95)' : 'scale(1)'
  })
  return (
    <animated.div 
      className={classes.Button} 
      style={Object.assign(buttonSpring, style)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => {
        setPressed(false)
        onClick()
      }}
    >
      {children}
    </animated.div>
  );
}

export default Button;
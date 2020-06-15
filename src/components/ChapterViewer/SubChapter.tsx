import React from 'react'
import { animated, useSpring } from 'react-spring'
import useJSS from './style'
import { colors } from '../../theme'
import { SelectedState } from './types'
//import { navigate } from '@reach/router'

interface Props {
  isOpen?: boolean,
  children: React.ReactNode,
  selectedState?: SelectedState
  id: string
  path?: string
}

function SubChapter({ isOpen, children, selectedState, id, path }: Props) {
  const numChars = (children as String).length
  const classes = useJSS(colors)
  const springStyle = useSpring({
    height: isOpen ? `${Math.floor(numChars/10)*4}vmin` : '0vmin',
    transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
    opacity: isOpen ? 1 : 0,
    padding: isOpen ? '5px' : '0px',
    color: (selectedState as SelectedState).selectedSC === id ? colors.selectedText : colors.text,
    config: {
      tension: 220,
      clamp: true,
      easing: t => t*t
    },
  })
  function onClick() {
    (selectedState as SelectedState).setSelectedSC(id)
  }
  return (
    <animated.div className={classes.SubChapter} style={springStyle} onClick={onClick}>
      {children}
    </animated.div>
  );
}

export default SubChapter
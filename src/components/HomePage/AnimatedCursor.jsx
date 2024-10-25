import React from 'react'
import AnimatedCursor from "react-animated-cursor"


const AnimateCursor = () => {
  return (
    <AnimatedCursor
    innerSize={8}
      outerSize={150}
      color='254, 93, 21'
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={2}
     
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}

export default AnimateCursor
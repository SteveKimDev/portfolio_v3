import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

const HorizontalRule = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const width = useSpring({
    width: animate ? '100vw' : '0vw',
    config: { duration: 1000 },
  });
  return (
    <div>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <Waypoint
        bottomOffset='20%'
        onLeave={() => {
          if (animate) toggle(false);
        }}
      />
      <Waypoint
        topOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <Waypoint
        topOffset='20%'
        onLeave={() => {
          if (animate) toggle(false);
        }}
      />
      <animated.hr style={width} className='horizontal-rule' />
    </div>
  );
};

export default HorizontalRule;

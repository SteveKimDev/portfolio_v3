import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

// CSS
import './styles/footer.css';

const FooterTitle = () => {
  const LetsConnect = [
    'L',
    'E',
    'T',
    "'",
    'S',
    'C',
    'O',
    'N',
    'N',
    'E',
    'C',
    'T',
    '!',
  ];

  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp0 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 100,
    config: { duration: 500 },
  });

  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 200,
    config: { duration: 500 },
  });

  const fadeInUp2 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 300,
    config: { duration: 500 },
  });

  const fadeInUp3 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 400,
    config: { duration: 500 },
  });

  const fadeInUp4 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 500,
    config: { duration: 500 },
  });

  const fadeInUp5 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 600,
    config: { duration: 500 },
  });

  const fadeInUp6 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 700,
    config: { duration: 500 },
  });

  const fadeInUp7 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 800,
    config: { duration: 500 },
  });

  const fadeInUp8 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 900,
    config: { duration: 500 },
  });

  const fadeInUp9 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 1000,
    config: { duration: 500 },
  });

  const fadeInUp10 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 1100,
    config: { duration: 500 },
  });

  const fadeInUp11 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 1200,
    config: { duration: 500 },
  });

  const fadeInUp12 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 1300,
    config: { duration: 500 },
  });

  return (
    <div className='title-section'>
      <Waypoint
        bottomOffset='0%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <div className='title-line'>
        {/* Let's */}
        <animated.p style={fadeInUp0} className='accent-text'>
          {LetsConnect[0]}
        </animated.p>
        <animated.p style={fadeInUp1} className='accent-text'>
          {LetsConnect[1]}
        </animated.p>
        <animated.p style={fadeInUp2} className='accent-text'>
          {LetsConnect[2]}
        </animated.p>
        <animated.p style={fadeInUp3} className='accent-text'>
          {LetsConnect[3]}
        </animated.p>
        <animated.p style={fadeInUp4} className='accent-text space'>
          {LetsConnect[4]}
        </animated.p>
      </div>

      <div className='title-line'>
        {/* Connect */}
        <animated.p style={fadeInUp5} className='accent-text'>
          {LetsConnect[5]}
        </animated.p>
        <animated.p style={fadeInUp6} className='accent-text'>
          {LetsConnect[6]}
        </animated.p>
        <animated.p style={fadeInUp7} className='accent-text'>
          {LetsConnect[7]}
        </animated.p>
        <animated.p style={fadeInUp8} className='accent-text'>
          {LetsConnect[8]}
        </animated.p>
        <animated.p style={fadeInUp9} className='accent-text'>
          {LetsConnect[9]}
        </animated.p>
        <animated.p style={fadeInUp10} className='accent-text'>
          {LetsConnect[10]}
        </animated.p>
        <animated.p style={fadeInUp11} className='accent-text'>
          {LetsConnect[11]}
        </animated.p>
        <animated.p style={fadeInUp12} className='accent-text'>
          {LetsConnect[12]}
        </animated.p>
      </div>
    </div>
  );
};

export default FooterTitle;

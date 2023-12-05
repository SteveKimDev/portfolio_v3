import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

// Component Imports
import FooterTitle from './footer-title';

// CSS
import './styles/footer.css';

// image hover animation
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 75,
  (x - window.innerWidth / 2) / 75,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const FooterSection = () => {
  // image hover animation
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  // animation on scroll
  const [animate, toggle] = useState(false);

  // Animation for Text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    config: { duration: 1000 },
  });

  const fadeInUp2 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 500,
    config: { duration: 1000 },
  });

  return (
    <section id='Footer' className='footer-section'>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />

      {/* Title */}
      <FooterTitle />

      {/* Email */}
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.to(trans),
          ...fadeInUp1,
        }}
        className='relative email-div'
      >
        <a href='mailto:stevekimdev.com'>me@stevekimdev.com</a>
      </animated.div>

      {/* Social Links */}
      <animated.div style={fadeInUp2} className='social-div'>
        <span className='social-span'>
          <a
            href='https://www.linkedin.com/in/stevekim10'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </span>
        <span className='social-span'>
          <a
            href='https://www.behance.net/stevekim_designs'
            target='_blank'
            rel='noreferrer'
          >
            Behance
          </a>
        </span>
        <span className='social-span'>
          <a
            href='https://github.com/SteveKimDev'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </span>
      </animated.div>
    </section>
  );
};

export default FooterSection;

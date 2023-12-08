import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { Parallax } from 'react-scroll-parallax';

// Component Imports
import BackgroundImg from './01a-bckgrd-img';
import HeroHeadline from './01b-headline';
import Cube from '../../images/cube.png';
import Diamond from '../../images/diamond.png';

import * as Homepage from './homepage.module.css';

const HeroSection = () => {
  const fadeIndown = useSpring({
    from: { opacity: 0, translateY: '-500px' },
    to: { opacity: 1, translateY: '0px' },
    config: { mass: 20, tension: 100, friction: 45 },
  });
  return (
    <div className={`relative ${Homepage.heroSection}`}>
      <animated.div style={fadeIndown} className='floating-div'>
        <Parallax speed={10} rotate={[-10, 45]} className={Homepage.cube1}>
          <img src={Cube} alt='cube' />
        </Parallax>
        <Parallax speed={10} rotate={[0, 90]} className={Homepage.diamond1}>
          <img src={Diamond} alt='diamond' />
        </Parallax>
        <Parallax speed={10} rotate={[90, 360]} className={Homepage.cube2}>
          <img src={Cube} alt='cube' />
        </Parallax>
        <Parallax speed={20} rotate={[-45, 90]} className={Homepage.diamond2}>
          <img src={Diamond} alt='diamond' />
        </Parallax>
        <Parallax speed={5} rotate={[-25, 45]} className={Homepage.diamond3}>
          <img src={Diamond} alt='diamond' />
        </Parallax>
      </animated.div>

      <BackgroundImg />
      <HeroHeadline />
    </div>
  );
};

export default HeroSection;

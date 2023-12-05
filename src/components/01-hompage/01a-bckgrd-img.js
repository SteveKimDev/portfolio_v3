import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { StaticImage } from 'gatsby-plugin-image';

// CSS
import * as Homepage from './homepage.module.css';

const BackgroundImg = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 0.5 },
    config: { duration: 1000 },
  });
  return (
    <animated.div style={fadeIn} className={Homepage.backgroundImg}>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1701796737/headshot.png'
        alt='background img'
      />
    </animated.div>
  );
};

export default BackgroundImg;

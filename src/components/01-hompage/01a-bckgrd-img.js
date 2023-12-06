import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { StaticImage } from 'gatsby-plugin-image';

// CSS
import * as Homepage from './homepage.module.css';

const BackgroundImg = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: { duration: 1500 },
  });
  return (
    <animated.div style={fadeIn}>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1700686381/about-img-3_x4kraq.png'
        alt='background img'
        className={Homepage.backgroundImg}
      />
    </animated.div>
  );
};

export default BackgroundImg;

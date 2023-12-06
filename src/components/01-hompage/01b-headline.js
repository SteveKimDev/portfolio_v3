import * as React from 'react';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';

//CSS
import * as Homepage from './homepage.module.css';

const HeroHeadline = () => {
  // opacity
  const opacitySpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  // height
  const heightSpring = useSpring({
    from: { height: '0%' },
    to: { height: '100%' },
    delay: 500,
    config: { duration: 2000, tension: 180, friction: 12 },
  });
  return (
    <animated.div
      style={{
        ...opacitySpring,
        overflow: 'hidden',
        ...heightSpring,
      }}
      className={Homepage.headline}
    >
      <h1 className={`accent-color ${Homepage.headline1}`}>Product</h1>
      <h1 className={`accent-color ${Homepage.headline1}`}>Designer</h1>
      <h2 className={`accent-color ${Homepage.headline2}`}>
        With Web Development Experience
      </h2>
      <p className={Homepage.headlineDescription}>
        Combining product design expertise with web development experience, I
        offer a unique perspective to create engaging, user-friendly web
        applications, utilizing both creative and technical problem-solving
        skills.
      </p>
      <div className={Homepage.headlineLinkDiv}>
        <Link to='/' className='button'>
          <span>Learn more about me</span>
        </Link>
      </div>
    </animated.div>
  );
};

export default HeroHeadline;

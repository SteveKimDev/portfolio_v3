import * as React from 'react';

// Component Imports
import BackgroundImg from './01a-bckgrd-img';
import HeroHeadline from './01b-headline';

import * as Homepage from './homepage.module.css';

const HeroSection = () => {
  return (
    <div className={`relative ${Homepage.heroSection}`}>
      <BackgroundImg />
      <HeroHeadline />
    </div>
  );
};

export default HeroSection;

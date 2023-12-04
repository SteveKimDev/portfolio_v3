import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Logo = () => {
  return (
    <div className='logo-div'>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1701104759/logo-v2-1_iai4zt.webp'
        alt='Logo'
        className='logo'
      />
    </div>
  );
};

export default Logo;

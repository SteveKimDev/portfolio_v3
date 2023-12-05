import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Logo = () => {
  return (
    <div className='logo-div'>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1701817301/logo-with-text__transparent-background_titr4e.webp'
        alt='Logo'
        className='logo'
      />
    </div>
  );
};

export default Logo;

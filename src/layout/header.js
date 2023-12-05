import React, { useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'gatsby';

// Component Imports
import OffCanvasMenu from './offcanvas-menu';
import Logo from './logo';

// CSS
import './styles/header.css';

const Header = () => {
  // add background color when scolling up
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: scrolling ? 'rgba(17, 17, 17, 0.8)' : 'transparent',
    transition: 'background-color 0.3s ease-in-out',
  };

  return (
    <header style={headerStyle} className='header'>
      <Stack direction='horizontal' gap={5}>
        {/* Stack 1 */}
        <div>
          <Link to='/'>
            <div className='stack1'>
              <Logo />
            </div>
          </Link>
        </div>

        {/* Stack 2 */}
        <div className='stack2 ms-auto'>
          <OffCanvasMenu />
        </div>
      </Stack>
    </header>
  );
};

export default Header;

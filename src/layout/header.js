import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
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

  // fadeIn
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: { duration: 1500 },
  });

  return (
    <header style={headerStyle} className='header'>
      <animated.div style={fadeIn}>
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
      </animated.div>
    </header>
  );
};

export default Header;

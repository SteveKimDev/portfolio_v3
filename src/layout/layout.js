import * as React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

// Component Imports
import Header from './header';
// import HorizontalRule from '../components/hr';
// import Footer from './footer';

// CSS
import './styles/layout.css';

const Layout = ({ children }) => {
  return (
    <ParallaxProvider scrollAxis='vertical'>
      <div>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </ParallaxProvider>
  );
};

export default Layout;

import * as React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './header';
import HorizontalRule from '../components/hr';
import Footer from './footer';

import './layout.css';

const Layout = ({ children }) => {
  return (
    <ParallaxProvider scrollAxis='vertical'>
      <div>
        <Header />
        <main>{children}</main>
        <HorizontalRule />
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Layout;

import * as React from 'react';

// Component Imports
import Layout from '../layout/layout';
import Seo from '../layout/seo';
import HeroSection from '../components/01-hompage/01-hero-section';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title='Product Designer' />
      <HeroSection />
    </Layout>
  );
};

export default IndexPage;

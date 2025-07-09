import React from 'react'
import Hero from './hero/Hero';
import Features from './features/Features';
import Testimonials from './testimonials/Testimonials';
import Pricing from './pricing/Pricing';
import Cta from './cta/Cta';
import Layout from '../../partials/Layout';

const Home = () => {
  return (
    <>      
        <Layout>
            <Hero/>
            <Features/>
            <Testimonials/>
            <Pricing/>
            <Cta/>
        </Layout>     
    </>
  );
};

export default Home;
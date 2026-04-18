import React from 'react';
import Hero from '../components/Hero';
import TrustedSection from '../components/TrustedSection';
import Countries from '../components/Countries';
import Services from '../components/Services';
import Timeline from '../components/Timeline';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedSection />
      <Countries />
      <Services />
      <Timeline />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;

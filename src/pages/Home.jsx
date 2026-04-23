import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Guidelinks Top Careers International | Study Abroad & Domestic Admissions</title>
        <meta name="description" content="Guidelinks International offers premium education consultancy for Study Abroad, Medical Admissions, Management Quota, and Direct Admissions in top Indian colleges." />
      </Helmet>
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

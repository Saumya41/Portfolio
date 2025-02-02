import React from 'react';
import Hero from '../components/Hero';
import PhotoGallery from '../components/PhotoGallery';
import SiteMap from '../components/SiteMap';

const Home = () => {
  return (
    <main>
      <Hero />
      <PhotoGallery />
      <SiteMap />
    </main>
  );
};

export default Home;
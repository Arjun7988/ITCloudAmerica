import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Services from '../components/Services';
import VideoSection from '../components/VideoSection';
import About from '../components/About';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Services />
      <VideoSection />
      <About />
    </div>
  );
};

export default Home;
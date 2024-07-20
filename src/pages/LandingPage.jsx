import React from 'react';
import Header from '../components/molecules/Header';
import ArtistSection from '../components/organisms/ArtistSection';
import MusicSection from '../components/organisms/MusicSection';
import AlbumsSection from '../components/organisms/AlbumsSection';
import HistorySection from '../components/organisms/HistorySection';
import Footer from '../components/organisms/Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <ArtistSection />
      <MusicSection />
      <AlbumsSection />
      <HistorySection />
      <Footer />
    </div>
  );
};

export default LandingPage;

import React from 'react';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import Navbar from './Navbar';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">The Best Partner for Your Yard's Calls!</h1>
          <p className="primary-text">Our 24/7 AI answers all calls & breaks sales records. Heard our example calls?</p>
          <button className="secondary-button">
            See How It Works <FiArrowRight />{' '}
          </button>
        </div>
        <div className="home-image-section">
          <div className="responsive-iframe-container">
            <iframe
              title="Video"
              src="https://www.facebook.com/plugins/video.php?height=323&href=https%3A%2F%2Fwww.facebook.com%2F100000237951579%2Fvideos%2F827553928777401%2F&show_text=false&width=560&t=0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

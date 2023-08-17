import React from 'react';
import ProfilePic from '../Assets/john-kett-iaa-125x125.png';
import ProfilePic2 from '../Assets/testimonial-court-round-grey-120x120.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>Interesting concept!</p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Insurance Auto Auction (IAA) CEO</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic2} alt="" />
        <p>I love how it frees up our agents to focus on big deals. Auto Sage AI is a game-changer for our business</p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Court Killgo</h2>
      </div>
    </div>
  );
};

export default Testimonial;

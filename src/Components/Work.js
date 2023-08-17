import React from 'react';
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: 'Call Comes In',
      text: 'Your customer calls, our AI answers',
    },
    {
      image: ChooseMeals,
      title: 'AI Interaction',
      text: 'The system recognizes the type of call (part request, junk car sale, etc.) and gathers necessary details like Year, Make, Model.',
    },
    {
      image: DeliveryMeals,
      title: 'Routing',
      text: 'Calls are directed to live agents, or specific queries are handled by AI.',
    },
    {
      image: PickMeals,
      title: 'CRM Integration',
      text: 'All call details are logged in the CRM for future reference.',
    },
    {
      image: ChooseMeals,
      title: 'Sales Boost',
      text: 'Your sales agents can focus on high-value tasks, raising efficiency and breaking sales records.',
    },
    {
      image: DeliveryMeals,
      title: 'Always On',
      text: 'Never miss a call, day or night, with 24/7 AI-powered answering.',
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          With Auto Sage AI, your automotive parts business is always ready to serve customers and make sales. Contact us to
          transform your call handling today!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

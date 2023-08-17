import React from 'react';
import axios from 'axios';

const Contact = () => {
  const [phone, setPhone] = React.useState('');

  const handleSubmit = async () => {
    const data = {
      data: [
        {
          Last_Name: 'Unknown',
          Year: 'NA',
          Model: 'NA',
          Part: 'NA',
          Make: 'NA',
          Problem: 'NA',
          Case: 'SAAS',
          Phone_3: phone,
          Call_Status: 'NA',
          Intent: 'NA',
          Number_Type: 'NA',
          Carrier: 'NA',
        },
      ],
    };

    try {
      const response = await axios.post('https://master--meek-custard-97937a.netlify.app/.netlify/functions/myFunction', data);

      if (response.status === 200) {
        console.log('Data saved to Zoho CRM', response.data);
      } else {
        console.error('Error saving data to Zoho CRM', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Want a demo?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input className="outlined-input" type="text" placeholder="Enter Your Mobile Phone No." value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button className="secondary-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;

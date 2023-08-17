import React from 'react';
import axios from 'axios';

const Contact = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const getAccessToken = async () => {
    try {
      // Call your Netlify function
      const response = await axios.get('https://master--meek-custard-97937a.netlify.app/.netlify/functions/myFunction');

      if (response.data && response.data.access_token) {
        return response.data.access_token;
      } else {
        throw new Error('No access token in response');
      }
    } catch (error) {
      console.error('Error obtaining access token:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    const data = {
      data: [
        {
          'Mobile No': phone,
        },
      ],
    };

    const token = await getAccessToken();
    console.log(token)
    const response = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (response.ok) {
      console.log('Data saved to Zoho CRM', responseData);
    } else {
      console.error('Error saving data to Zoho CRM', responseData);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Want a demo?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="text" placeholder="Mobile Phone No." value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button className="secondary-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;

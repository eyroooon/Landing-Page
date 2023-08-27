import React, { useState } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Contact = () => {
    const [phone, setPhone] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = async () => {
        if (!isChecked) {
            alert("Please agree to the Terms and Agreement before submitting.");
            return;
        }

        try {
            const response = await axios.post('https://master--meek-custard-97937a.netlify.app/.netlify/functions/myFunction', phone);

            if (response.status === 200) {
                console.log('Data saved to Zoho CRM', response.data);
                window.location.reload();
            } else {
                console.error('Error saving data to Zoho CRM', response.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
      <div className="contact-page-wrapper" id="contact">
        <h1 className="primary-heading">Want a demo?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <div className="contact-form-container">
          <PhoneInput
            className="outlined-input"
            placeholder="Enter your phone number"
            value={phone}
            onChange={setPhone}
          />

          <div className="terms-checkbox-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the{' '}
              <a
                href="/privacy-and-agreement"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Agreement
              </a>
            </label>
          </div>
          <button className="secondary-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
};

export default Contact;

import React, { useState } from 'react';
import Alert from './Alert';

const GoogleS = () => {
  const scriptURL = ''; //Put your API here//
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmitForm = (form) => {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        setShowAlert(true);
        setAlertMessage('Thank you! Your form is submitted successfully.');
        form.reset();
      })
      .catch(error => {
        setShowAlert(true);
        setAlertMessage('Error submitting the form. Please try again later.');
        console.error('Error!', error.message);
      });
  };

  const closeAlert = () => {
    setShowAlert(false);
    setAlertMessage('');
  };

  return (
    <div>
      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
      <button
        style={{
          marginTop: '5px',
          width: '140px',
          height: '40px',
          border: 'none',
          backgroundColor: '#121619',
          color: 'whitesmoke',
          fontSize: '15px',
          cursor: 'pointer',
          padding: '10px 20px',
          marginLeft: '30px',
          paddingTop: '5px'
        }}
        onClick={() => handleSubmitForm(document.forms['contact-form'])}
      >
        Send Message
      </button>
    </div>
  );
};

export default GoogleS;

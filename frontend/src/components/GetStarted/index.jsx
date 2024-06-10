import { useState } from 'react';
import './index.css';
import { getUserDetails, setUserDetails } from '../../customMethods';
import { Navigate } from 'react-router-dom';

const GetStarted = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const userDetails = getUserDetails();

  if (userDetails !== null) {
    return <Navigate to="/projects" />;
  }

  const handleGetStartedSubmit = async () => {
    const apiUrl = `https://lama-er6k.onrender.com/api/user/getstarted`;
    const body = {
      name: nameInput,
      email: emailInput
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    const response = await fetch(apiUrl, options);
    const data = await response.json();

    setUserDetails({ id: data.id, name: data.name, email: data.email });
    setNameInput('');
    setEmailInput('');
  };

  return (
    <div className="getstarted-container">
      <h1 className="main-heading">Get Started</h1>
      <div className="getstarted-card">
        <input
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
          type="text"
          className="input-container name-input"
          placeholder="Name"
        />
        <input
          onChange={(e) => setEmailInput(e.target.value)}
          value={emailInput}
          type="text"
          className="input-container email-input"
          placeholder="Email"
        />
        <button onClick={handleGetStartedSubmit} className="submit-btn">
          Start
        </button>
      </div>
    </div>
  );
};

export default GetStarted;

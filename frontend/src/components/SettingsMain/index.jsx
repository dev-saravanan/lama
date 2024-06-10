import './index.css';

import userImage from '../../assets/images/png/user.png';
import { useEffect, useState } from 'react';
import { getUserDetails, removeUserDetails, setUserDetails } from '../../customMethods';

const SettingsMain = () => {
  const userDetails = JSON.parse(getUserDetails());
  const [username, setUsername] = useState(userDetails.name);
  const [email, setEmail] = useState(userDetails.email);

  const updateUsername = async () => {
    const apiUrl = `https://lama-er6k.onrender.com/api/user/update/${userDetails.id}`;
    const body = { name: username };
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    const response = await fetch(apiUrl, options);
    const data = await response.json();

    removeUserDetails();
    setUserDetails({ id: data.id, name: data.name, email: data.email });
  };

  return (
    <div>
      <h1 className="settings-heading">Account Settings</h1>

      <div className="account-settings">
        <div>
          <img className="user-image" src={userImage} alt="user image" />
        </div>

        <div className="acc-inner-container">
          <label className="settings-label">User Name</label>
          <input
            type="text"
            className="input-container"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={updateUsername}
          />
        </div>

        <div className="acc-inner-container">
          <label className="settings-label">Email</label>
          <input type="text" className="input-container" value={email} disabled />
        </div>
      </div>

      <h1 className="settings-heading">Subscriptions</h1>

      <div className="subscription-settings">
        <div className="subscription-notification">
          <p className="subs-notification-text">
            You are currently on the <span className="highlight">Ques AI Basic Plan!</span>
          </p>
          <button className="subs-notification-btn">Upgrade</button>
        </div>

        <button className="cancel-subscription-btn">Cancel Subscriptions</button>
        <button className="logout-btn" onClick={removeUserDetails}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default SettingsMain;

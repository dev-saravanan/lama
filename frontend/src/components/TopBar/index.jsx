import './index.css';

import homeIconPurple from '../../assets/images/svg/homeIconPurple.svg';
import languageSymbol from '../../assets/images/svg/languageSymbol.svg';
import bellIcon from '../../assets/images/svg/bellIcon.svg';
import { useState } from 'react';

const TopBar = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const { activeTab, navTabConstants } = props;

  let currPage = '';

  if (activeTab === navTabConstants.project) {
    currPage = 'Upload';
  } else if (activeTab === navTabConstants.configuration) {
    currPage = 'Configuration';
  } else if (activeTab === navTabConstants.deployment) {
    currPage = 'Deployment';
  } else if (activeTab === navTabConstants.pricing) {
    currPage = 'Pricing';
  } else if (activeTab === navTabConstants.settings) {
    currPage = 'Settings';
  } else {
    currPage = '';
  }

  const handleSelect = (language) => {
    setSelectedLanguage(language);
  };

  const languageOptions = ['EN', 'TA', 'HI'];

  return (
    <div className="top-bar-container">
      <div className="current-path">
        <img className="home-icon-purple" src={homeIconPurple} alt="home icon" />
        <p className="path-text">{`/ Project / ${currPage}`}</p>
      </div>

      <div className="language-selection-notification">
        <select
          value={selectedLanguage}
          onChange={(e) => handleSelect(e.target.value)}
          className="custom-select">
          {languageOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img className="language-icon" src={languageSymbol} alt="english" />
        <img className="bell-icon" src={bellIcon} alt="notification icon" />
      </div>
    </div>
  );
};

export default TopBar;

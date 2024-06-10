import './index.css';

import lamaLogo from '../../assets/images/svg/lamaLogo.svg';
import settingsDarkIcon from '../../assets/images/svg/settingsDarkIcon.svg';

const NavBar = (props) => {
  const { activeTab, setActiveTab, navTabConstants } = props;

  return (
    <nav className="navbar-main-container">
      <div className="logo-container">
        <img src={lamaLogo} alt="logo" />
        <h1 className="logo-name">LAMA.</h1>
      </div>

      <div className="nav-container">
        <ul className="navitem-container">
          <li className="nav-item">
            <button
              onClick={() => setActiveTab(navTabConstants.project)}
              className={`nav-item-button ${activeTab === navTabConstants.project ? 'active' : ''}`}>
              <div className="nav-count">1</div>
              <p className="nav-text">Projects</p>
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActiveTab(navTabConstants.configuration)}
              className={`nav-item-button ${activeTab === navTabConstants.configuration ? 'active' : ''}`}>
              <div className="nav-count">2</div>
              <p className="nav-text">Widget Configurations</p>
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActiveTab(navTabConstants.deployment)}
              className={`nav-item-button ${activeTab === navTabConstants.deployment ? 'active' : ''}`}>
              <div className="nav-count">3</div>
              <p className="nav-text">Deployment</p>
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActiveTab(navTabConstants.pricing)}
              className={`nav-item-button ${activeTab === navTabConstants.pricing ? 'active' : ''}`}>
              <div className="nav-count">4</div>
              <p className="nav-text">Pricing</p>
            </button>
          </li>
        </ul>

        <button
          onClick={() => setActiveTab(navTabConstants.settings)}
          className={`nav-item-button ${activeTab === navTabConstants.settings ? 'active' : ''}`}>
          <div className="nav-count">
            <img src={settingsDarkIcon} className="settings-icon-dark" alt="settings icon" />
          </div>
          <p className="nav-text">Settings</p>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

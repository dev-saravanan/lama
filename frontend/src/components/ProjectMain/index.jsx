import './index.css';

import homeIcon from '../../assets/images/svg/homeIcon.svg';
import settingsIcon from '../../assets/images/svg/settingsIcon.svg';
import bellIcon from '../../assets/images/svg/bellIcon.svg';
import lamaLogo from '../../assets/images/svg/lamaLogo.svg';
import CreateNewProject from '../CreateNewProject';
import ProjectsList from '../ProjectsList';
import { useEffect, useState } from 'react';
import { getUserDetails } from '../../customMethods';
import Loader from '../Loader';

const ProjectMain = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const user = JSON.parse(getUserDetails());

      const apiUrl = `https://lama-er6k.onrender.com/api/project/list`;
      const body = { userId: user.id };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      };

      const response = await fetch(apiUrl, options);
      const data = await response.json();

      setProjectsList(data);
      setIsLoading(false);
    })();
  }, []);

  const renderPageView = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return projectsList.length === 0 ? (
        <CreateNewProject projectsList={projectsList} setProjectsList={setProjectsList} />
      ) : (
        <ProjectsList projectsList={projectsList} setProjectsList={setProjectsList} />
      );
    }
  };

  return (
    <div>
      <nav className="navbar-container">
        <div className="logo-container">
          <img src={lamaLogo} alt="logo" />
          <h1 className="logo-name">LAMA.</h1>
        </div>

        <div className="setting-notification-container">
          <img src={settingsIcon} alt="setting icon" />
          <img src={bellIcon} alt="notification icon" />
        </div>
      </nav>

      <div className="main-container">
        <button className="back-to-home-btn">
          <img src={homeIcon} alt="home icon" />
          Back to Home
        </button>

        {renderPageView()}
      </div>
    </div>
  );
};

export default ProjectMain;

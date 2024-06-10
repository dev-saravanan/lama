import { useParams } from 'react-router-dom';
import { useState } from 'react';

import NavBar from '../NavBar';
import './index.css';
import UploadMain from '../UploadMain';
import ConfigurationMain from '../ConfigurationMain';
import TopBar from '../TopBar';
import ComingSoon from '../ComingSoon';
import SettingsMain from '../SettingsMain';

const navTabConstants = {
  project: 'PROJECT',
  configuration: 'CONFIGURATION',
  deployment: 'DEPLOYMENT',
  pricing: 'PRICING',
  settings: 'SETTINGS',
  edit: 'EDIT'
};

const ProjectDetailsMain = (props) => {
  const [activeTab, setActiveTab] = useState(navTabConstants.project);
  let { projectId } = useParams();

  const renderActivePage = () => {
    switch (activeTab) {
      case navTabConstants.project:
        return <UploadMain projectId={projectId} />;
      case navTabConstants.configuration:
        return <ConfigurationMain />;
      case navTabConstants.settings:
        return <SettingsMain />;
      default:
        return <ComingSoon />;
    }
  };

  return (
    <div className="project-details-main">
      <div className="left-container">
        <NavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          navTabConstants={navTabConstants}
        />
      </div>

      <div className="right-container">
        <TopBar activeTab={activeTab} navTabConstants={navTabConstants} />
        {renderActivePage()}
      </div>
    </div>
  );
};

export default ProjectDetailsMain;

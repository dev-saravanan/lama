import { useState } from 'react';
import ConfigurationNavBar from '../ConfigurationNavBar';
import './index.css';
import GeneralConfiguration from '../GeneralConfiguration';
import DisplayConfiguration from '../DisplayConfiguration';
import ComingSoon from '../ComingSoon';

const navbarConstants = [
  { id: 'GENERAL', name: 'General' },
  { id: 'DISPLAY', name: 'Display' },
  { id: 'ADVANCED', name: 'Advanced' }
];

const ConfigurationMain = () => {
  const [activeNavTab, setActiveNavTab] = useState(navbarConstants[0].id);

  const changeTab = (activeTab) => {
    setActiveNavTab(activeTab);
  };

  const renderActiveConfigPage = () => {
    switch (activeNavTab) {
      case navbarConstants[0].id:
        return <GeneralConfiguration />;
      case navbarConstants[1].id:
        return <DisplayConfiguration />;
      case navbarConstants[2].id:
        return <ComingSoon />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="config-heading">Configuration</h1>
      <ConfigurationNavBar
        navbarConstants={navbarConstants}
        changeTab={changeTab}
        activeTab={activeNavTab}
      />

      {renderActiveConfigPage()}
    </div>
  );
};

export default ConfigurationMain;

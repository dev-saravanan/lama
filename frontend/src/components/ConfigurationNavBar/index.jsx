import './index.css';

const NavItem = (props) => {
  const { tabDetails, changeTab, activeTab } = props;
  const { id, name } = tabDetails;

  const onClickTab = () => {
    changeTab(id);
  };

  return (
    <li className="">
      <button
        className={`nav-item-btn ${id === activeTab ? 'active-config' : ''}`}
        onClick={onClickTab}>
        {name}
      </button>
    </li>
  );
};

const ConfigurationNavBar = (props) => {
  const { navbarConstants, changeTab, activeTab } = props;

  return (
    <ul className="config-nav-container">
      {navbarConstants.map((eachTabDetails) => (
        <NavItem
          key={eachTabDetails.id}
          tabDetails={eachTabDetails}
          changeTab={changeTab}
          activeTab={activeTab}
        />
      ))}
    </ul>
  );
};

export default ConfigurationNavBar;

import Popup from 'reactjs-popup';

import './index.css';
import plusIcon from '../../assets/images/svg/plusIcon.svg';
import { useState } from 'react';
import { getUserDetails } from '../../customMethods';

const CreateProjectPopup = (props) => {
  const { projectsList, setProjectsList } = props;
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [projectNameInput, setProjectNameInput] = useState('');

  const onClickCreateProject = async (close) => {
    const user = JSON.parse(getUserDetails());
    const apiUrl = `https://lama-er6k.onrender.com/api/project/create`;
    const body = { userId: user.id, name: projectNameInput };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    const response = await fetch(apiUrl, options);
    const data = await response.json();

    setProjectsList([...projectsList, data]);
    close();
  };

  return (
    <Popup
      trigger={
        <button className="create-new-project-btn">
          <img className="add-icon" src={plusIcon} alt="add icon" />
          <p className="create-new-project-btn-text">Create New Project</p>
        </button>
      }
      modal
      nested>
      {(close) => (
        <div className="create-project-modal">
          <h1 className="create-project-header">Create Project</h1>
          <div className="create-project-input-container">
            <label className="project-name-label" htmlFor="projectname">
              Enter Project Name:
            </label>
            <input
              className="input-container"
              id="projectname"
              type="text"
              placeholder="Type Here..."
              onChange={(e) => setProjectNameInput(e.target.value)}
              onBlur={(e) =>
                projectNameInput === '' ? setShowErrorMsg(true) : setShowErrorMsg(false)
              }
            />
            {showErrorMsg ? <p className="error-msg">Project name cannot be empty</p> : null}
          </div>

          <div className="btn-container">
            <button
              className="close-btn"
              onClick={() => {
                close();
              }}>
              Cancel
            </button>

            <button
              className="submit-btn"
              onClick={() => {
                onClickCreateProject(close);
              }}>
              Create
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default CreateProjectPopup;

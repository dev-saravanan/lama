import './index.css';

import editSearchIcon from '../../assets/images/svg/editSearchIcon.svg';
import pencilIcon from '../../assets/images/svg/pencilIcon.svg';
import { useEffect, useState } from 'react';
import Loader from '../Loader';

const EditTranscript = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { fileId, name, setName, description, setDescription, isEditMode, setIsEditMode } = props;

  useEffect(() => {
    (async () => {
      const apiUrl = `https://lama-er6k.onrender.com/api/project/files/detail/${fileId}`;

      const options = {
        method: 'GET'
      };

      try {
        const response = await fetch(apiUrl, options);
        const data = await response.json();

        setName(data.name);
        setDescription(data.description);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [isEditMode]);

  return (
    <div className="edit-transcript-container">
      <div className="edit-btn-grp">
        <button
          className="edit-mode-btn"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}>
          <img className="pencil-icon" src={pencilIcon} alt="edit mode" />
          <p className="edit-mode-text">Edit Mode</p>
        </button>
        <button className="search-icon-btn">
          <img className="edit-search-icon" src={editSearchIcon} alt="search icon" />
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <p className="file-name">{name}</p>
          <textarea
            className="description-area"
            onChange={(e) => setDescription(e.target.value)}
            defaultValue={description}
            disabled={!isEditMode}
          />
        </div>
      )}
    </div>
  );
};

export default EditTranscript;

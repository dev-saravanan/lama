import Popup from 'reactjs-popup';

import './index.css';
import EditTranscript from '../EditTranscript';
import { useEffect, useState } from 'react';

const EditFilePopup = (props) => {
  const { fileId } = props;
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  console.log('STATE', description);

  const onSaveChanges = async () => {
    const apiUrl = `https://lama-er6k.onrender.com/api/project/files/update/${fileId}`;
    const body = { name, description };
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    console.log('Up', body);

    const response = await fetch(apiUrl, options);
    const data = await response.json();

    console.log('Updateed', data);
  };

  return (
    <Popup
      trigger={<button className="edit-button">Edit</button>}
      modal
      nested
      closeOnDocumentClick={!isEditMode}
      position="center center">
      {(close) => (
        <div className="modal">
          <div className="edit-top-bar">
            <h1 className="edit-file-header">Edit Transcript</h1>
            {isEditMode ? (
              <div>
                <button
                  className="discard-btn"
                  onClick={() => {
                    setIsEditMode(!isEditMode);
                    close();
                  }}>
                  Discard
                </button>
                <button
                  className="save-btn"
                  onClick={() => {
                    onSaveChanges;
                    close();
                  }}>
                  Save & Exit
                </button>
              </div>
            ) : null}
          </div>

          <EditTranscript
            fileId={fileId}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
          />
        </div>
      )}
    </Popup>
  );
};

export default EditFilePopup;

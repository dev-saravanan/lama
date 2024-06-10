import Popup from 'reactjs-popup';

import './index.css';
import youtube from '../../assets/images/svg/youtube.svg';
import spotify from '../../assets/images/svg/spotify.svg';
import rssfeed from '../../assets/images/svg/rssfeed.svg';
import crossicon from '../../assets/images/svg/crossicon.svg';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const UploadForm = (props) => {
  const { filesList, setFilesList } = props;
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  let { projectId } = useParams();

  const createNewFile = async () => {
    const apiUrl = `https://lama-er6k.onrender.com/api/project/files/create`;
    const body = { name: nameInput, description: descriptionInput, projectId };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();

      setFilesList([...filesList, data]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="upload-input-container">
        <label className="upload-label" htmlFor="filename">
          Name
        </label>
        <input
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
          className="input-container upload-input"
          id="filename"
          type="text"
        />

        <label className="upload-label" htmlFor="filename">
          Description
        </label>
        <input
          onChange={(e) => setDescriptionInput(e.target.value)}
          value={descriptionInput}
          className="input-container"
          id="filename"
          type="text"
        />
      </div>

      <div className="btn-container">
        <button className="upload-btn" onClick={createNewFile}>
          Upload
        </button>
      </div>
    </>
  );
};

const YoutubePopup = (props) => {
  const { filesList, setFilesList } = props;

  return (
    <Popup
      trigger={
        <button className="upload-button">
          <img className="upload-img" src={youtube} alt="upload youtube" />
          <div className="upload-text-container">
            <p>Upload</p>
            <p>Youtube Video</p>
          </div>
        </button>
      }
      modal
      nested>
      {(close) => (
        <div className="upload-modal">
          <div className="upload-model-top">
            <div className="upload-icon-text">
              <img className="upload-modal-img" src={youtube} alt="upload youtube" />
              <h1 className="upload-header">Upload from Youtube</h1>
            </div>
            <button className="close-btn" onClick={close}>
              <img className="close-icon" src={crossicon} alt="close icon" />
            </button>
          </div>

          <UploadForm filesList={filesList} setFilesList={setFilesList} />
        </div>
      )}
    </Popup>
  );
};

const SpotifyPopup = (props) => {
  const { filesList, setFilesList } = props;

  return (
    <Popup
      trigger={
        <button className="upload-button">
          <img className="upload-img" src={spotify} alt="upload spotify" />
          <div className="upload-text-container">
            <p>Upload</p>
            <p>Spotify Podcast</p>
          </div>
        </button>
      }
      modal
      nested>
      {(close) => (
        <div className="upload-modal">
          <div className="upload-model-top">
            <div className="upload-icon-text">
              <img className="upload-modal-img" src={spotify} alt="upload youtube" />
              <h1 className="upload-header">Upload from Spotify</h1>
            </div>
            <button className="close-btn" onClick={close}>
              <img className="close-icon" src={crossicon} alt="close icon" />
            </button>
          </div>

          <UploadForm filesList={filesList} setFilesList={setFilesList} />
        </div>
      )}
    </Popup>
  );
};

const RssFeedPopup = (props) => {
  const { filesList, setFilesList } = props;

  return (
    <Popup
      trigger={
        <button className="upload-button">
          <img className="upload-img" src={rssfeed} alt="upload rss feed" />
          <div className="upload-text-container">
            <p>Upload from</p>
            <p>RSS Feed</p>
          </div>
        </button>
      }
      modal
      nested>
      {(close) => (
        <div className="upload-modal">
          <div className="upload-model-top">
            <div className="upload-icon-text">
              <img className="upload-modal-img" src={rssfeed} alt="upload youtube" />
              <h1 className="upload-header">Upload from RSS Feed</h1>
            </div>
            <button className="close-btn" onClick={close}>
              <img className="close-icon" src={crossicon} alt="close icon" />
            </button>
          </div>

          <UploadForm filesList={filesList} setFilesList={setFilesList} />
        </div>
      )}
    </Popup>
  );
};

const UploadButtons = (props) => {
  const { filesList, setFilesList } = props;

  return (
    <div className="upload-btn-main">
      <YoutubePopup filesList={filesList} setFilesList={setFilesList} />
      <SpotifyPopup filesList={filesList} setFilesList={setFilesList} />
      <RssFeedPopup filesList={filesList} setFilesList={setFilesList} />
    </div>
  );
};

export default UploadButtons;

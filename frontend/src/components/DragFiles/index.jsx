import './index.css';
import uploadCloud from '../../assets/images/svg/uploadCloud.svg';

const DragFiles = () => {
  return (
    <div className="dragfile-container">
      <img className="upload-cloud-img" src={uploadCloud} alt="Upload to cloud" />
      <h1 className="drag-file-main-text">
        Select a file or drag and drop here (Podcast Media or Transcription Text)
      </h1>
      <p className="drag-file-subtext">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
      <button className="select-file-btn">Select File</button>
    </div>
  );
};

export default DragFiles;

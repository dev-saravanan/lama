import { useEffect, useState } from 'react';
import DragFiles from '../DragFiles';
import TopBar from '../TopBar';
import UploadButtons from '../UploadButtons';
import UploadNotificationBar from '../UploadNotificationBar';
import UploadedFilesList from '../UploadedFilesList';
import './index.css';
import Loader from '../Loader';

const UploadMain = (props) => {
  const { projectId } = props;
  const [filesList, setFilesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const apiUrl = `https://lama-er6k.onrender.com/api/project/files/list`;
      const body = { projectId };
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

        setFilesList(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [isLoading]);

  const EmptyView = () => {
    return (
      <div className="upload-empty-view">
        <h1 className="upload-heading">Upload</h1>
        <UploadButtons filesList={filesList} setFilesList={setFilesList} />
        <p className="or-text">or</p>
        <DragFiles />
      </div>
    );
  };

  const DataView = () => {
    return (
      <div>
        <h1 className="upload-heading">Sample Project</h1>
        <UploadButtons filesList={filesList} setFilesList={setFilesList} />
        <UploadNotificationBar />
        <UploadedFilesList filesList={filesList} setIsLoading={setIsLoading} />
      </div>
    );
  };

  const renderUploadPageView = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return filesList.length > 0 ? <DataView /> : <EmptyView />;
    }
  };

  return <>{renderUploadPageView()}</>;
};

export default UploadMain;

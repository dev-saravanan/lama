import EditFilePopup from '../EditFilePopup';
import './index.css';

const UploadedFilesList = (props) => {
  const { filesList, setIsLoading } = props;

  const deleteFile = async (fileId) => {
    const apiUrl = `https://lama-er6k.onrender.com/api/project/files/delete/${fileId}`;
    const options = {
      method: 'DELETE'
    };

    const response = await fetch(apiUrl, options);
    const data = await response.json();

    setIsLoading(true);
  };

  return (
    <div>
      <table className="data-table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Upload Date</th>
            <th className="table-header">Status</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filesList.map((item) => {
            const deleteThisFile = () => {
              deleteFile(item.id);
            };
            return (
              <tr key={item.id} className="table-row">
                <td className="table-cell">{item.name}</td>
                <td className="table-cell">{item.createdAt}</td>
                <td className="table-cell">Done</td>
                <td className="table-cell">
                  <EditFilePopup fileId={item.id} />
                  <button className="delete-button" onClick={deleteThisFile}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UploadedFilesList;

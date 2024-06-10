import { Link } from 'react-router-dom';
import './index.css';

const ProjectItem = (props) => {
  const { projectDetails } = props;
  const { id, name, createdAt } = projectDetails;
  const colors = ['color1', 'color2', 'color3'];

  function getRandomColor(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  return (
    <li>
      <Link to={`/project/${id}`} className="item-container">
        <div className={`initial-text-container ${getRandomColor(colors)}`}>
          <h1 className="initial-text">{`${name.split(' ')[0][0]}${name.split(' ')[1] ? name.split(' ')[1][0] : ''}`}</h1>
        </div>

        <div className="item-details-container">
          <div className="item-heading-detail">
            <p className="project-card-title">{name}</p>
            <p className="project-desc">4 Episodes</p>
          </div>

          <p className="last-edit-text">Last edited a week ago</p>
        </div>
      </Link>
    </li>
  );
};

export default ProjectItem;

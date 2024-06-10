import './index.css';

import CreateProjectPopup from '../CreateProjectPopup';
import ProjectItem from '../ProjectItem';

const ProjectsList = (props) => {
  const { projectsList, setProjectsList } = props;

  return (
    <div className="project-list-main">
      <div className="top-container">
        <h1 className="project-title">Projects</h1>
        <CreateProjectPopup projectsList={projectsList} setProjectsList={setProjectsList} />
      </div>

      <ul className="project-list-container">
        {projectsList.map((eachProject) => (
          <ProjectItem key={eachProject.id} projectDetails={eachProject} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;

import './index.css';
import homeImg from '../../assets/images/svg/homeImg.svg';
import homeIcon from '../../assets/images/svg/homeIcon.svg';
import settingsIcon from '../../assets/images/svg/settingsIcon.svg';
import bellIcon from '../../assets/images/svg/bellIcon.svg';
import CreateProjectPopup from '../CreateProjectPopup';

const CreateNewProject = (props) => {
  const { projectsList, setProjectsList } = props;

  return (
    <div className="create-new-project-empty">
      <h1 className="create-project-heading">Create a New Project</h1>
      <img className="home-img" src={homeImg} alt="home image" />

      <p className="create-new-project-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, velit quod impedit
        excepturi corrupti officiis praesentium, explicabo amet ipsa eos rerum soluta ut earum
        quaerat ex nulla ea eligendi nobis.
      </p>

      <CreateProjectPopup projectsList={projectsList} setProjectsList={setProjectsList} />
    </div>
  );
};

export default CreateNewProject;

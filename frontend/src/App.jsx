import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import GetStarted from './components/GetStarted';
import ProjectMain from './components/ProjectMain';
import ProjectDetailsMain from './components/ProjectDetailsMain';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<GetStarted />} />
        <Route exact path="/projects" element={<ProjectMain />} />
        <Route exact path="/project/:projectId" element={<ProjectDetailsMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

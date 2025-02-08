import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProject from "./Components/NoProject";
import Sidebar from "./Components/SideBar/Sidebar";
import Project from "./Components/Project/Project";
import './App.css';

function App() {
  const [noProjectSelected, setNoProjectSelected] = useState(true);
  const [projectList, setProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const cancelCreateProject = () => {
    setNoProjectSelected(true);
    setSelectedProject(null);
  }
  const addProject = (project) => {
    setProjectList([...projectList, project]);
    setNoProjectSelected(false);
  }
  const clickAddProject = () => {
    setNoProjectSelected(false);
    setSelectedProject(null);
  }
  const clickProject = (project) => {
    setSelectedProject(project);
    setNoProjectSelected(false);
  }
  return (
    <div>
      <Sidebar clickAddProject={clickAddProject} projectList={projectList} clickProject={clickProject} />
      <div className="leftContainer">
        {noProjectSelected && <NoProject  clickAddProject={clickAddProject} />}
        {(!noProjectSelected && selectedProject === null) && <NewProject cancelCreateProject={cancelCreateProject} addProject={addProject} />}
        {(!noProjectSelected && selectedProject !== null) && <Project project={selectedProject} />}
        </div>
    </div>
  );
}

export default App;

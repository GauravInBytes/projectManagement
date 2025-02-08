import "./Sidebar.css";

const Sidebar = ({ projectList, clickAddProject, clickProject }) => {
  return (
    <div className="sidebar">
      <h2 className="text-xl font-bold text-white-700 my-4">YOUR PROJECTS</h2>
      <button
        onClick={clickAddProject}
        className="px-4 py-2 mt-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add Project
      </button>
      {projectList &&
        projectList.map((project) => (
          <button
            key={project.title}
            onClick={() => clickProject(project)}
            className="w-full mt-2 mb-0 px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
          >
            {project.title}
          </button>
        ))}
    </div>
  );
};

export default Sidebar;

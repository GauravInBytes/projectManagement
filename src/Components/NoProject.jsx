import img from "../assets/no-projects.png";

const NoProject = ({clickAddProject}) => {
  return (
    <div>
      <img width="200px" height="200px" src={img} alt="no-project.png"></img>
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-600 mb-4">
        Select a project or start with a new one
      </p>
      <button onClick={clickAddProject} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
        Create new Project
      </button>
    </div>
  );
};

export default NoProject;

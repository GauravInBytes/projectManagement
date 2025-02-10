const Project = ({ project, DeleteProject }) => {
  return (
    <div className="mt-4">
      <div className="flex justify-start ">
        <span className="text-3xl font-bold text-stone-700 my-4">{project.title}</span>
        <button
          onClick={() => DeleteProject(project)}
          className="ml-96 float-right mx-4 text-stone-800 hover:text-stone-950"
        >
          Delete
        </button>
      </div>
      <div className="my-2">
        <p>{project.dueDate}</p>
      </div>
      <div className="my-2 ">
        <p>{project.description}</p>
      </div>
      <hr className="w-3/4 h-1 bg-gray-500 border-none"/>
    </div>
  );
};

export default Project;


const Task = ({task, ClearTask}) => {
  return (
    <div className="w-3/4 my-2 bg-green-200 p-2 rounded-md">
      <span className="text-lg">{task}</span>
      <button
        onClick={() => ClearTask(task)}
        className="float-right text-stone-800 hover:text-stone-950"
      >
        Clear
      </button>
    </div>
  )
};

export default Task;

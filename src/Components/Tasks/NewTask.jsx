import { useState } from "react";
import Task from "./Task";

const NewTask = ({ selectedProject, addTask, ClearTask }) => {
  const [newTask, setNewTask] = useState("");

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
      <input
        className="p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        onClick={() => {
          addTask(newTask);
          setNewTask("");
        }}
        className="mx-4 text-stone-800 hover:text-stone-950"
      >
        Add Task
      </button>
      {selectedProject.tasks &&
        selectedProject.tasks.map((t, index) => (
          <Task ClearTask={ClearTask} task={t} />
        ))}
    </div>
  );
};

export default NewTask;

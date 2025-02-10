import { useState } from "react";

const NewProject = ({ cancelCreateProject, addProject }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSave = () => {
    addProject({ title, description, dueDate, tasks: [] });
    cancelCreateProject();
  };
  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    cancelCreateProject();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "description") setDescription(value);
    if (name === "dueDate") setDueDate(value);
  };
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-between gap-4 my-4">
        <li>
          <button
            onClick={handleCancel}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>

      <div>
        <p>
          <label
            htmlFor="title"
            className="text-sm font-bold uppercase text-stone-500"
          >
            TITLE
          </label>
          <input
            value={title}
            name="title"
            onChange={handleChange}
            type="text"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>
        <p>
          <label
            htmlFor="description"
            className="text-sm font-bold uppercase text-stone-500"
          >
            DESCRIPTION
          </label>
          <input
            value={description}
            name="description"
            onChange={handleChange}
            type="text"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>
        <p>
          <label
            htmlFor="dueDate"
            className="text-sm font-bold uppercase text-stone-500"
          >
            DUE DATE
          </label>
          <input
            value={dueDate}
            name="dueDate"
            onChange={handleChange}
            type="date"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>
      </div>
    </div>
  );
};

export default NewProject;

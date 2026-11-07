import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask({ addTask }) {
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [due, setDue] = useState("2026-08-28");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      description,
      priority,
      category,
      due,
      status: "Pending",
    };

    addTask(newTask);

    navigate("/tasks");
  };

  return (
    <div className="page">
      <h1>Add Task</h1>

      <form className="task-form" onSubmit={handleSubmit}>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          required
        />

        <label>Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Other">Other</option>
        </select>

        <label>Due Date</label>
        <input
          type="date"
          value={due}
          onChange={(e) => setDue(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
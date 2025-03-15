import { useState } from "react";
import { createTask } from "../api/tasks"; // Import createTask

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask({ title, description });
      setTitle("");
      setDescription("");
      setError(null);
      refreshTasks();
    } catch (error) {
      setError("Failed to create task. Please try again.");
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
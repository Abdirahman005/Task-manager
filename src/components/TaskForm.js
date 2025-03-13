import { useState } from "react";
import axios from "axios";

const TaskForm = ({ refreshTasks }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/tasks", { title, description });
        refreshTasks();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;

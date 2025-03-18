import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
    setFilteredTasks(storedTasks);
  }, []);

  const addTask = () => {
    if (!title.trim() || !description.trim() || !dueDate) {
      alert("Please fill in all fields.");
      return;
    }

    const newTask = {
      title,
      description,
      dueDate,
      status: "Pending",
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTitle("");
    setDescription("");
    setDueDate("");
  };

  const markTaskAsComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: "Completed" } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const filterOverdueTasks = () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    const overdueTasks = tasks.filter(
      (task) => task.status !== "Completed" && task.dueDate < today
    );
    setFilteredTasks(overdueTasks);
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <button className="logout-btn" onClick={() => navigate("/auth")}>
          Logout
        </button>
      </nav>

      <div className="task-manager-header">Task Manager</div>

      <div className="content">
        <h2>Welcome to My Task Management Application!</h2>

        <div className="add-task">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="filter-section">
          <h3>Filter Tasks</h3>
          <button onClick={() => setFilteredTasks(tasks)}>All</button>
          <button
            onClick={() =>
              setFilteredTasks(tasks.filter((task) => task.status === "Completed"))
            }
          >
            Completed
          </button>
          <button
            onClick={() =>
              setFilteredTasks(tasks.filter((task) => task.status === "Pending"))
            }
          >
            Pending
          </button>
          <button onClick={filterOverdueTasks}>Overdue</button>
        </div>
        <h3>Tasks</h3>
        {filteredTasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          <ul className="task-list">
            {filteredTasks.map((task, index) => (
              <li key={index} className="task-item">
                <div className="task-info">
                  <strong>{task.title}</strong>
                  <p>{task.description}</p>
                  <p>Due: {task.dueDate}</p>
                  <p>Status: {task.status}</p>
                </div>
                <div className="task-actions">
                  <button
                    className={`complete-btn ${task.status === "Completed" ? "completed" : ""}`}
                    onClick={() => markTaskAsComplete(index)}
                  >
                    {task.status === "Completed" ? "Completed" : "Complete"}
                  </button>
                  <button className="delete-btn" onClick={() => deleteTask(index)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

import { useState, useEffect } from "react";
import { deleteTask } from "../api/tasks"; // Import deleteTask

const TaskList = ({ tasks, refreshTasks }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      setLoading(true);
      await deleteTask(taskId);
      refreshTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);
      setError("Failed to delete task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Task List</h2>

      {error && <p className="text-red-500">{error}</p>}

      {tasks.length > 0 ? (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">{task.description}</p>
                <p className={`text-xs font-bold mt-1 ${
                  task.status === "Completed" ? "text-green-600" : 
                  task.status === "Pending" ? "text-yellow-600" : 
                  "text-red-600"
                }`}>
                  {task.status}
                </p>
              </div>

              <button
                onClick={() => handleDelete(task.id)}
                disabled={loading}
                className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700 disabled:bg-gray-400"
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tasks found. Start adding some!</p>
      )}
    </div>
  );
};

export default TaskList;

import { useEffect, useState, useContext } from "react";
import { getTasks, createTask, deleteTask } from "../api/tasks";
import AuthContext from "../context/AuthContext";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", description: "" });
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getTasks();
            setTasks(data);
        };
        fetchTasks();
    }, []);

    const handleCreateTask = async (e) => {
        e.preventDefault();
        if (!newTask.title) return;
        
        const createdTask = await createTask(newTask);
        setTasks([...tasks, createdTask]);
        setNewTask({ title: "", description: "" });
    };

    const handleDeleteTask = async (taskId) => {
        await deleteTask(taskId);
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="dashboard-container">
            <h2>Welcome, {user?.name}!</h2>

            {/* Create Task Form */}
            <form onSubmit={handleCreateTask}>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Task Description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                ></textarea>
                <button type="submit">Add Task</button>
            </form>

            {/* Task List */}
            <h3>Your Tasks</h3>
            <ul>
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <li key={task.id}>
                            <strong>{task.title}</strong> - {task.description}
                            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No tasks found. Start adding some!</p>
                )}
            </ul>
        </div>
    );
};

export default Dashboard;

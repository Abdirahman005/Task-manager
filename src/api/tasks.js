import axios from "axios";

// Base URL for your API
const API_URL = "http://localhost:5000/api/tasks";

// Fetch all tasks
export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// Create a new task
export const createTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

// Delete a task by ID
export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${API_URL}/${taskId}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
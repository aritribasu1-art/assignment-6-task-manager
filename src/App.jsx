
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Complete React Assignment",
      priority: "High",
      category: "Study",
      due: "2026-08-28",
      status: "Pending",
    },
    {
      id: 2,
      description: "Prepare project presentation",
      priority: "Medium",
      category: "Work",
      due: "2026-08-28",
      status: "Pending",
    },
    {
      id: 3,
      description: "Read React documentation",
      priority: "Low",
      category: "Study",
      due: "2026-08-28",
      status: "Completed",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: "Completed" }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Dashboard tasks={tasks} />}
        />

        <Route
          path="/tasks"
          element={
            <Tasks
              tasks={tasks}
              completeTask={completeTask}
              deleteTask={deleteTask}
              filter={filter}
              setFilter={setFilter}
            />
          }
        />

        <Route
          path="/add-task"
          element={<AddTask addTask={addTask} />}
        />

        <Route
          path="/tasks/:id"
          element={<TaskDetails tasks={tasks} />}
        />

        <Route
          path="/completed"
          element={<CompletedTasks tasks={tasks} />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

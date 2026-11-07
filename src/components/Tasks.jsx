import { Link } from "react-router-dom";

function Tasks({
  tasks,
  completeTask,
  deleteTask,
  filter,
  setFilter,
}) {
  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.priority === filter);

  return (
    <div className="page">
      <h1>Tasks</h1>

      <div className="filter-section">
        <label>Filter by Priority: </label>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <div className="task-list">
          {filteredTasks.map((task) => (
            <div className="task-card" key={task.id}>
              <h2>{task.description}</h2>

              <p>
                <strong>Priority:</strong> {task.priority}
              </p>

              <p>
                <strong>Category:</strong> {task.category}
              </p>

              <p>
                <strong>Due:</strong> {task.due}
              </p>

              <p>
                <strong>Status:</strong> {task.status}
              </p>

              <div className="task-actions">
                <Link to={`/tasks/${task.id}`}>
                  <button>View Details</button>
                </Link>

                {task.status !== "Completed" && (
                  <button onClick={() => completeTask(task.id)}>
                    Complete
                  </button>
                )}

                <button
                  className="delete-button"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tasks;
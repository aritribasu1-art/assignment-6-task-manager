import { Link } from "react-router-dom";

function CompletedTasks({ tasks }) {
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  );

  return (
    <div className="page">
      <h1>Completed Tasks</h1>

      {completedTasks.length === 0 ? (
        <p>No completed tasks yet.</p>
      ) : (
        <div className="task-list">
          {completedTasks.map((task) => (
            <div className="task-card completed-card" key={task.id}>
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

              <Link to={`/tasks/${task.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CompletedTasks;
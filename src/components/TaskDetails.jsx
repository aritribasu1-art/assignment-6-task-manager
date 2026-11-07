import { Link, useParams } from "react-router-dom";

function TaskDetails({ tasks }) {
  const { id } = useParams();

  const task = tasks.find((task) => task.id.toString() === id);

  if (!task) {
    return (
      <div className="page">
        <h1>Task Not Found</h1>
        <Link to="/tasks">Back to Tasks</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Task Details</h1>

      <div className="details-card">
        <h2>{task.description}</h2>

        <p>
          <strong>Priority:</strong> {task.priority}
        </p>

        <p>
          <strong>Category:</strong> {task.category}
        </p>

        <p>
          <strong>Due Date:</strong> {task.due}
        </p>

        <p>
          <strong>Status:</strong> {task.status}
        </p>

        <Link to="/tasks">
          <button>Back to Tasks</button>
        </Link>
      </div>
    </div>
  );
}

export default TaskDetails;
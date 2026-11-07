function Dashboard({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>{totalTasks}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="dashboard-card">
          <h2>{pendingTasks}</h2>
          <p>Pending Tasks</p>
        </div>

        <div className="dashboard-card">
          <h2>{completedTasks}</h2>
          <p>Completed Tasks</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
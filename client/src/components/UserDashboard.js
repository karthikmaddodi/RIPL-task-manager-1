import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function UserDashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to the User Dashboard</h2>
      <div className="task-overview">
        <h3>Task Overview</h3>
        <Link to="/user-dashboard/task-overview">View My Tasks</Link>
      </div>
    </div>
  );
}

export default UserDashboard;

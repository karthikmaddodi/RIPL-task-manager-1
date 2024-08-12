import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to="/admin-dashboard/add-user" className="sidebar-link">Add User</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/modify-user" className="sidebar-link">Modify User</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/delete-user" className="sidebar-link">Delete User</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/add-branch" className="sidebar-link">Add Branch</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/modify-branch" className="sidebar-link">Modify Branch</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/delete-branch" className="sidebar-link">Delete Branch</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/add-department" className="sidebar-link">Add Department</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/modify-department" className="sidebar-link">Modify Department</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/delete-department" className="sidebar-link">Delete Department</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/add-task" className="sidebar-link">Add Task</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/modify-task" className="sidebar-link">Modify Task</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/delete-task" className="sidebar-link">Delete Task</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/task-listing" className="sidebar-link">Task Listing</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h2>Welcome to the Admin Dashboard</h2>
        {/* Content for the dashboard */}
      </main>
    </div>
  );
}

export default AdminDashboard;

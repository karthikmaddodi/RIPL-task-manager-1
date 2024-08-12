import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import AddUser from './components/AddUser';
import ModifyUser from './components/ModifyUser';
import DeleteUser from './components/DeleteUser';
import AddBranch from './components/AddBranch';
import ModifyBranch from './components/ModifyBranch';
import DeleteBranch from './components/DeleteBranch';
import AddDepartment from './components/AddDepartment';
import ModifyDepartment from './components/ModifyDepartment';
import DeleteDepartment from './components/DeleteDepartment';
import AddTask from './components/AddTask';
import ModifyTask from './components/ModifyTask';
import DeleteTask from './components/DeleteTask';
import TaskListing from './components/TaskListing';
import TaskOverview from './components/TaskOverview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard/add-user" element={<AddUser />} />
        <Route path="/admin-dashboard/modify-user" element={<ModifyUser />} />
        <Route path="/admin-dashboard/delete-user" element={<DeleteUser />} />
        <Route path="/admin-dashboard/add-branch" element={<AddBranch />} />
        <Route path="/admin-dashboard/modify-branch" element={<ModifyBranch />} />
        <Route path="/admin-dashboard/delete-branch" element={<DeleteBranch />} />
        <Route path="/admin-dashboard/add-department" element={<AddDepartment />} />
        <Route path="/admin-dashboard/modify-department" element={<ModifyDepartment />} />
        <Route path="/admin-dashboard/delete-department" element={<DeleteDepartment />} />
        <Route path="/admin-dashboard/add-task" element={<AddTask />} />
        <Route path="/admin-dashboard/modify-task" element={<ModifyTask />} />
        <Route path="/admin-dashboard/delete-task" element={<DeleteTask />} />
        <Route path="/admin-dashboard/task-listing" element={<TaskListing />} />
        <Route path="/user-dashboard/task-overview" element={<TaskOverview />} />
      </Routes>
    </Router>
  );
}

export default App;

// components/BranchManagement.js
import React, { useState, useEffect } from 'react';

function BranchManagement() {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    // Fetch branches from the server
    fetch('/admin/branches', {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => response.json())
      .then(data => setBranches(data));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Manage Branches</h2>
      <table>
        <thead>
          <tr>
            <th>Branch Name</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {branches.map(branch => (
            <tr key={branch.id}>
              <td>{branch.name}</td>
              <td>{branch.location}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BranchManagement;

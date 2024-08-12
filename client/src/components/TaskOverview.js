import React from 'react';
import './styles.css';

function TaskOverview() {
  return (
    <div className="container">
      <h2>Task Overview</h2>
      {/* Display tasks assigned to the user */}
      <p>List of tasks assigned to you:</p>
      {/* Example of task listing */}
      <ul>
        <li>Task 1: Description</li>
        <li>Task 2: Description</li>
      </ul>
    </div>
  );
}

export default TaskOverview;

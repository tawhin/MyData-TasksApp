import * as React from 'react';
//const axios = require('axios');

import TaskForm from './TaskForm';

const CreateTask = (props) => {
  return (
    <div className="wrapper">
      <h2>Add New Task</h2>
      <TaskForm
        task={{
          description: '',
          priority: '',
          date: '',
        }}
        refreshTasks={props.setRefresh}
      />
    </div>
  );
};
export default CreateTask;

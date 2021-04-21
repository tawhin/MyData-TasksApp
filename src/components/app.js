import React, { useState } from 'react';

import CreateTask from './CreateTask';
import TaskList from './TaskList';

const TaskManager = () => {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh(refresh + 1);
  };

  return (
    <div>
      <h1>My Tasks Manager</h1>
      <br />
      <CreateTask setRefresh={triggerRefresh} />
      <TaskList refresh={refresh} setRefresh={triggerRefresh} />
    </div>
  );
};

export default TaskManager;

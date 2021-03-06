import React, { useState } from 'react';

import CreateTask from './CreateTask';
import TaskList from './TaskList';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh(refresh + 1);
  };

  return (
    <div>
      <h1>My Tasks Manager</h1>
      <CreateTask setRefresh={triggerRefresh} />
      <TaskList refresh={refresh} setRefresh={triggerRefresh} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

const axios = require('axios');

import TaskForm from './TaskForm';
import config from '../server/config';

const TaskList = (props) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    console.log('loading tasks');
    try {
      const resp = await axios.get(`http://${config.dataServer}/dataset`);
      console.log(resp);
      setTasks(Object.values(resp.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Load tasks after the first render has been mounted, or if the refresh property changes
    loadTasks();
  }, [props.refresh, setTasks]); // Pass the setTasks variable here prevents the useEffects from when setTasks is called.

  return (
    <div className="wrapper">
      <h2>Existing Tasks</h2>
      {tasks.map((existingTask) => (
        <TaskForm
          key={existingTask.id}
          task={{ ...existingTask }}
          refreshTasks={props.setRefresh}
        />
      ))}
    </div>
  );
};

export default TaskList;

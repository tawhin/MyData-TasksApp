import React, { useState, useEffect } from 'react';

const axios = require('axios');

import TaskForm from './TaskForm';
import config from '../server/config';

/**
 * React component to render a list of existing task objects within collection of TaskForm components.
 * @param {*} props - Set of properties provided to the component.
 * @returns JSX
 */
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

  /**
   * Use the react effect to render a list when the component is first mounted and when the task list is dynamically
   * changed.
   */
  useEffect(() => {
    loadTasks();

    /* Adding setTasks a dependent ensures that the tasks are loaded when the setter is first returned by useState.
     * This ensures we have a list of existing tasks when rendering for the first time (as the setter is created only once).
     * We then monitor the refresh property to use this effect dynamically as tasks are added or removed within the TaskForm
     * component.
     */
  }, [props.refresh, setTasks]);

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

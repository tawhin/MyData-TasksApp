import * as React from 'react';
const axios = require('axios');

import Task from './task';

const TaskList = (props) => {
  const [tasks, setTasks] = React.useState([]);

  const loadTasks = async () => {
    try {
      const resp = await axios.get(`http://localhost:4242/dataset`);
      console.log(resp);
      setTasks(Object.values(resp.data));
    } catch (err) {
      console.log(err);
    }
    //<button onClick={loadTasks}>Load</button>
  };

  React.useEffect(() => {
    // Load tasks after the first render has been mounted.
    loadTasks();
  }, [props.refresh, setTasks]); // Pass the setTasks variable here prevents the useEffects from when setTasks is called.

  return (
    <div>
      <h2>Existing Tasks</h2>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;

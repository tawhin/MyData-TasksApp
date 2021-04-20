import * as React from 'react';
const axios = require('axios');

const Task = (props) => {
  const task = props;
  return (
    <div>
      <div>{task.description}</div>
      <div>{task.priority}</div>
      <div>{task.date}</div>
    </div>
  );
};

const TaskList = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

const App = (props) => {
  const [tasks, setTasks] = React.useState([]);

  const loadTasks = async () => {
    try {
      const resp = await axios.get(`http://localhost:4242/dataset`);
      console.log(resp);
      setTasks(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>{props.initialData.appName}</h1>
      This is a simple task manager application.
      <br />
      <button onClick={loadTasks}>Load</button>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;

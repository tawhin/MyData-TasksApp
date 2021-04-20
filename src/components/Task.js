import * as React from 'react';

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

export default Task;

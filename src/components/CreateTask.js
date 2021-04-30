import * as React from 'react';

import TaskForm from './TaskForm';

/**
 * React component to render a clean TaskForm used to create a new task.
 * @param {*} props - Set of properties provided to the component.
 * @returns JSX
 */
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

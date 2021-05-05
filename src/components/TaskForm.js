import React, { useState } from 'react';
const axios = require('axios');

/**
 * React component to render task objects within a form capable of creating, updating or deleting tasks.
 * @param {*} props - Set of properties provided to the component.
 * @returns JSX
 */
const TaskForm = (props) => {
  const [desc, setDesc] = useState(props.task.description);
  const [priority, setPriority] = useState(props.task.priority);
  const [date, setDate] = useState(props.task.date);
  const [submitType, setSubmitType] = useState();

  const axiosInstance = axios.create({
    baseURL: `${process.env.DATA_SERVER_HOST}/${process.env.DB_NAME}`,
    // Added to allow code to be executed in web React Sandbox environments, useful when leaning the framework.
    // Allows the website to interface with our local data service instance.
    headers: { 'Access-Control-Allow-Origin': '*' },
  });

  /**
   * Function to action the form submit event and perform the required CRUD operation to
   * the data service backend.
   * @param {*} event - Form submit event.
   */
  const handleSubmit = async (event) => {
    try {
      // Override the default form submit event.
      event.preventDefault();

      // Perform the required AJAX operation depending on the submit action type.
      switch (submitType) {
        case 'create':
          console.log('POSTING new task');
          await axiosInstance.post('/data', getTask());
          clearTask();
          // Refresh the task list
          props.refreshTasks();
          break;
        case 'update':
          console.log(`PUT task id: ${props.task._id}`);
          await axiosInstance.put(`/data/${props.task._id}`, getTask());
          break;
        case 'delete':
          console.log(`DELETE task id: ${props.task._id}`);
          await axiosInstance.delete(`/data/${props.task._id}`);
          props.refreshTasks();
          break;
        default:
          console.log('Unknown form submit type');
          break;
      }
    } catch (err) {
      // TODO - Provide visual feedback of the network error to the user.
      console.log(err);
    }
  };

  /**
   * Create a task object from the react state variables.
   * @returns {Object} task object
   */
  const getTask = () => {
    return { description: desc, priority: priority, date: date };
  };

  /**
   * Reset the react state variable to trigger a render.
   */
  const clearTask = () => {
    setDesc('');
    setPriority('');
    setDate('');
  };

  /**
   * Determines whether the form contains an existing task or an empty task.
   */
  const taskExists = props.task._id !== undefined;

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-wrap">
        <label>
          <p>Description:</p>
          <textarea
            type="text"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            required
          />
        </label>
      </div>
      <div className="field-row">
        <label>
          <p>Priority:</p>
          <select
            className="item"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
            required
          >
            <option disabled="disabled" value="">
              select priority
            </option>
            <option value="high">HIGH</option>
            <option value="medium">MEDIUM</option>
            <option value="low">LOW</option>
          </select>
        </label>
        <label>
          <p>Date:</p>
          <input
            className="item"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </label>
      </div>

      {taskExists ? (
        <div className="field-row">
          <button className="button" onClick={() => setSubmitType('update')}>
            Update
          </button>
          <button className="button" onClick={() => setSubmitType('delete')}>
            Delete
          </button>
        </div>
      ) : (
        <div className="field-row">
          <button className="button" onClick={() => setSubmitType('create')}>
            Create
          </button>
        </div>
      )}
    </form>
  );
};

export default TaskForm;

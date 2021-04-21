import React, { useState } from 'react';

const axios = require('axios');

import config from '../server/config';

const TaskForm = (props) => {
  const [desc, setDesc] = useState(props.task.description);
  const [priority, setPriority] = useState(props.task.priority);
  const [date, setDate] = useState(props.task.date);
  const [submitType, setSubmitType] = useState();
  const axiosInstance = axios.create({
    baseURL: `http://${config.dataServer}`,
    headers: { 'Access-Control-Allow-Origin': '*' },
  });

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      switch (submitType) {
        case 'create':
          console.log('POSTING new task');
          await axiosInstance.post('/data', getTask());
          clearTask();
          // Refresh the task list
          props.refreshTasks();
          break;
        case 'update':
          console.log(`PUT task id: ${props.task.id}`);
          await axiosInstance.put(`/data/${props.task.id}`, getTask());
          break;
        case 'delete':
          console.log(`DELETE task id: ${props.task.id}`);
          await axiosInstance.delete(`/data/${props.task.id}`);
          props.refreshTasks();
          break;
        default:
          console.log('Unknown form submit type');
          break;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getTask = () => {
    return { description: desc, priority: priority, date: date };
  };

  const clearTask = () => {
    setDesc('');
    setPriority('');
    setDate('');
  };

  const taskExists = props.task.id !== undefined;

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

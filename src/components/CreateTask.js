import * as React from 'react';
const axios = require('axios');

const CreateTask = (props) => {
  const [desc, setDesc] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const resp = await axios.post(`http://localhost:4242/data`, getTask());
      console.log(resp);
      clearTask();
      props.setRefresh(true);
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

  return (
    <div className="wrapper">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Description:</p>
            <input
              type="text"
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
              required
            />
          </label>
          <br />
          <label>
            <p>Priority:</p>
            <input
              type="text"
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
              required
            />
          </label>
          <br />
          <label>
            <p>Date:</p>
            <input
              type="text"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateTask;

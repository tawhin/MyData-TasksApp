# Task Manager Application

A simple application intended to leverage a back-end server hosting a generic CRUD API for data objects. The application offers the ability to create, update and delete a list of tasks, each task containing fields to describe the task, set it's priority and due date.

The project structure is based upon a template provided by https://jscomplete.com, this helps to construct a dev environment and facilities all React Javascript rendering server side, as opposed to within the browser. All code developed for this application exist within the src/components folder.

The primary purpose of the application development is to get hands on with the React framework, gaining familiarity with:

- JSX Syntax
- React state and event engine
- AJAX Queries with back-end service

```
npm i
```

```
npm start
```

Server will run on port 4247 by default (defined in src/server/config.js).
The back-end data server is configured to be on localhost:4242 (defined in src/server/config.js)

To interact with the application, load http://localhost:4247 in your browser.

# Task Manager Application

A simple application intended to leverage a back-end server hosting a generic CRUD API for data objects. The application offers the ability to create, update and delete a list of tasks, each task containing fields to describe the task, set it's priority and due date.

The project structure is based upon a template provided by https://jscomplete.com, this helps to construct a dev environment and facilities all React Javascript rendering server side, as opposed to within the browser. All code developed for this application exist within the src/components folder.

The primary purpose of the application development is to get hands on with the React framework, gaining familiarity with:

- JSX Syntax
- React state and event engine
- AJAX Queries with back-end service

## Project

Developed using React ^16.13.1

## Configuration

The application loads configuration from the following environment variables set in the host:

- HOST: _Set the hostname for the service_
  - Options: `FQDN` or `localhost`
- PORT: _Set the listening port for the service_
- DATA_SERVER_HOST: _URL for MyDataServer host_

</br>
The following module wraps the environment variable settings and provides a default value in the absence of specified environment variables:

`/src/server/config.js`</br>
Defaults:

- HOST: `localhost`
- PORT: 4242
- DATA_SERVER_HOST: `http://localhost:4242`

## Install and Run

`npm i`

`npm run dev:start` _Uses nodemon to run babel-node to compile REACT UI JSX, run the backend rendering service, and run webpack to bundle javascript_

`npm run prod:build` _Uses webpack to build bundled production backend rendering service and build client side bundle javascript_

`npm run prod:start` _Performs a prod:build and then runs node against the bundled backend rendering service javascript_

Server will run on port 4247 by default (defined in src/server/config.js).
The back-end data server is configured to be on localhost:4242 (defined in src/server/config.js)

To interact with the application, load http://localhost:4247 in your browser.

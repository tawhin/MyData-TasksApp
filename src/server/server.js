import express from 'express';
import config from './config';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);
  
  res.send(`
    <html>
      <head>
        <title>My-Tasks</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

server.listen(config.port, () => {
  console.info(`Running on ${config.port}...`);
});

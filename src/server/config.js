if (!process.env.DATA_SERVER_HOST) {
  process.env.DATA_SERVER_HOST = 'http://localhost:4242';
  console.log(
    `Setting default data server host ${process.env.DATA_SERVER_HOST}`
  );
}

if (!process.env.DB_NAME) {
  process.env.DB_NAME = 'tasks';
  console.log(`Setting default database name ${process.env.DB_NAME}`);
}

if (!process.env.PORT) {
  process.env.PORT = '4247';
  console.log(`Setting default port ${process.env.PORT}`);
}

module.exports = {
  dataServer: process.env.DATA_SERVER_HOST,
  dbName: process.env.DB_NAME,
  port: process.env.PORT,
};

const path = require('path');
const express = require('express');
const serveIndex = require('serve-index');

const HOST = 'localhost';
const PORT = 8000;
const URL = `http://${HOST}:${PORT}`;

// const publicFolder = path.join(__dirname, 'code');
const app = express();

// app.set('view engine', 'pug');
// app.locals.pretty = true;

app.use(express.static(path.join(__dirname, 'public')));
app.use(serveIndex(path.join(__dirname, 'public'), { icons: true }));
// app.use('assets', express.static(path.join(__dirname, 'assets')));

// app.get('/', (req, res) => {
//   res.render('index');
// });

app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${URL}`);
});

const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();
const router = express.Router();
const converter = require('./converter.js');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/client/dist')));

app.use('/', router);

router
  .route('/api')
  .post(converter);

const port = 3000;
app.listen(port, () => {console.log(`server running on port ${port}`)});




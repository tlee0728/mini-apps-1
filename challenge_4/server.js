const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();
const router = express.Router();
const controller = require('./controller.js');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/dist')));
app.use('/api', router);

router
  .route('/')
  .put(controller.put)
  .post(controller.post);

const port = 3001;
app.listen(port, () => {console.log(`server is running on port ${port}`)});


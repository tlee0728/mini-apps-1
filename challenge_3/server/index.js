const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();
const router = require('./router.js');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

const port = 3000;
app.listen(port, () => {console.log(`Server is running on port ${port}`)})

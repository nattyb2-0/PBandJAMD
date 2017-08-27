'use strict';

const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const commentRoute = require('./routes/api/comment.js');
const topicRoute = require('./routes/api/topic.js');
const userRoute = require('./routes/api/user.js');
const authRoute = require('./routes/api/auth.js');

const app = express();
const PORT = process.argv[2] || process.env.port || 5000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/api/comment', commentRoute);
app.use('/api/topic', topicRoute);
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

app.listen(PORT, () => console.log('server here! listening on', PORT));

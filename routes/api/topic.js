const express = require('express');
const topicRoute = express.Router();
const { getAllTopics, addTopic, editTopic, deleteTopic } = require('../../models/topics.js');
const sendJSONresp = (req, res) => res.json(res.topics || []);

topicRoute.route('/')
   .get(getAllTopics, sendJSONresp)
   .post(addTopic, sendJSONresp);

topicRoute.route('/:id')
   .put(editTopic, sendJSONresp)
   .delete(deleteTopic, sendJSONresp);

module.exports = topicRoute;

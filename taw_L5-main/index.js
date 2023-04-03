/*const http = require('http');

const server = http.createServer();
server.on('connection', (socket => {
   console.log('new connection');
}))

server.listen(3000);*/



const express = require('express');
const questions = require('./questions').questions;
const app = express();
app.get('/api/questions', (request, response) => {
    response.send(questions);
 });

app.listen(3000, function () {
 console.info(`Server is running at port 3000`);
});
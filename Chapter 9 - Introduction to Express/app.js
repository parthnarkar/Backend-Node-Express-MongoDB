//Core Module
const http = require('http');

//External Module
const express = require('express');

//Local Module
const requestHandler = require('./user');

const app = express();

const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});
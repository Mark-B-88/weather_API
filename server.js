// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/

// configure express to use body-parser as middle-ware.
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

app.get('/projectData', (req, res) => {
    res.status(200).send(projectData);
});

app.post('/projectData', (req, res) => {
    // save data in a variable
    projectData = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    };
    res.status(200).send({
        sucess: true,
        message: `The data was saved succesfully!`,
        data: projectData
    });
})

// Setup Server
const port = 3000;
const server = http.createServer(app);

server.listen(port, () => console.log(`Server is running on port : ${port}`));
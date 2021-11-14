// Setup empty JS object to act as endpoint for all routes
projectData = {
    name : 'john doe'
};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/

//  Configure Express to use body-parser as middle-ware.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = process.env.port || 3000;

app.listen(port, () => {
    try {
        console.log(`Server is running on port : ${port}`);
    } catch (error) {
        console.log(error);
    }
});

// Routes

app.get('/all', (req,res) => {
    res.send(projectData);
});

app.post('/all', (req,res) => {
    res.send(projectData);
});
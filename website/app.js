/* Global Variables */
const apiKey = `2366e92eb251669bc8d3ad22e6fa4945
&units=imperial`;

// DOM Variables
const zipCode = document.getElementById('zip');
const feelings = document.getElementById('feelings');
const btnSubmit = document.getElementById('generate');

// Callback Functions
const generateData = () => {
    // this is for testing only, replace this later for actual use
    console.log('button clicked!');
};
generateData();

// Event Listeners
btnSubmit.addEventListener('click', generateData);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
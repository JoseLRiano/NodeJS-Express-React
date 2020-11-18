const express = require('express');
const { send } = require('process');
const request = require('request');
const app = express();
const port = 8080;
require('dotenv').config();

console.log(process.env);

const key = process.env.API_KEY;
const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=';


app.get('/home', (req, res) => {
    request.get(`${nasaUrl + key}`, (err , response, body) => {
        !err && response.statusCode === 200 ? res.send(body) :
        console.log(err);
    })
});

app.get('/more', (req, res) => {
    
});


app.listen(port, () => {
    console.log(`Future MERN app listening on port: ${port}!`);
});


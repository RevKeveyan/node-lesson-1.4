require('dotenv').config(); // verevy dnenq vor ashxti

const express = require('express');

const app = express();
const {PORT, HOST} = require('./constants');
const {getUsers, getUser} = require('./controllers/UserController')


app.get('/users', getUsers);
app.get('/users/:id', getUser);

app.listen(PORT, ()=>{
    console.log(`http://${HOST}${PORT}`);
})
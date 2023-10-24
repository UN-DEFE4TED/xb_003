const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let cookieParser = require('cookie-parser')


app.use(express.static('./public'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))

const ffrouter = require('./router/router')

// app.use('/', ffrouter);

app.get('/', (req, res)=>{
    res.send('hello there')
})



module.exports = app;
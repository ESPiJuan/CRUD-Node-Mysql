const express = require('express');
var morgan = require('morgan')
const app = express();
const port = process.env.PORT || 30000;
// Config
app.use(express.json())
app.use(morgan('tiny'))
//Routes
app.use('/links',require('./routes/links'));
app.listen(port, ()=>{
    console.log("Online in port " + port )
})
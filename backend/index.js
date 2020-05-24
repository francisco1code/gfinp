const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

const port = 3001;

require('./controlles/auth')(app);

//app.use(express.static(__dirname + '/frontend'))

app.listen(port);
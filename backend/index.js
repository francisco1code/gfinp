const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

const port = 3001;

app.get('/', function (req,res){
    res.send('Hello wolrd kkkk ');
});

const rotas = require('./rotas');

app.use('/api', rotas)

app.listen(port);
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Levantando un servidor con Express en el puerto ${port}`));

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/registro', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

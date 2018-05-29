const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.listen(port);

app.get('/', function (req, res) {
    res.render('index.html');
})

console.log('imooc started on ' + port)
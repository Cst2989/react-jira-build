var express = require('express');
var compression = require('compression');

var app = express();

var oneDay = 8640000000;

app.use(compression());

app.use(express.static(__dirname + '/public', {maxAge: oneDay}));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 5003)

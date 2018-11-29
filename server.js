var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var ajax = require('./routes/ajax');

app.use(express.static('.'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use('/', routes);
app.post('/ajax', ajax);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(3000, function () {
  console.log('servo app listening on port 3000');
});
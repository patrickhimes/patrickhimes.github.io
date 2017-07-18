var express = require('express');
var path = require('path');
//var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
//var _ = require('lodash');

var port = 3009;
var app = express();

//View Engine
// we're going to use Angular

//set Static folder
app.use(express.static(path.join(__dirname, '/')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
//Add Middleware
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
//app.use(methodOverride('X-HTTP-Method-Override'));

//app.use('/', index);

app.listen(port, function(){
    console.log('Server started on port ' + port);
});
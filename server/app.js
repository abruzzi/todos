
/**
 * Module dependencies.
 */

var express = require('express');
var todo = require('./routes/todo');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 12306);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/', todo.create);
app.get('/:id(\\d+)', todo.getById);
app.delete('/:id(\\d+)', todo.delete);
app.put('/:id(\\d+)', todo.update);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

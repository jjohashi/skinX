
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//route
var index = require('./routes/index');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Example route
// app.get('/users', user.list);
app.get('/', index.view);
app.get('/login',index.viewLogin);
app.get('/home',index.viewHome);
app.get('/education',index.viewEducation);
app.get('/quiz', index.viewQuiz);
app.get('/profile', index.viewProfile);
app.get('/articles/:id',index.viewArticles);
app.get('/results/:resid',index.viewResults);
app.post('/saveUser', index.saveUser);
app.post('/saveResult', index.saveResult);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

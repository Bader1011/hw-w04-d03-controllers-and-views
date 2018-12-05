var express = require('express'); 

var mustache = require('mustache-express');

var app = express();

var port = 3000;

var exmpController = require('./controllers/birdsCon')

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.get('/', function(request, response){
  response.send('This is my homepage for angry birds.')
})
app.use('/test' ,  exmpController )
 
app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
  })
//Install express server
const express = require('express');
const path = require('path');

const url = require('url');
const proxy = require('express-http-proxy');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/dinner-app-angular'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/dinner-app-angular/src/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


// New hostname+path as specified by question:
const apiProxy = proxy('https://cryptic-bastion-81914.herokuapp.com', {
  forwardPath: req => url.parse(req.baseUrl).path
});

app.use('/api/*', apiProxy);

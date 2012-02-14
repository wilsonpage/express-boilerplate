/**
 * Module Dependencies
 */

var 

express = require('express'),
app = module.exports = express.createServer();


// store app root
app.root = __dirname;

// Server Config
require('./config/express.config')(app);

// DB Config
require('./config/mongo.config')();

// listen on port 
app.listen(3000);

// log on boot
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
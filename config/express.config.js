// Module Dependencies
var express = require('express');



module.exports = function(app){

  //var SETTINGS = require('./settings').init(app);



  // All
  app.configure(function(){

    // set views dir
    app.set('views', app.root + '/views');

    // set template language
    app.set('view engine', 'ejs');

    // body parser deals with http requests that
    // hold form body content (POST, PUT)
    app.use(express.bodyParser());

    app.use(express.methodOverride());

    // use cookie parser
    app.use(express.cookieParser());

    // setup LESS to compile all css requests
    app.use('/static/css', express.compiler({ src: app.root + '/static/css', enable: ['less'] }));

    // direct favicon requests to correct place
    app.use(express.favicon(app.root + '/static/favicon.ico'));

    // expose static content
    app.use('/static', express['static'](app.root + '/static'));

    // expose templates to the client
    app.use('/templates', express['static'](app.root + '/views'));

    // load the routes specified in routes.js
    require('../routes')(app);

    // use the express router
    app.use(app.router);
  });



  // Development Config
  app.configure('development', function(){

    // use logger
    app.use(express.logger('":method :url" :status'));

    // log error stack in 'development'
    app.use( require('../libs/errorHandler').serverError({logger: true}) );
  });



  // Production Config
  app.configure('production', function(){

    // don't log error stack in 'production'
    app.use( require('../libs/errorHandler').serverError() );
  });



  // 404 Route (last route in stack)
  app.use( require('../libs/errorHandler').fileNotFound() );
};
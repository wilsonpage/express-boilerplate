


/**
 * 'FileNotFound'
 * 
 * @param  {Object} options [description]
 * @return {Function} The middleware function is returned
 */
exports.fileNotFound = function(options){


  return function(req, res, next){
    
    // set 404 status code
    res.statusCode = 404;

    // send plain text response (upgrade to html at some point)
    res.send('404 - Not found. The end of the stack was reached without matching a route');
  };
};




/**
 * 'ServerError'
 * 
 * This provides an end route for errors when next(new Error('message'));
 * is fired. It will always return JSON. Usually HTML is not required for 
 * 500 errors. Only 404s. If we need a pretty html response the 'Accept' request
 * header will need to be tested (like the connect.errorHandler middleware does)
 * to see is the request is for a page load or for JSON data (ajax).
 * 
 * @param  {Object} options [description]
 * @return {Function} The middleware function is returned
 */
exports.serverError = function(options){
  options = options || {};

  // by returning the funtion we are able to pass in
  // params such as 'options' to the middleware, v. clever!

  // [Defaults] here we are allowing alternative names
  consoleLog = options.logger || options.consoleLog;

  return function(err, req, res, next){
    
    // log the stack to the terminal
    if(consoleLog) console.error(err.stack);

    // set status code to 500
    res.statusCode = 500;

    // send json as response
    res.send( {error: err.message} );
  };
};
module.exports = function(app){


	/**
	 * Module Dependencies
	 */



	/**
	 * Route Middleware
	 * 
	 * Here we get any route middleware that may be required
	 * for the routes below.
	 */




	/********************************
	 ** ROUTES
	 *******************************/


	// the index homepage
	app.get('/', require('./modules/pages/homepage'));

};
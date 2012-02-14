

module.exports = function(req, res, next){

	var 

	// set the page name
	page = 'homepage';


	// here we pass js vars that we want to expose
	// to the client.
	res.expose({ page: page }, 'server');

	// render the page
	res.render(page, {
		locals: {
			page: page
		}
	});
};
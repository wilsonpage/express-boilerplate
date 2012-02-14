module.exports = {
	
	baseUrl: {
		development: '.example.dev'
	},

	cookie: {
		name: 'example',

		// cookie encrytion key
		key: 'y34hBuddyL1ghtW3ightB4by',

		options: {
			domain: '.example.dev',
			path:'/',  
			maxAge: 900000,
			httpOnly: true
		}		
	}
};

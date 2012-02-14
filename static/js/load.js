/**
 * load.js
 * 
 * Here we define all the js modules we require for the whole site.
 * The module loops over each and returns a nice namespaced object containing
 * all modules' public functions. We use thus returned object in main.js to init the 
 * correct module for the page we are on.
 */

define([
  'modules/home',
  'modules/app'
], function(){
	
	var 

	modules = arguments,

	// cache length
	numModules = arguments.length,

	// to store all module contents
	appModules = {},

	module;

	// loop over each module
	for(var i=0; i < numModules; i++){
		
		// cache current module
		module = modules[i];

		// use the module's title attribute to assign it a 
		// namespaced position inside appModules object
		appModules[module.title] = module;
	}

	// return the nice namespaced object
	// for main.js to use
	return appModules;
});
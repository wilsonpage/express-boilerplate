
require.config({
    paths: {
        jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        Underscore: 'libs/underscore/underscore',
        Backbone: 'libs/backbone/backbone',
        text: 'libs/require/text',
        order: 'libs/require/order'
    }
});


require([
  // Load our app module and pass it to our definition function
  'load',

  // Some plugins have to be loaded in order due to there non AMD compliance
  // Because these scripts are not "modules" they do not pass any values to the definition function below
  'order!libs/underscore/underscore-min',
  'order!libs/backbone/backbone-min'
], function(Load){

    // init the module associated with this page
    Load[server.page].init();
});


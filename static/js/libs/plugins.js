
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c;}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


(function($){
	var focus = function(e){
		var field = $(this);
		
		if(e.data.label==$(this).val()){//if the value in this field is the same as it's label
			field
			.removeClass('blurred')
			.addClass('focused')
			.val("")//remove the class 'blurred' and clear the field
			.parent('.chunkyField')
			.removeClass('blurred')
			.addClass('focused');
		}
	};
	//=========================================//
	var blur = function(e){
		var field = $(this);
		if(field.val()==""){
          	field
          	.removeClass('focused')
          	.addClass('blurred')
          	.val(e.data.label)
          	.parent('.chunkyField')
          	.removeClass('focused')
			.addClass('blurred');
        }
	};
	//=========================================//
  	$.fn.st = function(reset){
	    return this.each(function(){
	    	var field = $(this),
	    		label = field.data('st');

	    	if(!field.is('input') && !field.is('textarea') && !field.is('div')){return;}//if this isn't a div (contentedittable) or an input field, forget about it
	    	field.bind('focus.st',{label:label},focus);
	    	field.bind('blur.st',{label:label},blur);		    	
	    	
	    	if(field.val()=="" || field.val()==label || reset){//if the field is empty or it is to be reset, add class & insert label
	    		field
	    		.addClass('blurred')
	    		.val(label)
	    		.parent('.chunkyField')
				.addClass('blurred');
	    	}

	    });
	};
})(jQuery);


/**
 * jQuery scrollWindow plugin
 */
(function( $ ){
  $.scrollWindow = function(px, cb){  
	var px	= px || 0;
		win = ($.browser.webkit) ? $('body') : $('html');
		win.animate({scrollTop:px}, cb);	
  };
})( jQuery );





/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * https://github.com/carhartl/jquery-cookie
 *
 */
(function($){
	$.cookie = function (key, value, options) {
	
	    // key and at least value given, set cookie...
	    if (arguments.length > 1 && String(value) !== "[object Object]") {
	        options = jQuery.extend({}, options);
	
	        if (value === null || value === undefined) {
	            options.expires = -1;
	        }
	
	        if (typeof options.expires === 'number') {
	            var days = options.expires, t = options.expires = new Date();
	            t.setDate(t.getDate() + days);
	        }
	
	        value = String(value);
	
	        return (document.cookie = [
	            encodeURIComponent(key), '=',
	            options.raw ? value : encodeURIComponent(value),
	            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
	            options.path ? '; path=' + options.path : '',
	            options.domain ? '; domain=' + options.domain : '',
	            options.secure ? '; secure' : ''
	        ].join(''));
	    }
	
	    // key and possibly options given, get cookie...
	    options = value || {};
	    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
	    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
	};
})(jQuery);



/**
 * Caching $.getScript() 
 *
 * Replaces origional jquery.getScript() with a version that caches script files
 */
(function($){
	$.getScript = function(url, callback, cache){
		$.ajax({
          type: "GET",
          url: url,
          success: callback,
          dataType: "script",
          cache: cache
		});
	};
})(jQuery);
// Module dependencies
var http  = require('http'),
  fs    = require('fs'),
  util  = require('util'),
  path  = require('path'),
  url   = require('url');





/**
 *  AsyncLoop
 *
 *  Usage:
 *  fn.asyncLoop({
 *    length: $numberOfLoops,
 *    loopFunction: $functionToPerform,
 *    callback: $functionWhenComplete
 *  })
 *
 */
exports.asyncLoop = function(o){
	var i=-1;
	var loop = function(){
		i++;
		if(i==o.length){o.complete(); return;}
		o.loopFunction(loop, i);
	};
	loop();//init
};


exports.toTitleCase = function(str){
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};


/**
 * Escpaes special character in a string for use in
 * a regex.
 *
 * @param  {string} str
 * @return {string}
 */
exports.escapeRegExp = function(str) {
	return str.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};


/**
 * @description: getImg() is a function used to
 * fetch and save an image from an eternal source.
 */
fn.getImg = function(o, cb){
  var port    = o.port || 80,
	img_url = url.parse(o.url);

  var options = {
	host: img_url.hostname,
	port: port,
	path: img_url.pathname
  };

  http.get(options, function(res) {
	console.log("Got response: " + res.statusCode);
	res.setEncoding('binary');
	var imagedata = '';
	res.on('data', function(chunk){
	  imagedata+= chunk;
	});
	res.on('end', function(){
	  fs.writeFile(o.dest, imagedata, 'binary', function(){
		o.success(o.dest);//callback
	  });
	});
  }).on('error', function(e) {
	console.log("Got error: " + e.message);
  });
};






/**
 * MoveFile
 */
fn.moveFile = function(params){
  var is = fs.createReadStream(params.src);
  var os = fs.createWriteStream(params.dest);
  util.pump(is, os, function(){
	fs.unlinkSync(params.src);
	params.complete();
  });
};





/**
 *  MoveFiles
 *
 *  This is an upgrade to the old moveFile function. It requires you pass in an array
 *  of file paths and a destination directory.
 *  Usage:
 *
 *  fn.moveFiles({
 *    files   : [],
 *    destDir   : "/path/to/final/dest",
 *    complete  : function(r){}
 *  });
 *
 */
fn.moveFiles = function(params){
  var files = (typeof params.files == 'string') ? [params.files] : params.files;

  //console.log(typeof params.files);


  fn.asyncLoop({
	length: files.length,
	loopFunction: function(loop, i){


	  var filename  = path.basename(files[i]),
		is      = fs.createReadStream(files[i]),
		os      = fs.createWriteStream(params.destDir + filename);

	  console.log(params.destDir + filename);
	  util.pump(is, os, function(){

		// delete from old location
		fs.unlinkSync(files[i]);

		// run next loop
		loop();
	  });
	},
	complete: function(){
	  params.complete('All files moved');
	}
  });

};





fn.niceTime = (function(){
	  var msPerMinute = 60 * 1000,
		msPerHour   = msPerMinute * 60,
		msPerDay    = msPerHour * 24,
		  msPerMonth  = msPerDay * 30,
		msPerYear   = msPerDay * 365;


	return function(timestamp){
		var timestamp   = timestamp,
			now         = new Date(),
			then        = new Date(timestamp),
			elapsed     = now - then;

		if(elapsed < msPerMinute){
			 return Math.round(elapsed/1000) + ' seconds ago';
		}else if(elapsed < msPerHour){
			 return Math.round(elapsed/msPerMinute) + ' minutes ago';
		}else if(elapsed < msPerDay){
			 return Math.round(elapsed/msPerHour ) + ' hours ago';
		}else if(elapsed < msPerMonth){
			 return Math.round(elapsed/msPerDay ) + ' days ago';
		}else if(elapsed < msPerYear){
			 return Math.round(elapsed/msPerMonth ) + ' months ago';
		}else{
			 return Math.round(elapsed/msPerYear ) + ' years ago';
		}
	};
})();



/**
 *  GetBaseUrl
 *
 *  When passed any url will strip it down to just the base eg '.example.com'
 *  @param: The url string you wish to use
 *  @param: options include options.subdomain true or false (false by default)
 *
 */
fn.getBaseUrl = function(urlstr, options){
  options = options || {};


  urlstr  = (urlstr.indexOf('http://') == -1) ? 'http://' + urlstr : urlstr;
  urlstr  = url.parse(urlstr);// get host URL eg. 'http://demo.meshmesh.us/feed'


  var hostname  = urlstr.hostname,
	baseUrl   = (!options.subdomain) ? hostname.slice(hostname.indexOf('.'), hostname.length) : hostname;// strip subdomain if not requested. eg.'.meshmesh.us'

  return baseUrl;
};



module.exports = fn;//EXPORT CONTENTS OF fn{}

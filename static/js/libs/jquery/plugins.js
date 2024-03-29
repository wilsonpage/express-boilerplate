define([
  'jquery', 
], function(jQuery){
  // Add $ plugins here
  

  /*************************************************
  jquery.animate-enhanced plugin v0.80
  Author: www.benbarnett.net || @benpbarnett
  **************************************************/
  (function($){
    //(function(a,b,c){function u(a,b,c,d){var e=h.exec(b),f=a.css(c)==="auto"?0:a.css(c),g=typeof f=="string"?A(f):f,i=typeof b=="string"?A(b):b,j=d===!0?0:g,k=a.is(":hidden"),l=a.translation();c=="left"&&(j=parseInt(g,10)+l.x),c=="right"&&(j=parseInt(g,10)+l.x),c=="top"&&(j=parseInt(g,10)+l.y),c=="bottom"&&(j=parseInt(g,10)+l.y),!e&&b=="show"?(j=1,k&&a.css({display:"block",opacity:0})):!e&&b=="hide"&&(j=0);if(e){var m=parseFloat(e[2]);return e[1]&&(m=(e[1]==="-="?-1:1)*m+parseInt(j,10)),m}return j}function v(a,b,c){return(c===!0||n==!0&&c!=!1)&&t?"translate3d("+a+"px,"+b+"px,0)":"translate("+a+"px,"+b+"px)"}function w(b,c,d,f,g,h,i,l){var m=b.data(k)?z(b.data(k))?a.extend(!0,{},j):b.data(k):a.extend(!0,{},j),n=g,o=a.inArray(c,e)>-1;if(o){var p=m.meta,q=A(b.css(c))||0,r=c+"_o";n=g-q,p[c]=n,p[r]=b.css(c)=="auto"?0+n:q+n||0,m.meta=p,i&&n===0&&(n=0-p[r],p[c]=n,p[r]=0)}return b.data(k,x(m,c,d,f,n,h,i,l))}function x(a,b,c,d,e,g,h,i){a=typeof a=="undefined"?{}:a,a.secondary=typeof a.secondary=="undefined"?{}:a.secondary;for(var j=f.length-1;j>=0;j--)typeof a[f[j]+"transition-property"]=="undefined"&&(a[f[j]+"transition-property"]=""),a[f[j]+"transition-property"]+=", "+(g===!0&&h===!0?f[j]+"transform":b),a[f[j]+"transition-duration"]=c+"ms",a[f[j]+"transition-timing-function"]=d,a.secondary[g===!0&&h===!0?f[j]+"transform":b]=g===!0&&h===!0?v(a.meta.left,a.meta.top,i):e;return a}function y(a){for(var b in a)if((b=="width"||b=="height")&&(a[b]=="show"||a[b]=="hide"||a[b]=="toggle"))return!0;return!1}function z(a){for(var b in a)return!1;return!0}function A(a){return parseFloat(a.replace(/px/i,""))}function B(b,c,e){var f=a.inArray(b,d)>-1;return(b=="width"||b=="height")&&c===parseFloat(e.css(b))&&(f=!1),f}var d=["top","right","bottom","left","opacity","height","width"],e=["top","right","bottom","left"],f=["","-webkit-","-moz-","-o-"],g=["avoidTransforms","useTranslate3d","leaveTransforms"],h=/^([+-]=)?([\d+-.]+)(.*)$/,i=/([A-Z])/g,j={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},k="jQe",l="cubic-bezier(",m=")",n=!1,o=null,p=document.body||document.documentElement,q=p.style,r=q.WebkitTransition!==undefined?"webkitTransitionEnd":q.OTransition!==undefined?"oTransitionEnd":"transitionend",s=q.WebkitTransition!==undefined||q.MozTransition!==undefined||q.OTransition!==undefined||q.transition!==undefined,t=n="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix;a.expr&&a.expr.filters&&(o=a.expr.filters.animated,a.expr.filters.animated=function(b){return a(b).data("events")&&a(b).data("events")[r]?!0:o.call(this,b)}),a.extend({toggle3DByDefault:function(){n=!n}}),a.fn.translation=function(){if(!this[0])return null;var a=this[0],b=window.getComputedStyle(a,null),c={x:0,y:0};for(var d=f.length-1;d>=0;d--){var e=b.getPropertyValue(f[d]+"transform");if(e&&/matrix/i.test(e)){var g=e.replace(/^matrix\(/i,"").split(/, |\)$/g);c={x:parseInt(g[4],10),y:parseInt(g[5],10)};break}}return c},a.fn.animate=function(c,d,h,i){c=c||{};var j=typeof c.bottom=="undefined"&&typeof c.right=="undefined",n=a.speed(d,h,i),o=this,p=0,q=function(){p--,p===0&&typeof n.complete=="function"&&n.complete.apply(o[0],arguments)};return!s||z(c)||y(c)||n.duration<=0||a.fn.animate.defaults.avoidTransforms===!0&&c.avoidTransforms!==!1?b.apply(this,arguments):this[n.queue===!0?"queue":"each"](function(){var d=a(this),h=a.extend({},n),i=function(){var a={};for(var b=f.length-1;b>=0;b--)a[f[b]+"transition-property"]="none",a[f[b]+"transition-duration"]="",a[f[b]+"transition-timing-function"]="";d.unbind(r);if(!c.leaveTransforms==!0){var g=d.data(k)||{},h={};for(b=f.length-1;b>=0;b--)h[f[b]+"transform"]="";if(j&&typeof g.meta!="undefined")for(var i=0,l;l=e[i];++i)h[l]=g.meta[l+"_o"]+"px";d.css(a).css(h)}c.opacity==="hide"&&d.css("display","none"),d.data(k,null),q.call(d)},o={bounce:l+"0.0, 0.35, .5, 1.3"+m,linear:"linear",swing:"ease-in-out",easeInQuad:l+"0.550, 0.085, 0.680, 0.530"+m,easeInCubic:l+"0.550, 0.055, 0.675, 0.190"+m,easeInQuart:l+"0.895, 0.030, 0.685, 0.220"+m,easeInQuint:l+"0.755, 0.050, 0.855, 0.060"+m,easeInSine:l+"0.470, 0.000, 0.745, 0.715"+m,easeInExpo:l+"0.950, 0.050, 0.795, 0.035"+m,easeInCirc:l+"0.600, 0.040, 0.980, 0.335"+m,easeOutQuad:l+"0.250, 0.460, 0.450, 0.940"+m,easeOutCubic:l+"0.215, 0.610, 0.355, 1.000"+m,easeOutQuart:l+"0.165, 0.840, 0.440, 1.000"+m,easeOutQuint:l+"0.230, 1.000, 0.320, 1.000"+m,easeOutSine:l+"0.390, 0.575, 0.565, 1.000"+m,easeOutExpo:l+"0.190, 1.000, 0.220, 1.000"+m,easeOutCirc:l+"0.075, 0.820, 0.165, 1.000"+m,easeInOutQuad:l+"0.455, 0.030, 0.515, 0.955"+m,easeInOutCubic:l+"0.645, 0.045, 0.355, 1.000"+m,easeInOutQuart:l+"0.770, 0.000, 0.175, 1.000"+m,easeInOutQuint:l+"0.860, 0.000, 0.070, 1.000"+m,easeInOutSine:l+"0.445, 0.050, 0.550, 0.950"+m,easeInOutExpo:l+"1.000, 0.000, 0.000, 1.000"+m,easeInOutCirc:l+"0.785, 0.135, 0.150, 0.860"+m},s={},t=o[h.easing||"swing"]?o[h.easing||"swing"]:h.easing||"swing";for(var v in c)if(a.inArray(v,g)===-1){var x=a.inArray(v,e)>-1,y=u(d,c[v],v,x&&c.avoidTransforms!==!0);c.avoidTransforms!==!0&&B(v,y,d)?w(d,v,h.duration,t,x&&c.avoidTransforms===!0?y+"px":y,x&&c.avoidTransforms!==!0,j,c.useTranslate3d===!0):s[v]=c[v]}var A=d.data(k)||{};for(var C=f.length-1;C>=0;C--)typeof A[f[C]+"transition-property"]!="undefined"&&(A[f[C]+"transition-property"]=A[f[C]+"transition-property"].substr(2));d.data(k,A).unbind(r);if(!z(d.data(k))&&!z(d.data(k).secondary)){p++,d.css(d.data(k));var D=d.data(k).secondary;setTimeout(function(){d.bind(r,i).css(D)})}else h.queue=!1;return z(s)||(p++,b.apply(d,[s,{duration:h.duration,easing:a.easing[h.easing]?h.easing:a.easing.swing?"swing":"linear",complete:q,queue:h.queue}])),!0})},a.fn.animate.defaults={},a.fn.stop=function(b,d,e){if(!s)return c.apply(this,[b,d]);b&&this.queue([]);var g={};for(var h=f.length-1;h>=0;h--)g[f[h]+"transition-property"]="none",g[f[h]+"transition-duration"]="",g[f[h]+"transition-timing-function"]="";return this.each(function(){var h=a(this),j=window.getComputedStyle(this,null),l={},m;if(!z(h.data(k))&&!z(h.data(k).secondary)){var n=h.data(k);if(d){l=n.secondary;if(!e&&typeof n.meta.left_o!==undefined||typeof n.meta.top_o!==undefined){l.left=typeof n.meta.left_o!==undefined?n.meta.left_o:"auto",l.top=typeof n.meta.top_o!==undefined?n.meta.top_o:"auto";for(m=f.length-1;m>=0;m--)l[f[m]+"transform"]=""}}else for(var o in h.data(k).secondary){o=o.replace(i,"-$1").toLowerCase(),l[o]=j.getPropertyValue(o);if(!e&&/matrix/i.test(l[o])){var p=l[o].replace(/^matrix\(/i,"").split(/, |\)$/g);l.left=parseFloat(p[4])+parseFloat(h.css("left"))+"px"||"auto",l.top=parseFloat(p[5])+parseFloat(h.css("top"))+"px"||"auto";for(m=f.length-1;m>=0;m--)l[f[m]+"transform"]=""}}h.unbind(r).css(g).css(l).data(k,null)}else c.apply(h,[b,d])}),this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop)  
  })(jQuery);


  /**
   * jQuery Cookie plugin
   *
   * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
   * Dual licensed under the MIT and GPL licenses:
   * http://www.opensource.org/licenses/mit-license.php
   * http://www.gnu.org/licenses/gpl.html
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
   *  SmartTitles
   *
   */
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
   *  StretchyTextarea
   *
   */
  (function($){
    var onKeyup = function(e){
      var textarea = $(this),
        txt = textarea.siblings('.txt'),
        val = textarea.val();//.replace( /\s/g, "&nbsp;" );
      
      txt.text(val);
      
      //console.log(textarea.val()); 
    }
    //=========================================//
      $.fn.stretchy = function(reset){
        return this.each(function(){
        var textarea  = $(this),
          parent    = textarea.parent(),
          stretchy  = $("<div class='stretchy'><div class='txt'></div></div>");
        
        
        stretchy.append(textarea);
        //textarea.remove();
        
        
        
        stretchy
        .appendTo(parent)
        .find('textarea')
        .keyup(onKeyup);
        });
    };
  })(jQuery); 
  

  
  /**
   *  NiceTime
   *
   *  Converts regular javascript datetime objects into nice relative times.
   *
   */
  
  (function($){
      var msPerMinute = 60 * 1000,
        msPerHour   = msPerMinute * 60,
        msPerDay    = msPerHour * 24,
          msPerMonth  = msPerDay * 30,
        msPerYear   = msPerDay * 365;
        
      
      $.niceTime = function(timestamp){
          var timestamp   = timestamp,//.replace('+0000',''),
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
      }
  })(jQuery); 
  
  

  /**
   *  ImgsLoaded
   *
   *  Fires a callback when all images inside an element have loaded
   *
   */
  (function($){
      $.fn.imgsLoaded = function(cb){
        return this.each(function(){
        var imgs = $(this).find('img'),
          imgsLoaded = 0;
        
        // if no image in this element return callback
        if(!imgs.length){ return cb() };
        
        imgs.one('load',function(){
          imgsLoaded++;
          if(imgsLoaded == imgs.length){ cb() };
        }).each(function(){
          if(this.complete){ $(this).load() };
        });
        
        });
    };
  })(jQuery); 



  /**
   *  Objectify
   *
   *  Is run on a form element and returns the values as a multi-tiered
   *  object in relation to the dot-notation sting given in each
   *  input's name attribute.
   *
   */
  (function($){
      $.fn.objectify= function(options) {
          var inputs = $(this).find('input'),
            options = options || {},
              result = {};
      
          // loop over each of the input fields
          inputs.each(function(i) {
              var input = $(this),
                  name  = input.attr('name'),
                  value = input.val(),
                  array = name.split('.'),
                  len   = array.length,
                  currentlevel = {};
      
              
              // loop over array of levels eg. ['contact', 'address', 'town']
              for(var i = 0; i < len; i++){
                  
                  // cache the key
                  var key = array[i];
                  
                  // if there is no top level key: create it
                  if(i==0 && !result[key]) { result[key] = {} };
                  
                  // if this is the top level: set the current level
                  // to the top of the result object
                  if(i==0){ currentlevel = result };
         
                  
                  if(i == len-1){// if last level:
                      
                      // set the value on the current key
                      currentlevel[key] = value;
                          
                  }else{// else if more levels to come:
                      
                      // get the next key
                      var nextKey = array[i+1];
                      
                      // if there is no next key, create it
                      if(!currentlevel[key][nextKey]) { currentlevel[key][nextKey] = {} };
                      
                      // move the current level reference down one level
                      currentlevel = currentlevel[key];
                  }
              }
          });


          if(!options.keepEmpty){
            result = removeNulls(result);
          }
      
          // return form data
          return result;
      }


      var removeNulls = function(o){

        // loop over each item in the object
        for(var key in o){

          // if this is a string
          if(typeof o[key] == 'string'){ 
            
            // if this string has no length:
            // delete it from the object
            if(!o[key].length){ delete o[key] };
          }else{
            // this must be an object so remove nulls
            // from this too
            o[key] = removeNulls(o[key]);
          }
        }

        //return the altered object
        return o;
      }
  })(jQuery);

  
  return $;
});

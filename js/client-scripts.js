/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

var _0x73f6=["\x65\x76\x65\x6E\x74","\x64\x65\x62\x6F\x75\x6E\x63\x65\x64\x72\x65\x73\x69\x7A\x65","\x73\x70\x65\x63\x69\x61\x6C","\x72\x65\x73\x69\x7A\x65","\x68\x61\x6E\x64\x6C\x65\x72","\x6F\x6E","\x6F\x66\x66","\x74\x79\x70\x65","\x61\x70\x70\x6C\x79","\x64\x69\x73\x70\x61\x74\x63\x68","\x74\x68\x72\x65\x73\x68\x6F\x6C\x64","\x64\x61\x74\x61\x3A\x69\x6D\x61\x67\x65\x2F\x67\x69\x66\x3B\x62\x61\x73\x65\x36\x34\x2C\x52\x30\x6C\x47\x4F\x44\x6C\x68\x41\x51\x41\x42\x41\x49\x41\x41\x41\x41\x41\x41\x41\x50\x2F\x2F\x2F\x79\x77\x41\x41\x41\x41\x41\x41\x51\x41\x42\x41\x41\x41\x43\x41\x55\x77\x41\x4F\x77\x3D\x3D","\x69\x6D\x61\x67\x65\x73\x4C\x6F\x61\x64\x65\x64","\x66\x6E","\x69\x73\x46\x75\x6E\x63\x74\x69\x6F\x6E","\x6E\x6F\x74\x69\x66\x79","\x69\x6D\x67","\x66\x69\x6C\x74\x65\x72","\x61\x64\x64","\x66\x69\x6E\x64","\x69\x73\x50\x6C\x61\x69\x6E\x4F\x62\x6A\x65\x63\x74","\x63\x61\x6C\x6C\x62\x61\x63\x6B","\x65\x61\x63\x68","\x6C\x65\x6E\x67\x74\x68","\x72\x65\x6A\x65\x63\x74","\x72\x65\x73\x6F\x6C\x76\x65","\x63\x61\x6C\x6C","\x73\x72\x63","\x69\x6E\x41\x72\x72\x61\x79","\x70\x75\x73\x68","\x64\x61\x74\x61","\x6E\x6F\x74\x69\x66\x79\x57\x69\x74\x68","\x2E\x69\x6D\x61\x67\x65\x73\x4C\x6F\x61\x64\x65\x64","\x75\x6E\x62\x69\x6E\x64","\x69\x73\x42\x72\x6F\x6B\x65\x6E","\x63\x6F\x6D\x70\x6C\x65\x74\x65","\x6E\x61\x74\x75\x72\x61\x6C\x57\x69\x64\x74\x68","\x6E\x61\x74\x75\x72\x61\x6C\x48\x65\x69\x67\x68\x74","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x6C\x6F\x61\x64\x2E\x69\x6D\x61\x67\x65\x73\x4C\x6F\x61\x64\x65\x64\x20\x65\x72\x72\x6F\x72\x2E\x69\x6D\x61\x67\x65\x73\x4C\x6F\x61\x64\x65\x64","\x74\x61\x72\x67\x65\x74","\x65\x72\x72\x6F\x72","\x62\x69\x6E\x64","\x70\x72\x6F\x6D\x69\x73\x65","\x65\x6C\x61\x73\x74\x69\x63\x5F\x67\x72\x69\x64","\x31\x2E\x30","","\x65\x78\x74\x65\x6E\x64","\x69\x74\x65\x6D\x73","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x77\x61\x67\x77\x65\x70\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72\x22\x3E\x3C\x6E\x61\x76\x20\x69\x64\x3D\x22\x70\x6F\x72\x66\x6F\x6C\x69\x6F\x2D\x6E\x61\x76\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6C\x65\x61\x72\x66\x69\x78\x22\x3E\x3C\x75\x6C\x20\x69\x64\x3D\x22\x70\x6F\x72\x74\x66\x6F\x6C\x69\x6F\x2D\x66\x69\x6C\x74\x65\x72\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x6E\x61\x76\x20\x6E\x61\x76\x2D\x74\x61\x62\x73\x20\x63\x6C\x65\x61\x72\x66\x69\x78\x22\x3E\x3C\x2F\x75\x6C\x3E\x3C\x2F\x6E\x61\x76\x3E\x3C\x2F\x64\x69\x76\x3E","\x68\x74\x6D\x6C","\x3C\x75\x6C\x20\x69\x64\x3D\x22\x6F\x67\x2D\x67\x72\x69\x64\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x67\x72\x69\x64\x22\x3E\x3C\x2F\x75\x6C\x3E","\x3C\x6C\x69\x3E\x3C\x2F\x6C\x69\x3E","\x74\x61\x67\x73","\x2C","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x64\x61\x74\x61\x2D\x74\x61\x67\x73","\x61\x74\x74\x72","\x3C\x61\x3E\x3C\x2F\x61\x3E","\x68\x72\x65\x66","\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3A\x3B\x3B","\x3C\x69\x6D\x67\x2F\x3E","\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x64\x61\x74\x61\x2D\x6C\x61\x72\x67\x65\x73\x72\x63","\x6C\x61\x72\x67\x65","\x3C\x73\x70\x61\x6E\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x74\x69\x74\x6C\x65","\x3C\x66\x69\x67\x75\x72\x65\x3E\x3C\x2F\x66\x69\x67\x75\x72\x65\x3E","\x61\x70\x70\x65\x6E\x64","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x66\x69\x6C\x74\x65\x72\x45\x66\x66\x65\x63\x74","\x6D\x6F\x76\x65\x75\x70","\x65\x66\x66\x65\x63\x74\x2D","\x61\x64\x64\x43\x6C\x61\x73\x73","\x68\x6F\x76\x65\x72\x44\x69\x72\x65\x63\x74\x69\x6F\x6E","\x68\x6F\x76\x65\x72\x44\x65\x6C\x61\x79","\x68\x6F\x76\x65\x72\x49\x6E\x76\x65\x72\x73\x65","\x68\x6F\x76\x65\x72\x64\x69\x72","\x6C\x69","\x23\x70\x6F\x72\x74\x66\x6F\x6C\x69\x6F\x2D\x66\x69\x6C\x74\x65\x72","\x73\x70\x6C\x69\x74","\x64\x61\x74\x61\x2D\x69\x64","\x61\x6C\x6C","\x74\x72\x69\x6D","\x20","\x2D","\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x41\x6C\x6C","\x72\x65\x6D\x6F\x76\x65","\x63\x6C\x69\x63\x6B","\x74\x72\x69\x67\x67\x65\x72","\x61","\x6C\x69\x2E\x6F\x67\x2D\x65\x78\x70\x61\x6E\x64\x65\x64","\x2E\x6F\x67\x2D\x63\x6C\x6F\x73\x65","\x6F\x75\x74\x6C\x69\x6E\x65","\x6E\x6F\x6E\x65","\x63\x73\x73","\x63\x75\x72\x72\x65\x6E\x74","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x2E\x63\x75\x72\x72\x65\x6E\x74","\x70\x61\x72\x65\x6E\x74","\x74\x65\x78\x74","\x68\x69\x64\x64\x65\x6E","\x61\x6E\x69\x6D\x61\x74\x65","\x68\x61\x73","\x74\x6F\x67\x67\x6C\x65","\x6C\x69\x3A\x66\x69\x72\x73\x74","\x3C\x6C\x69\x3E","\x3C\x61\x3E","\x2E","\x23","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x68\x74\x6D\x6C\x2C\x20\x62\x6F\x64\x79","\x77\x65\x62\x6B\x69\x74\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64","\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x65\x6E\x64","\x6F\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64","\x4D\x53\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64","\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E","\x70\x72\x65\x66\x69\x78\x65\x64","\x63\x73\x73\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x73","\x65\x78\x70\x61\x6E\x64\x69\x6E\x67\x48\x65\x69\x67\x68\x74","\x65\x78\x70\x61\x6E\x64\x69\x6E\x67\x53\x70\x65\x65\x64","\x65\x61\x73\x65","\x74\x6F\x70","\x6F\x66\x66\x73\x65\x74","\x68\x65\x69\x67\x68\x74","\x6F\x66\x66\x73\x65\x74\x54\x6F\x70","\x70\x72\x65\x76\x69\x65\x77","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x69\x6E\x64\x65\x78","\x73\x70\x61\x6E\x2E\x6F\x67\x2D\x63\x6C\x6F\x73\x65","\x77\x69\x64\x74\x68","\x75\x70\x64\x61\x74\x65","\x6F\x70\x65\x6E","\x2E\x6F\x67\x2D\x70\x6F\x69\x6E\x74\x65\x72","\x63\x6C\x6F\x73\x65","\x72\x65\x6D\x6F\x76\x65\x44\x61\x74\x61","\x24\x69\x74\x65\x6D","\x65\x78\x70\x61\x6E\x64\x65\x64\x49\x64\x78","\x63\x72\x65\x61\x74\x65","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x24\x74\x69\x74\x6C\x65","\x3C\x68\x33\x3E\x3C\x2F\x68\x33\x3E","\x24\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x3C\x70\x3E\x3C\x2F\x70\x3E","\x24\x68\x72\x65\x66","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x23\x22\x3E\x56\x69\x73\x69\x74\x20\x77\x65\x62\x73\x69\x74\x65\x3C\x2F\x61\x3E","\x24\x64\x65\x74\x61\x69\x6C\x42\x75\x74\x74\x6F\x6E\x4C\x69\x73\x74","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x75\x74\x74\x6F\x6E\x73\x2D\x6C\x69\x73\x74\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x24\x64\x65\x74\x61\x69\x6C\x73","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x64\x65\x74\x61\x69\x6C\x73\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x24\x6C\x6F\x61\x64\x69\x6E\x67","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x6C\x6F\x61\x64\x69\x6E\x67\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x24\x66\x75\x6C\x6C\x69\x6D\x61\x67\x65","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x66\x75\x6C\x6C\x69\x6D\x67\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x24\x63\x6C\x6F\x73\x65\x50\x72\x65\x76\x69\x65\x77","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x63\x6C\x6F\x73\x65\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x24\x70\x72\x65\x76\x69\x65\x77\x49\x6E\x6E\x65\x72","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x65\x78\x70\x61\x6E\x64\x65\x72\x2D\x69\x6E\x6E\x65\x72\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x24\x70\x72\x65\x76\x69\x65\x77\x45\x6C","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x65\x78\x70\x61\x6E\x64\x65\x72\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x70\x6F\x69\x6E\x74\x65\x72\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x67\x65\x74\x45\x6C","\x73\x65\x74\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E","\x65\x71","\x6F\x67\x2D\x65\x78\x70\x61\x6E\x64\x65\x64","\x70\x6F\x73\x69\x74\x69\x6F\x6E\x50\x72\x65\x76\x69\x65\x77","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x62\x75\x74\x74\x6F\x6E\x5F\x6C\x69\x73\x74","\x6C\x69\x6E\x6B\x2D\x62\x75\x74\x74\x6F\x6E","\x66\x69\x72\x73\x74","\x75\x72\x6C","\x24\x6C\x61\x72\x67\x65\x49\x6D\x67","\x3C\x75\x6C\x3E\x3C\x2F\x75\x6C\x3E","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3A\x3B\x3B\x22\x3E\x3C\x2F\x61\x3E","\x72\x65\x6C\x61\x74\x65\x64\x5F\x70\x68\x6F\x74\x6F","\x73\x65\x6C\x65\x63\x74\x65\x64","\x64\x61\x74\x61\x2D\x6C\x61\x72\x67\x65","\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x6C\x69\x73\x74","\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x77\x72\x61\x70\x70\x65\x72\x20\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x68\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x2E\x73\x65\x6C\x65\x63\x74\x65\x64","\x66\x61\x64\x65\x49\x6E","\x66\x61\x64\x65\x4F\x75\x74","\x6C\x6F\x61\x64","\x2E\x72\x65\x6C\x61\x74\x65\x64\x5F\x70\x68\x6F\x74\x6F","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x69\x6E\x66\x6F\x73\x65\x70\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x2E\x69\x6E\x66\x6F\x73\x65\x70\x2C\x20\x2E\x6F\x67\x2D\x67\x72\x69\x64\x2D\x73\x6D\x61\x6C\x6C","\x3A\x76\x69\x73\x69\x62\x6C\x65","\x69\x73","\x73\x68\x6F\x77","\x6C\x61\x72\x67\x65\x73\x72\x63","\x68\x69\x64\x65","\x73\x65\x74\x48\x65\x69\x67\x68\x74\x73","\x70\x72\x6F\x78\x79","\x66\x61\x73\x74","\x6D\x69\x6E\x48\x65\x69\x67\x68\x74","\x69\x74\x65\x6D\x48\x65\x69\x67\x68\x74","\x63\x61\x6C\x63\x48\x65\x69\x67\x68\x74","\x73\x70\x65\x65\x64","\x68\x65\x69\x67\x68\x74\x20","\x6D\x73\x20","\x65\x61\x73\x69\x6E\x67","\x48\x6F\x76\x65\x72\x44\x69\x72","\x24\x65\x6C","\x64\x65\x66\x61\x75\x6C\x74\x73","\x6F\x70\x74\x69\x6F\x6E\x73","\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x50\x72\x6F\x70","\x61\x6C\x6C\x20","\x73\x75\x70\x70\x6F\x72\x74","\x6D\x6F\x75\x73\x65\x65\x6E\x74\x65\x72\x2E\x68\x6F\x76\x65\x72\x64\x69\x72\x2C\x20\x6D\x6F\x75\x73\x65\x6C\x65\x61\x76\x65\x2E\x68\x6F\x76\x65\x72\x64\x69\x72","\x66\x69\x67\x75\x72\x65","\x70\x61\x67\x65\x58","\x70\x61\x67\x65\x59","\x6D\x6F\x75\x73\x65\x65\x6E\x74\x65\x72","\x66\x72\x6F\x6D","\x74\x6D\x68\x6F\x76\x65\x72","\x74\x6F","\x78","\x6C\x65\x66\x74","\x79","\x61\x74\x61\x6E\x32","\x50\x49","\x72\x6F\x75\x6E\x64","\x30\x70\x78","\x2D\x31\x30\x30\x25","\x31\x30\x30\x25","\x69\x6E\x76\x65\x72\x73\x65","\x61\x70\x70\x6C\x79\x53\x74\x79\x6C\x65","\x6D\x73","\x73\x74\x6F\x70","\x63\x6F\x6E\x73\x6F\x6C\x65","\x73\x74\x72\x69\x6E\x67","\x73\x6C\x69\x63\x65","\x63\x61\x6E\x6E\x6F\x74\x20\x63\x61\x6C\x6C\x20\x6D\x65\x74\x68\x6F\x64\x73\x20\x6F\x6E\x20\x68\x6F\x76\x65\x72\x64\x69\x72\x20\x70\x72\x69\x6F\x72\x20\x74\x6F\x20\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x61\x74\x69\x6F\x6E\x3B\x20\x61\x74\x74\x65\x6D\x70\x74\x65\x64\x20\x74\x6F\x20\x63\x61\x6C\x6C\x20\x6D\x65\x74\x68\x6F\x64\x20\x27","\x27","\x63\x68\x61\x72\x41\x74","\x5F","\x6E\x6F\x20\x73\x75\x63\x68\x20\x6D\x65\x74\x68\x6F\x64\x20\x27","\x27\x20\x66\x6F\x72\x20\x68\x6F\x76\x65\x72\x64\x69\x72\x20\x69\x6E\x73\x74\x61\x6E\x63\x65","\x4D\x6F\x64\x65\x72\x6E\x69\x7A\x72","\x45\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x68\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C","\x65\x61\x73\x65\x2D\x69\x6E\x2D\x6F\x75\x74","\x74\x72\x61\x6E\x73\x45\x6E\x64\x45\x76\x65\x6E\x74\x4E\x61\x6D\x65","\x63\x73\x73\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x73","\x73\x74\x61\x72\x74","\x69\x73\x53\x6C\x69\x64\x69\x6E\x67","\x24\x69\x74\x65\x6D\x73","\x69\x74\x65\x6D\x73\x43\x6F\x75\x6E\x74","\x64\x65\x74\x61\x63\x68","\x65\x6D\x70\x74\x79","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x77\x72\x61\x70\x70\x65\x72\x20\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x6C\x6F\x61\x64\x69\x6E\x67\x20\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D","\x6F\x72\x69\x65\x6E\x74\x61\x74\x69\x6F\x6E","\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x77\x72\x61\x70","\x68\x61\x73\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E","\x68\x61\x73\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x54\x69\x6D\x65\x6F\x75\x74","\x6F\x6E\x52\x65\x61\x64\x79","\x6D\x69\x6E\x49\x74\x65\x6D\x73","\x76\x65\x72\x74\x69\x63\x61\x6C","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x63\x61\x72\x6F\x75\x73\x65\x6C\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x24\x63\x61\x72\x6F\x75\x73\x65\x6C","\x24\x77\x72\x61\x70\x70\x65\x72","\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x6C\x6F\x61\x64\x69\x6E\x67","\x69\x6D\x67\x3A\x66\x69\x72\x73\x74","\x69\x6D\x67\x53\x69\x7A\x65","\x6F\x75\x74\x65\x72\x57\x69\x64\x74\x68","\x6F\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74","\x6D\x61\x78\x2D\x68\x65\x69\x67\x68\x74","\x61\x6C\x6C\x20\x30\x73","\x24\x6E\x61\x76\x69\x67\x61\x74\x69\x6F\x6E","\x3C\x6E\x61\x76\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x70\x72\x65\x76\x22\x3E\x50\x72\x65\x76\x69\x6F\x75\x73\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x6E\x65\x78\x74\x22\x3E\x4E\x65\x78\x74\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x6E\x61\x76\x3E","\x24\x6E\x61\x76\x50\x72\x65\x76","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x70\x72\x65\x76","\x73\x70\x61\x6E\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x70\x72\x65\x76","\x24\x6E\x61\x76\x4E\x65\x78\x74","\x6E\x65\x78\x74","\x73\x70\x61\x6E\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x6E\x65\x78\x74","\x66\x6C\x6F\x6F\x72","\x25","\x6D\x61\x78\x2D\x77\x69\x64\x74\x68","\x70\x61\x64\x64\x69\x6E\x67\x2D\x6C\x65\x66\x74","\x70\x61\x64\x64\x69\x6E\x67\x2D\x72\x69\x67\x68\x74","\x70\x61\x64\x64\x69\x6E\x67\x2D\x74\x6F\x70","\x70\x61\x64\x64\x69\x6E\x67\x2D\x62\x6F\x74\x74\x6F\x6D","\x66\x69\x74\x43\x6F\x75\x6E\x74","\x64\x65\x62\x6F\x75\x6E\x63\x65\x64\x72\x65\x73\x69\x7A\x65\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x63\x6C\x69\x63\x6B\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x6F\x6E\x43\x6C\x69\x63\x6B","\x73\x77\x69\x70\x65\x6C\x65\x66\x74\x20\x73\x77\x69\x70\x65\x72\x69\x67\x68\x74\x20\x73\x77\x69\x70\x65\x75\x70\x20\x73\x77\x69\x70\x65\x64\x6F\x77\x6E\x20\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x75\x6E\x77\x72\x61\x70","\x61\x75\x74\x6F","\x6F\x6E\x42\x65\x66\x6F\x72\x65\x53\x6C\x69\x64\x65","\x74\x72\x61\x6E\x73\x6C\x61\x74\x69\x6F\x6E","\x61\x62\x73","\x6D\x61\x78","\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x58\x28","\x70\x78\x29","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x59\x28","\x6F\x6E\x41\x66\x74\x65\x72\x53\x6C\x69\x64\x65","\x63\x61\x6E\x6E\x6F\x74\x20\x63\x61\x6C\x6C\x20\x6D\x65\x74\x68\x6F\x64\x73\x20\x6F\x6E\x20\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x20\x70\x72\x69\x6F\x72\x20\x74\x6F\x20\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x61\x74\x69\x6F\x6E\x3B\x20\x61\x74\x74\x65\x6D\x70\x74\x65\x64\x20\x74\x6F\x20\x63\x61\x6C\x6C\x20\x6D\x65\x74\x68\x6F\x64\x20\x27","\x27\x20\x66\x6F\x72\x20\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x20\x73\x65\x6C\x66"];var $event=$[_0x73f6[0]],$special,resizeTimeout;$special=$event[_0x73f6[2]][_0x73f6[1]]={setup:function (){$(this)[_0x73f6[5]](_0x73f6[3],$special[_0x73f6[4]]);} ,teardown:function (){$(this)[_0x73f6[6]](_0x73f6[3],$special[_0x73f6[4]]);} ,handler:function (_0xabcbx4,_0xabcbx5){var _0xabcbx6=this,_0xabcbx7=arguments,_0xabcbx8=function (){_0xabcbx4[_0x73f6[7]]=_0x73f6[1];$event[_0x73f6[9]][_0x73f6[8]](_0xabcbx6,_0xabcbx7);} ;if(resizeTimeout){clearTimeout(resizeTimeout);} ;_0xabcbx5?_0xabcbx8():resizeTimeout=setTimeout(_0xabcbx8,$special[_0x73f6[10]]);} ,threshold:250};var BLANK=_0x73f6[11];$[_0x73f6[13]][_0x73f6[12]]=function (_0xabcbxa){var _0xabcbx4=this,_0xabcbxb=$[_0x73f6[14]]($.Deferred)?$.Deferred():0,_0xabcbxc=$[_0x73f6[14]](_0xabcbxb[_0x73f6[15]]),_0xabcbx8=_0xabcbx4[_0x73f6[19]](_0x73f6[16])[_0x73f6[18]](_0xabcbx4[_0x73f6[17]](_0x73f6[16])),_0xabcbx7=[],_0xabcbxd=[],_0xabcbx6=[];if($[_0x73f6[20]](_0xabcbxa)){$[_0x73f6[22]](_0xabcbxa,function (_0xabcbxe,_0xabcbxf){if(_0xabcbxe===_0x73f6[21]){_0xabcbxa=_0xabcbxf;} else {if(_0xabcbxb){_0xabcbxb[_0xabcbxe](_0xabcbxf);} ;} ;} );} ;function _0xabcbx10(){var _0xabcbxe=$(_0xabcbxd),_0xabcbxf=$(_0xabcbx6);if(_0xabcbxb){if(_0xabcbx6[_0x73f6[23]]){_0xabcbxb[_0x73f6[24]](_0xabcbx8,_0xabcbxe,_0xabcbxf);} else {_0xabcbxb[_0x73f6[25]](_0xabcbx8);} ;} ;if($[_0x73f6[14]](_0xabcbxa)){_0xabcbxa[_0x73f6[26]](_0xabcbx4,_0xabcbx8,_0xabcbxe,_0xabcbxf);} ;} ;function _0xabcbx5(_0xabcbxe,_0xabcbxf){if(_0xabcbxe[_0x73f6[27]]===BLANK||$[_0x73f6[28]](_0xabcbxe,_0xabcbx7)!==-1){return ;} ;_0xabcbx7[_0x73f6[29]](_0xabcbxe);if(_0xabcbxf){_0xabcbx6[_0x73f6[29]](_0xabcbxe);} else {_0xabcbxd[_0x73f6[29]](_0xabcbxe);} ;$[_0x73f6[30]](_0xabcbxe,_0x73f6[12],{isBroken:_0xabcbxf,src:_0xabcbxe[_0x73f6[27]]});if(_0xabcbxc){_0xabcbxb[_0x73f6[31]]($(_0xabcbxe),[_0xabcbxf,_0xabcbx8,$(_0xabcbxd),$(_0xabcbx6)]);} ;if(_0xabcbx8[_0x73f6[23]]===_0xabcbx7[_0x73f6[23]]){setTimeout(_0xabcbx10);_0xabcbx8[_0x73f6[33]](_0x73f6[32]);} ;} ;if(!_0xabcbx8[_0x73f6[23]]){_0xabcbx10();} else {_0xabcbx8[_0x73f6[42]](_0x73f6[39],function (_0xabcbxe){_0xabcbx5(_0xabcbxe[_0x73f6[40]],_0xabcbxe[_0x73f6[7]]===_0x73f6[41]);} )[_0x73f6[22]](function (_0xabcbxe,_0xabcbx11){var _0xabcbx12=_0xabcbx11[_0x73f6[27]];var _0xabcbxf=$[_0x73f6[30]](_0xabcbx11,_0x73f6[12]);if(_0xabcbxf&&_0xabcbxf[_0x73f6[27]]===_0xabcbx12){_0xabcbx5(_0xabcbx11,_0xabcbxf[_0x73f6[34]]);return ;} ;if(_0xabcbx11[_0x73f6[35]]&&_0xabcbx11[_0x73f6[36]]!==undefined){_0xabcbx5(_0xabcbx11,_0xabcbx11[_0x73f6[36]]===0||_0xabcbx11[_0x73f6[37]]===0);return ;} ;if(_0xabcbx11[_0x73f6[38]]||_0xabcbx11[_0x73f6[35]]){_0xabcbx11[_0x73f6[27]]=BLANK;_0xabcbx11[_0x73f6[27]]=_0xabcbx12;} ;} );} ;return _0xabcbxb?_0xabcbxb[_0x73f6[43]](_0xabcbx4):_0xabcbx4;} ;$(function (){$[_0x73f6[44]]={version:_0x73f6[45]};$[_0x73f6[13]][_0x73f6[44]]=function (_0xabcbx13){_0xabcbx13=$[_0x73f6[47]]({},{items:null,filterEffect:_0x73f6[46],hoverDirection:true,hoverDelay:0,hoverInverse:false,expandingHeight:500,expandingSpeed:300,callback:function (){} },_0xabcbx13);var _0xabcbx14=$(this);var _0xabcbx15=_0xabcbx13[_0x73f6[48]][_0x73f6[23]];if(_0xabcbx15==0){return false;} ;_0xabcbx14[_0x73f6[50]](_0x73f6[49]);var _0xabcbxd=_0x73f6[46];var _0xabcbx16=$(_0x73f6[51]);for(itemIdx=0;itemIdx<_0xabcbx15;itemIdx++){if(_0xabcbx13[_0x73f6[48]][itemIdx]!=undefined){var _0xabcbx17=_0xabcbx13[_0x73f6[48]][itemIdx];liObject=$(_0x73f6[52]);tags=_0xabcbx17[_0x73f6[53]];strTag=_0x73f6[46];for(var _0xabcbx18=tags[_0x73f6[23]]-1;_0xabcbx18>=0;_0xabcbx18--){strTag+=_0x73f6[54]+tags[_0xabcbx18];} ;strTag=strTag[_0x73f6[55]](1);liObject[_0x73f6[57]](_0x73f6[56],strTag);aObject=$(_0x73f6[58]);aObject[_0x73f6[57]](_0x73f6[59],_0x73f6[60]);imgObject=$(_0x73f6[61]);imgObject[_0x73f6[57]](_0x73f6[27],_0xabcbx17[_0x73f6[62]][0]);imgObject[_0x73f6[57]](_0x73f6[63],_0xabcbx17[_0x73f6[64]][0]);spanObject=$(_0x73f6[65]);spanObject[_0x73f6[50]](_0xabcbx17[_0x73f6[66]]);figureObject=$(_0x73f6[67]);figureObject[_0x73f6[68]](spanObject);imgObject[_0x73f6[69]](aObject);figureObject[_0x73f6[69]](aObject);aObject[_0x73f6[69]](liObject);liObject[_0x73f6[69]](_0xabcbx16);} ;} ;if(_0xabcbx13[_0x73f6[70]]==_0x73f6[46]){_0xabcbx13[_0x73f6[70]]=_0x73f6[71];} ;_0xabcbx16[_0x73f6[73]](_0x73f6[72]+_0xabcbx13[_0x73f6[70]]);_0xabcbx16[_0x73f6[69]](_0xabcbx14);if(_0xabcbx13[_0x73f6[74]]==true){_0xabcbx16[_0x73f6[19]](_0x73f6[78])[_0x73f6[22]](function (){$(this)[_0x73f6[77]]({hoverDelay:_0xabcbx13[_0x73f6[75]],inverse:_0xabcbx13[_0x73f6[76]]});} );} ;var _0xabcbx11=_0xabcbx14[_0x73f6[19]](_0x73f6[79]);var _0xabcbx19=_0xabcbx16[_0x73f6[19]](_0x73f6[78]),_0xabcbx7={};numOfTag=0;_0xabcbx19[_0x73f6[22]](function (_0xabcbx1a){var _0xabcbx1b=$(this),_0xabcbx1c=_0xabcbx1b[_0x73f6[30]](_0x73f6[53])[_0x73f6[80]](_0x73f6[54]);_0xabcbx1b[_0x73f6[57]](_0x73f6[81],_0xabcbx1a);_0xabcbx1b[_0x73f6[73]](_0x73f6[82]);$[_0x73f6[22]](_0xabcbx1c,function (_0xabcbxc,_0xabcbx1d){_0xabcbx1d=$[_0x73f6[83]](_0xabcbx1d);_0xabcbx1b[_0x73f6[73]](_0xabcbx1d[_0x73f6[87]]()[_0x73f6[86]](_0x73f6[84],_0x73f6[85]));if(!(_0xabcbx1d in _0xabcbx7)){_0xabcbx7[_0xabcbx1d]=[];numOfTag++;} ;_0xabcbx7[_0xabcbx1d][_0x73f6[29]](_0xabcbx1b);} );} );if(numOfTag>1){_0xabcbx10(_0x73f6[88]);$[_0x73f6[22]](_0xabcbx7,function (_0xabcbx1c,_0xabcbxc){_0xabcbx10(_0xabcbx1c);} );} else {_0xabcbx11[_0x73f6[89]]();} ;_0xabcbx11[_0x73f6[19]](_0x73f6[92])[_0x73f6[42]](_0x73f6[90],function (_0xabcbx1c){_0xabcbxe[_0x73f6[19]](_0x73f6[93])[_0x73f6[19]](_0x73f6[92])[_0x73f6[91]](_0x73f6[90]);_0xabcbxe[_0x73f6[19]](_0x73f6[94])[_0x73f6[91]](_0x73f6[90]);$this=$(this);$this[_0x73f6[97]](_0x73f6[95],_0x73f6[96]);_0xabcbx11[_0x73f6[19]](_0x73f6[100])[_0x73f6[99]](_0x73f6[98]);$this[_0x73f6[101]]()[_0x73f6[73]](_0x73f6[98]);var _0xabcbx1a=$this[_0x73f6[102]]()[_0x73f6[87]]()[_0x73f6[86]](_0x73f6[84],_0x73f6[85]);var _0xabcbxc=_0xabcbx15;_0xabcbx16[_0x73f6[19]](_0x73f6[78])[_0x73f6[22]](function (_0xabcbx1b,_0xabcbx1d){classie[_0x73f6[89]](_0xabcbx1d,_0x73f6[103]);classie[_0x73f6[89]](_0xabcbx1d,_0x73f6[104]);if(!--_0xabcbxc){setTimeout(function (){_0xabcbx1e(_0xabcbx16[_0x73f6[19]](_0x73f6[78]),_0xabcbx1a);} ,1);} ;} );return false;} );function _0xabcbx1e(_0xabcbxc,_0xabcbx1c){_0xabcbxc[_0x73f6[22]](function (_0xabcbx1a,_0xabcbx1b){if(classie[_0x73f6[105]](_0xabcbx1b,_0xabcbx1c)){classie[_0x73f6[106]](_0xabcbx1b,_0x73f6[104]);classie[_0x73f6[89]](_0xabcbx1b,_0x73f6[103]);} else {classie[_0x73f6[18]](_0xabcbx1b,_0x73f6[103]);classie[_0x73f6[89]](_0xabcbx1b,_0x73f6[104]);} ;} );} ;_0xabcbx11[_0x73f6[19]](_0x73f6[107])[_0x73f6[73]](_0x73f6[98]);function _0xabcbx10(_0xabcbx1b){var _0xabcbx1a=_0xabcbx1b[_0x73f6[87]]()[_0x73f6[86]](_0x73f6[84],_0x73f6[85]);if(_0xabcbx1b!=_0x73f6[46]){var _0xabcbxc=$(_0x73f6[108]);var _0xabcbx1c=$(_0x73f6[109],{html:_0xabcbx1b,"\x64\x61\x74\x61\x2D\x66\x69\x6C\x74\x65\x72":_0x73f6[110]+_0xabcbx1a,href:_0x73f6[111],"\x63\x6C\x61\x73\x73":_0x73f6[17]})[_0x73f6[69]](_0xabcbxc);_0xabcbxc[_0x73f6[69]](_0xabcbx11);} ;} ;var _0xabcbxe=_0xabcbx16,_0xabcbxa=_0xabcbxe[_0x73f6[112]](_0x73f6[78]),_0xabcbx1f=-1,_0xabcbx20=-1,_0xabcbx21=0,_0xabcbx22=10,_0xabcbx23=$(window),_0xabcbx6,_0xabcbx24=$(_0x73f6[113]),_0xabcbx25={WebkitTransition:_0x73f6[114],MozTransition:_0x73f6[115],OTransition:_0x73f6[116],msTransition:_0x73f6[117],transition:_0x73f6[115]},_0xabcbxb=_0xabcbx25[Modernizr[_0x73f6[119]](_0x73f6[118])],_0xabcbx26=Modernizr[_0x73f6[120]],_0xabcbx27={minHeight:_0xabcbx13[_0x73f6[121]],speed:_0xabcbx13[_0x73f6[122]],easing:_0x73f6[123]};function _0xabcbx28(_0xabcbxc){_0xabcbxa=_0xabcbxa[_0x73f6[18]](_0xabcbxc);_0xabcbxc[_0x73f6[22]](function (){var _0xabcbx1c=$(this);_0xabcbx1c[_0x73f6[30]]({offsetTop:_0xabcbx1c[_0x73f6[125]]()[_0x73f6[124]],height:_0xabcbx1c[_0x73f6[126]]()});} );_0xabcbxf(_0xabcbxc);} ;function _0xabcbx29(_0xabcbxc){_0xabcbxa[_0x73f6[22]](function (){var _0xabcbx1c=$(this);_0xabcbx1c[_0x73f6[30]](_0x73f6[127],_0xabcbx1c[_0x73f6[125]]()[_0x73f6[124]]);if(_0xabcbxc){_0xabcbx1c[_0x73f6[30]](_0x73f6[126],_0xabcbx1c[_0x73f6[126]]());} ;} );} ;function _0xabcbx12(){_0xabcbxf(_0xabcbxa);_0xabcbx23[_0x73f6[5]](_0x73f6[1],function (){_0xabcbx21=0;_0xabcbx20=-1;_0xabcbx29();_0xabcbx8();var _0xabcbxc=$[_0x73f6[30]](this,_0x73f6[128]);if( typeof _0xabcbxc!=_0x73f6[129]){_0xabcbx2a();} ;} );} ;function _0xabcbxf(_0xabcbxc){_0xabcbxc[_0x73f6[5]](_0x73f6[90],_0x73f6[131],function (){_0xabcbx2a();return false;} )[_0x73f6[112]](_0x73f6[92])[_0x73f6[5]](_0x73f6[90],function (_0xabcbx1a){var _0xabcbx1c=$(this)[_0x73f6[101]]();_0xabcbx1c[_0x73f6[99]](_0x73f6[104]);_0xabcbx1f===_0xabcbx1c[_0x73f6[130]]()?_0xabcbx2a($(this)):_0xabcbx5(_0xabcbx1c);return false;} );} ;function _0xabcbx8(){_0xabcbx6={width:_0xabcbx23[_0x73f6[132]](),height:_0xabcbx23[_0x73f6[126]]()};} ;function _0xabcbx5(_0xabcbx1c){_0xabcbx2a();var _0xabcbx1a=$[_0x73f6[30]](this,_0x73f6[128]),_0xabcbxc=_0xabcbx1c[_0x73f6[30]](_0x73f6[127]);_0xabcbx21=0;if( typeof _0xabcbx1a!=_0x73f6[129]){if(_0xabcbx20!==_0xabcbxc){if(_0xabcbxc>_0xabcbx20){_0xabcbx21=_0xabcbx1a[_0x73f6[126]];} ;_0xabcbx2a();} else {_0xabcbx1a[_0x73f6[133]](_0xabcbx1c);return false;} ;} ;_0xabcbx20=_0xabcbxc;_0xabcbx1a=$[_0x73f6[30]](this,_0x73f6[128], new _0xabcbx4(_0xabcbx1c));_0xabcbx1a[_0x73f6[134]]();} ;function _0xabcbx2a(){_0xabcbxa[_0x73f6[19]](_0x73f6[135])[_0x73f6[89]]();_0xabcbx1f=-1;var _0xabcbxc=$[_0x73f6[30]](this,_0x73f6[128]);if( typeof _0xabcbxc==_0x73f6[129]){} else {_0xabcbxc[_0x73f6[136]]();} ;$[_0x73f6[137]](this,_0x73f6[128]);} ;function _0xabcbx4(_0xabcbxc){this[_0x73f6[138]]=_0xabcbxc;this[_0x73f6[139]]=this[_0x73f6[138]][_0x73f6[130]]();this[_0x73f6[140]]();this[_0x73f6[133]]();} ;_0xabcbx4[_0x73f6[141]]={create:function (){this[_0x73f6[142]]=$(_0x73f6[143]);this[_0x73f6[144]]=$(_0x73f6[145]);this[_0x73f6[146]]=$(_0x73f6[147]);this[_0x73f6[148]]=$(_0x73f6[149]);this[_0x73f6[150]]=$(_0x73f6[151])[_0x73f6[68]](this.$title,this.$description,this.$detailButtonList);this[_0x73f6[152]]=$(_0x73f6[153]);this[_0x73f6[154]]=$(_0x73f6[155])[_0x73f6[68]](this.$loading);this[_0x73f6[156]]=$(_0x73f6[157]);this[_0x73f6[158]]=$(_0x73f6[159])[_0x73f6[68]](this.$closePreview,this.$fullimage,this.$details);this[_0x73f6[160]]=$(_0x73f6[161])[_0x73f6[68]](this.$previewInner);this[_0x73f6[138]][_0x73f6[68]]($(_0x73f6[162]));this[_0x73f6[138]][_0x73f6[68]](this[_0x73f6[163]]());if(_0xabcbx26){this[_0x73f6[164]]();} ;} ,update:function (_0xabcbx1a){if(_0xabcbx1a){this[_0x73f6[138]]=_0xabcbx1a;} ;if(_0xabcbx1f!==-1){var _0xabcbx2b=_0xabcbxa[_0x73f6[165]](_0xabcbx1f);_0xabcbx2b[_0x73f6[99]](_0x73f6[166]);this[_0x73f6[138]][_0x73f6[73]](_0x73f6[166]);this[_0x73f6[167]]();} ;_0xabcbx1f=this[_0x73f6[138]][_0x73f6[130]]();if( typeof _0xabcbx13[_0x73f6[48]][_0xabcbx1f]===_0x73f6[129]){} else {eldata=_0xabcbx13[_0x73f6[48]][_0xabcbx1f];this[_0x73f6[142]][_0x73f6[50]](eldata[_0x73f6[66]]);this[_0x73f6[144]][_0x73f6[50]](eldata[_0x73f6[168]]);this[_0x73f6[148]][_0x73f6[50]](_0x73f6[46]);urlList=eldata[_0x73f6[169]];if(urlList[_0x73f6[23]]>0){for(_0xabcbx18=0;_0xabcbx18<urlList[_0x73f6[23]];_0xabcbx18++){var _0xabcbxc=$(_0x73f6[58]);_0xabcbxc[_0x73f6[73]](_0x73f6[170]);if(_0xabcbx18==0){_0xabcbxc[_0x73f6[73]](_0x73f6[171]);} ;_0xabcbxc[_0x73f6[57]](_0x73f6[59],urlList[_0xabcbx18][_0x73f6[172]]);_0xabcbxc[_0x73f6[50]](urlList[_0xabcbx18][_0x73f6[66]]);this[_0x73f6[148]][_0x73f6[68]](_0xabcbxc);} ;} ;var _0xabcbx1c=this;if( typeof _0xabcbx1c[_0x73f6[173]]!=_0x73f6[129]){_0xabcbx1c[_0x73f6[173]][_0x73f6[89]]();} ;glarge=eldata[_0x73f6[64]];gthumbs=eldata[_0x73f6[62]];if(glarge[_0x73f6[23]]==gthumbs[_0x73f6[23]]&&glarge[_0x73f6[23]]>0){var _0xabcbx1d=$(_0x73f6[174]);for(_0xabcbx18=0;_0xabcbx18<gthumbs[_0x73f6[23]];_0xabcbx18++){var _0xabcbx2c=$(_0x73f6[52]);var _0xabcbxc=$(_0x73f6[175]);var _0xabcbx1b=$(_0x73f6[61]);_0xabcbx1b[_0x73f6[73]](_0x73f6[176]);if(_0xabcbx18==0){_0xabcbx1b[_0x73f6[73]](_0x73f6[177]);} ;_0xabcbx1b[_0x73f6[57]](_0x73f6[27],gthumbs[_0xabcbx18]);_0xabcbx1b[_0x73f6[57]](_0x73f6[178],glarge[_0xabcbx18]);_0xabcbxc[_0x73f6[68]](_0xabcbx1b);_0xabcbx2c[_0x73f6[68]](_0xabcbxc);_0xabcbx1d[_0x73f6[68]](_0xabcbx2c);} ;_0xabcbx1d[_0x73f6[73]](_0x73f6[179]);_0xabcbx1d[_0x73f6[180]]();var _0xabcbx2d=$(_0x73f6[181]);_0xabcbx2d[_0x73f6[68]](_0xabcbx1d)[_0x73f6[19]](_0x73f6[186])[_0x73f6[42]](_0x73f6[90],function (){_0xabcbx2d[_0x73f6[19]](_0x73f6[182])[_0x73f6[99]](_0x73f6[177]);$(this)[_0x73f6[73]](_0x73f6[177]);$largePhoto=$(this)[_0x73f6[30]](_0x73f6[64]);$(_0x73f6[61])[_0x73f6[185]](function (){_0xabcbx1c[_0x73f6[154]][_0x73f6[19]](_0x73f6[16])[_0x73f6[184]](500,function (){$(this)[_0x73f6[183]](500)[_0x73f6[57]](_0x73f6[27],$largePhoto);} );} )[_0x73f6[57]](_0x73f6[27],$largePhoto);} );_0xabcbx1c[_0x73f6[150]][_0x73f6[68]](_0x73f6[187]);_0xabcbx1c[_0x73f6[150]][_0x73f6[68]](_0xabcbx2d);} else {_0xabcbx1c[_0x73f6[150]][_0x73f6[19]](_0x73f6[188])[_0x73f6[89]]();} ;if(_0xabcbx1c[_0x73f6[154]][_0x73f6[190]](_0x73f6[189])){this[_0x73f6[152]][_0x73f6[191]]();$(_0x73f6[61])[_0x73f6[185]](function (){var _0xabcbx2e=$(this);if(_0xabcbx2e[_0x73f6[57]](_0x73f6[27])===_0xabcbx1c[_0x73f6[138]][_0x73f6[112]](_0x73f6[92])[_0x73f6[19]](_0x73f6[16])[_0x73f6[30]](_0x73f6[192])){_0xabcbx1c[_0x73f6[152]][_0x73f6[193]]();_0xabcbx1c[_0x73f6[154]][_0x73f6[19]](_0x73f6[16])[_0x73f6[89]]();_0xabcbx1c[_0x73f6[173]]=_0xabcbx2e[_0x73f6[183]](350);_0xabcbx1c[_0x73f6[154]][_0x73f6[68]](_0xabcbx1c.$largeImg);} ;} )[_0x73f6[57]](_0x73f6[27],eldata[_0x73f6[64]][0]);} ;} ;} ,open:function (){setTimeout($[_0x73f6[195]](function (){this[_0x73f6[194]]();this[_0x73f6[167]]();} ,this),25);} ,close:function (){var _0xabcbxc=this,_0xabcbx1c=function (){if(_0xabcbx26){$(this)[_0x73f6[6]](_0xabcbxb);} ;_0xabcbxc[_0x73f6[138]][_0x73f6[99]](_0x73f6[166]);_0xabcbxc[_0x73f6[160]][_0x73f6[89]]();} ;setTimeout($[_0x73f6[195]](function (){if( typeof this[_0x73f6[173]]!==_0x73f6[129]){this[_0x73f6[173]][_0x73f6[184]](_0x73f6[196]);} ;this[_0x73f6[160]][_0x73f6[97]](_0x73f6[126],0);var _0xabcbx1a=_0xabcbxa[_0x73f6[165]](this[_0x73f6[139]]);_0xabcbx1a[_0x73f6[97]](_0x73f6[126],_0xabcbx1a[_0x73f6[30]](_0x73f6[126]))[_0x73f6[5]](_0xabcbxb,_0xabcbx1c);if(!_0xabcbx26){_0xabcbx1c[_0x73f6[26]]();} ;} ,this),25);return false;} ,calcHeight:function (){var _0xabcbx1c=_0xabcbx6[_0x73f6[126]]-this[_0x73f6[138]][_0x73f6[30]](_0x73f6[126])-_0xabcbx22,_0xabcbxc=_0xabcbx6[_0x73f6[126]];if(_0xabcbx1c<_0xabcbx27[_0x73f6[197]]){_0xabcbx1c=_0xabcbx27[_0x73f6[197]];_0xabcbxc=_0xabcbx27[_0x73f6[197]]+this[_0x73f6[138]][_0x73f6[30]](_0x73f6[126])+_0xabcbx22;} ;this[_0x73f6[126]]=_0xabcbx1c;this[_0x73f6[198]]=_0xabcbxc;} ,setHeights:function (){var _0xabcbxc=this,_0xabcbx1c=function (){if(_0xabcbx26){_0xabcbxc[_0x73f6[138]][_0x73f6[6]](_0xabcbxb);} ;_0xabcbxc[_0x73f6[138]][_0x73f6[73]](_0x73f6[166]);} ;this[_0x73f6[199]]();this[_0x73f6[160]][_0x73f6[97]](_0x73f6[126],this[_0x73f6[126]]);this[_0x73f6[138]][_0x73f6[97]](_0x73f6[126],this[_0x73f6[198]])[_0x73f6[5]](_0xabcbxb,_0xabcbx1c);if(!_0xabcbx26){_0xabcbx1c[_0x73f6[26]]();} ;} ,positionPreview:function (){var _0xabcbx1c=this[_0x73f6[138]][_0x73f6[30]](_0x73f6[127]),_0xabcbxc=this[_0x73f6[160]][_0x73f6[125]]()[_0x73f6[124]]-_0xabcbx21,_0xabcbx1a=this[_0x73f6[126]]+this[_0x73f6[138]][_0x73f6[30]](_0x73f6[126])+_0xabcbx22<=_0xabcbx6[_0x73f6[126]]?_0xabcbx1c:this[_0x73f6[126]]<_0xabcbx6[_0x73f6[126]]?_0xabcbxc-(_0xabcbx6[_0x73f6[126]]-this[_0x73f6[126]]):_0xabcbxc;_0xabcbx24[_0x73f6[104]]({scrollTop:_0xabcbx1a},_0xabcbx27[_0x73f6[200]]);} ,setTransition:function (){this[_0x73f6[160]][_0x73f6[97]](_0x73f6[118],_0x73f6[201]+_0xabcbx27[_0x73f6[200]]+_0x73f6[202]+_0xabcbx27[_0x73f6[203]]);this[_0x73f6[138]][_0x73f6[97]](_0x73f6[118],_0x73f6[201]+_0xabcbx27[_0x73f6[200]]+_0x73f6[202]+_0xabcbx27[_0x73f6[203]]);} ,getEl:function (){return this[_0x73f6[160]];} };_0xabcbxe[_0x73f6[12]](function (){_0xabcbx29(true);_0xabcbx8();_0xabcbx12();} );} ;} );(function (_0xabcbx7,_0xabcbx8,_0xabcbx6){_0xabcbx7[_0x73f6[204]]=function (_0xabcbx4,_0xabcbx10){this[_0x73f6[205]]=_0xabcbx7(_0xabcbx10);this._init(_0xabcbx4);} ;_0xabcbx7[_0x73f6[204]][_0x73f6[206]]={speed:300,easing:_0x73f6[123],hoverDelay:0,inverse:false};_0xabcbx7[_0x73f6[204]][_0x73f6[141]]={_init:function (_0xabcbx4){this[_0x73f6[207]]=_0xabcbx7[_0x73f6[47]](true,{},_0xabcbx7[_0x73f6[204]][_0x73f6[206]],_0xabcbx4);this[_0x73f6[208]]=_0x73f6[209]+this[_0x73f6[207]][_0x73f6[200]]+_0x73f6[202]+this[_0x73f6[207]][_0x73f6[203]];this[_0x73f6[210]]=Modernizr[_0x73f6[120]];this._loadEvents();} ,_loadEvents:function (){var _0xabcbx4=this;this[_0x73f6[205]][_0x73f6[5]](_0x73f6[211],function (_0xabcbxc){var _0xabcbxd=_0xabcbx7(this),_0xabcbx10=_0xabcbxd[_0x73f6[19]](_0x73f6[212]),_0xabcbxb=_0xabcbx4._getDir(_0xabcbxd,{x:_0xabcbxc[_0x73f6[213]],y:_0xabcbxc[_0x73f6[214]]}),_0xabcbxa=_0xabcbx4._getStyle(_0xabcbxb);if(_0xabcbxc[_0x73f6[7]]===_0x73f6[215]){_0xabcbx10[_0x73f6[193]]()[_0x73f6[97]](_0xabcbxa[_0x73f6[216]]);clearTimeout(_0xabcbx4[_0x73f6[217]]);_0xabcbx4[_0x73f6[217]]=setTimeout(function (){_0xabcbx10[_0x73f6[191]](0,function (){var _0xabcbxe=_0xabcbx7(this);if(_0xabcbx4[_0x73f6[210]]){_0xabcbxe[_0x73f6[97]](_0x73f6[118],_0xabcbx4[_0x73f6[208]]);} ;_0xabcbx4._applyAnimation(_0xabcbxe,_0xabcbxa[_0x73f6[218]],_0xabcbx4[_0x73f6[207]][_0x73f6[200]]);} );} ,_0xabcbx4[_0x73f6[207]][_0x73f6[75]]);} else {if(_0xabcbx4[_0x73f6[210]]){_0xabcbx10[_0x73f6[97]](_0x73f6[118],_0xabcbx4[_0x73f6[208]]);} ;clearTimeout(_0xabcbx4[_0x73f6[217]]);_0xabcbx4._applyAnimation(_0xabcbx10,_0xabcbxa[_0x73f6[216]],_0xabcbx4[_0x73f6[207]][_0x73f6[200]]);} ;} );} ,_getDir:function (_0xabcbxd,_0xabcbxe){var _0xabcbx10=_0xabcbxd[_0x73f6[132]](),_0xabcbxc=_0xabcbxd[_0x73f6[126]](),_0xabcbx4=(_0xabcbxe[_0x73f6[219]]-_0xabcbxd[_0x73f6[125]]()[_0x73f6[220]]-(_0xabcbx10/2))*(_0xabcbx10>_0xabcbxc?(_0xabcbxc/_0xabcbx10):1),_0xabcbxf=(_0xabcbxe[_0x73f6[221]]-_0xabcbxd[_0x73f6[125]]()[_0x73f6[124]]-(_0xabcbxc/2))*(_0xabcbxc>_0xabcbx10?(_0xabcbx10/_0xabcbxc):1),_0xabcbxb=Math[_0x73f6[224]]((((Math[_0x73f6[222]](_0xabcbxf,_0xabcbx4)*(180/Math[_0x73f6[223]]))+180)/90)+3)%4;return _0xabcbxb;} ,_getStyle:function (_0xabcbxe){var _0xabcbxd,_0xabcbxf,_0xabcbxc={left:_0x73f6[225],top:_0x73f6[226]},_0xabcbx4={left:_0x73f6[225],top:_0x73f6[227]},_0xabcbxa={left:_0x73f6[226],top:_0x73f6[225]},_0xabcbx10={left:_0x73f6[227],top:_0x73f6[225]},_0xabcbx11={top:_0x73f6[225]},_0xabcbxb={left:_0x73f6[225]};switch(_0xabcbxe){case 0:_0xabcbxd=!this[_0x73f6[207]][_0x73f6[228]]?_0xabcbxc:_0xabcbx4;_0xabcbxf=_0xabcbx11;break ;;case 1:_0xabcbxd=!this[_0x73f6[207]][_0x73f6[228]]?_0xabcbx10:_0xabcbxa;_0xabcbxf=_0xabcbxb;break ;;case 2:_0xabcbxd=!this[_0x73f6[207]][_0x73f6[228]]?_0xabcbx4:_0xabcbxc;_0xabcbxf=_0xabcbx11;break ;;case 3:_0xabcbxd=!this[_0x73f6[207]][_0x73f6[228]]?_0xabcbxa:_0xabcbx10;_0xabcbxf=_0xabcbxb;break ;;} ;return {from:_0xabcbxd,to:_0xabcbxf};} ,_applyAnimation:function (_0xabcbx10,_0xabcbx4,_0xabcbxd){_0xabcbx7[_0x73f6[13]][_0x73f6[229]]=this[_0x73f6[210]]?_0xabcbx7[_0x73f6[13]][_0x73f6[97]]:_0xabcbx7[_0x73f6[13]][_0x73f6[104]];_0xabcbx10[_0x73f6[231]]()[_0x73f6[229]](_0xabcbx4,_0xabcbx7[_0x73f6[47]](true,[],{duration:_0xabcbxd+_0x73f6[230]}));} };var _0xabcbx5=function (_0xabcbx4){if(_0xabcbx8[_0x73f6[232]]){_0xabcbx8[_0x73f6[232]][_0x73f6[41]](_0xabcbx4);} ;} ;_0xabcbx7[_0x73f6[13]][_0x73f6[77]]=function (_0xabcbxd){var _0xabcbx4=_0xabcbx7[_0x73f6[30]](this,_0x73f6[77]);if( typeof _0xabcbxd===_0x73f6[233]){var _0xabcbx10=Array[_0x73f6[141]][_0x73f6[234]][_0x73f6[26]](arguments,1);this[_0x73f6[22]](function (){if(!_0xabcbx4){_0xabcbx5(_0x73f6[235]+_0xabcbxd+_0x73f6[236]);return ;} ;if(!_0xabcbx7[_0x73f6[14]](_0xabcbx4[_0xabcbxd])||_0xabcbxd[_0x73f6[237]](0)===_0x73f6[238]){_0xabcbx5(_0x73f6[239]+_0xabcbxd+_0x73f6[240]);return ;} ;_0xabcbx4[_0xabcbxd][_0x73f6[8]](_0xabcbx4,_0xabcbx10);} );} else {this[_0x73f6[22]](function (){if(_0xabcbx4){_0xabcbx4._init();} else {_0xabcbx4=_0xabcbx7[_0x73f6[30]](this,_0x73f6[77], new _0xabcbx7.HoverDir(_0xabcbxd,this));} ;} );} ;return _0xabcbx4;} ;} )(jQuery,window);(function (_0xabcbxd,_0xabcbxa,_0xabcbx4){var _0xabcbx5=_0xabcbxd[_0x73f6[0]],_0xabcbx8,_0xabcbxb;_0xabcbx8=_0xabcbx5[_0x73f6[2]][_0x73f6[1]]={setup:function (){_0xabcbxd(this)[_0x73f6[5]](_0x73f6[3],_0xabcbx8[_0x73f6[4]]);} ,teardown:function (){_0xabcbxd(this)[_0x73f6[6]](_0x73f6[3],_0xabcbx8[_0x73f6[4]]);} ,handler:function (_0xabcbx16,_0xabcbxe){var _0xabcbx12=this,_0xabcbx11=arguments,_0xabcbxf=function (){_0xabcbx16[_0x73f6[7]]=_0x73f6[1];_0xabcbx5[_0x73f6[9]][_0x73f6[8]](_0xabcbx12,_0xabcbx11);} ;if(_0xabcbxb){clearTimeout(_0xabcbxb);} ;_0xabcbxe?_0xabcbxf():_0xabcbxb=setTimeout(_0xabcbxf,_0xabcbx8[_0x73f6[10]]);} ,threshold:150};var _0xabcbx7=_0x73f6[11];_0xabcbxd[_0x73f6[13]][_0x73f6[12]]=function (_0xabcbx29){var _0xabcbx16=this,_0xabcbx20=_0xabcbxd[_0x73f6[14]](_0xabcbxd.Deferred)?_0xabcbxd.Deferred():0,_0xabcbx26=_0xabcbxd[_0x73f6[14]](_0xabcbx20[_0x73f6[15]]),_0xabcbxf=_0xabcbx16[_0x73f6[19]](_0x73f6[16])[_0x73f6[18]](_0xabcbx16[_0x73f6[17]](_0x73f6[16])),_0xabcbx11=[],_0xabcbx22=[],_0xabcbx12=[];if(_0xabcbxd[_0x73f6[20]](_0xabcbx29)){_0xabcbxd[_0x73f6[22]](_0xabcbx29,function (_0xabcbx14,_0xabcbx28){if(_0xabcbx14===_0x73f6[21]){_0xabcbx29=_0xabcbx28;} else {if(_0xabcbx20){_0xabcbx20[_0xabcbx14](_0xabcbx28);} ;} ;} );} ;function _0xabcbx1e(){var _0xabcbx14=_0xabcbxd(_0xabcbx22),_0xabcbx28=_0xabcbxd(_0xabcbx12);if(_0xabcbx20){if(_0xabcbx12[_0x73f6[23]]){_0xabcbx20[_0x73f6[24]](_0xabcbxf,_0xabcbx14,_0xabcbx28);} else {_0xabcbx20[_0x73f6[25]](_0xabcbxf);} ;} ;if(_0xabcbxd[_0x73f6[14]](_0xabcbx29)){_0xabcbx29[_0x73f6[26]](_0xabcbx16,_0xabcbxf,_0xabcbx14,_0xabcbx28);} ;} ;function _0xabcbxe(_0xabcbx14,_0xabcbx28){if(_0xabcbx14[_0x73f6[27]]===_0xabcbx7||_0xabcbxd[_0x73f6[28]](_0xabcbx14,_0xabcbx11)!==-1){return ;} ;_0xabcbx11[_0x73f6[29]](_0xabcbx14);if(_0xabcbx28){_0xabcbx12[_0x73f6[29]](_0xabcbx14);} else {_0xabcbx22[_0x73f6[29]](_0xabcbx14);} ;_0xabcbxd[_0x73f6[30]](_0xabcbx14,_0x73f6[12],{isBroken:_0xabcbx28,src:_0xabcbx14[_0x73f6[27]]});if(_0xabcbx26){_0xabcbx20[_0x73f6[31]](_0xabcbxd(_0xabcbx14),[_0xabcbx28,_0xabcbxf,_0xabcbxd(_0xabcbx22),_0xabcbxd(_0xabcbx12)]);} ;if(_0xabcbxf[_0x73f6[23]]===_0xabcbx11[_0x73f6[23]]){setTimeout(_0xabcbx1e);_0xabcbxf[_0x73f6[33]](_0x73f6[32]);} ;} ;if(!_0xabcbxf[_0x73f6[23]]){_0xabcbx1e();} else {_0xabcbxf[_0x73f6[42]](_0x73f6[39],function (_0xabcbx14){_0xabcbxe(_0xabcbx14[_0x73f6[40]],_0xabcbx14[_0x73f6[7]]===_0x73f6[41]);} )[_0x73f6[22]](function (_0xabcbx14,_0xabcbx23){var _0xabcbx19=_0xabcbx23[_0x73f6[27]];var _0xabcbx28=_0xabcbxd[_0x73f6[30]](_0xabcbx23,_0x73f6[12]);if(_0xabcbx28&&_0xabcbx28[_0x73f6[27]]===_0xabcbx19){_0xabcbxe(_0xabcbx23,_0xabcbx28[_0x73f6[34]]);return ;} ;if(_0xabcbx23[_0x73f6[35]]&&_0xabcbx23[_0x73f6[36]]!==_0xabcbx4){_0xabcbxe(_0xabcbx23,_0xabcbx23[_0x73f6[36]]===0||_0xabcbx23[_0x73f6[37]]===0);return ;} ;if(_0xabcbx23[_0x73f6[38]]||_0xabcbx23[_0x73f6[35]]){_0xabcbx23[_0x73f6[27]]=_0xabcbx7;_0xabcbx23[_0x73f6[27]]=_0xabcbx19;} ;} );} ;return _0xabcbx20?_0xabcbx20[_0x73f6[43]](_0xabcbx16):_0xabcbx16;} ;var _0xabcbx6=_0xabcbxd(_0xabcbxa),_0xabcbx10=_0xabcbxa[_0x73f6[241]];_0xabcbxd[_0x73f6[242]]=function (_0xabcbxe,_0xabcbxf){this[_0x73f6[205]]=_0xabcbxd(_0xabcbxf);this._init(_0xabcbxe);} ;_0xabcbxd[_0x73f6[242]][_0x73f6[206]]={orientation:_0x73f6[243],speed:500,easing:_0x73f6[244],minItems:3,start:0,onClick:function (_0xabcbx11,_0xabcbxe,_0xabcbxf){return false;} ,onReady:function (){return false;} ,onBeforeSlide:function (){return false;} ,onAfterSlide:function (){return false;} };_0xabcbxd[_0x73f6[242]][_0x73f6[141]]={_init:function (_0xabcbxf){this[_0x73f6[207]]=_0xabcbxd[_0x73f6[47]](true,{},_0xabcbxd[_0x73f6[242]][_0x73f6[206]],_0xabcbxf);var _0xabcbxe=this,_0xabcbx11={WebkitTransition:_0x73f6[114],MozTransition:_0x73f6[115],OTransition:_0x73f6[116],msTransition:_0x73f6[117],transition:_0x73f6[115]};this[_0x73f6[245]]=_0xabcbx11[_0xabcbx10[_0x73f6[119]](_0x73f6[118])];this[_0x73f6[210]]=_0xabcbx10[_0x73f6[120]]&&_0xabcbx10[_0x73f6[246]];this[_0x73f6[98]]=this[_0x73f6[207]][_0x73f6[247]];this[_0x73f6[248]]=false;this[_0x73f6[249]]=this[_0x73f6[205]][_0x73f6[112]](_0x73f6[78]);this[_0x73f6[250]]=this[_0x73f6[249]][_0x73f6[23]];if(this[_0x73f6[250]]===0){return false;} ;this._validate();this[_0x73f6[249]][_0x73f6[251]]();this[_0x73f6[205]][_0x73f6[252]]();this[_0x73f6[205]][_0x73f6[68]](this.$items);this[_0x73f6[205]][_0x73f6[256]](_0x73f6[253]+this[_0x73f6[207]][_0x73f6[254]]+_0x73f6[255]);this[_0x73f6[257]]=false;this[_0x73f6[258]]=setTimeout(function (){_0xabcbxe._addTransition();} ,100);this[_0x73f6[205]][_0x73f6[12]](function (){_0xabcbxe[_0x73f6[205]][_0x73f6[191]]();_0xabcbxe._layout();_0xabcbxe._configure();if(_0xabcbxe[_0x73f6[257]]){_0xabcbxe._removeTransition();_0xabcbxe._slideToItem(_0xabcbxe[_0x73f6[98]]);_0xabcbxe[_0x73f6[205]][_0x73f6[5]](_0xabcbxe[_0x73f6[245]],function (){_0xabcbxe[_0x73f6[205]][_0x73f6[6]](_0xabcbxe[_0x73f6[245]]);_0xabcbxe._setWrapperSize();_0xabcbxe._addTransition();_0xabcbxe._initEvents();} );} else {clearTimeout(_0xabcbxe[_0x73f6[258]]);_0xabcbxe._setWrapperSize();_0xabcbxe._initEvents();_0xabcbxe._slideToItem(_0xabcbxe[_0x73f6[98]]);setTimeout(function (){_0xabcbxe._addTransition();} ,25);} ;_0xabcbxe[_0x73f6[207]][_0x73f6[259]]();} );} ,_validate:function (){if(this[_0x73f6[207]][_0x73f6[200]]<0){this[_0x73f6[207]][_0x73f6[200]]=500;} ;if(this[_0x73f6[207]][_0x73f6[260]]<1||this[_0x73f6[207]][_0x73f6[260]]>this[_0x73f6[250]]){this[_0x73f6[207]][_0x73f6[260]]=1;} ;if(this[_0x73f6[207]][_0x73f6[247]]<0||this[_0x73f6[207]][_0x73f6[247]]>this[_0x73f6[250]]-1){this[_0x73f6[207]][_0x73f6[247]]=0;} ;if(this[_0x73f6[207]][_0x73f6[254]]!=_0x73f6[243]&&this[_0x73f6[207]][_0x73f6[254]]!=_0x73f6[261]){this[_0x73f6[207]][_0x73f6[254]]=_0x73f6[243];} ;} ,_layout:function (){this[_0x73f6[205]][_0x73f6[256]](_0x73f6[262]);this[_0x73f6[263]]=this[_0x73f6[205]][_0x73f6[101]]();this[_0x73f6[264]]=this[_0x73f6[263]][_0x73f6[101]]()[_0x73f6[99]](_0x73f6[265]);var _0xabcbxe=this[_0x73f6[249]][_0x73f6[19]](_0x73f6[266]);this[_0x73f6[267]]={width:_0xabcbxe[_0x73f6[268]](true),height:_0xabcbxe[_0x73f6[269]](true)};this._setItemsSize();this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?this[_0x73f6[205]][_0x73f6[97]](_0x73f6[270],this[_0x73f6[267]][_0x73f6[126]]):this[_0x73f6[205]][_0x73f6[97]](_0x73f6[126],this[_0x73f6[207]][_0x73f6[260]]*this[_0x73f6[267]][_0x73f6[126]]);this._addControls();} ,_addTransition:function (){if(this[_0x73f6[210]]){this[_0x73f6[205]][_0x73f6[97]](_0x73f6[118],_0x73f6[209]+this[_0x73f6[207]][_0x73f6[200]]+_0x73f6[202]+this[_0x73f6[207]][_0x73f6[203]]);} ;this[_0x73f6[257]]=true;} ,_removeTransition:function (){if(this[_0x73f6[210]]){this[_0x73f6[205]][_0x73f6[97]](_0x73f6[118],_0x73f6[271]);} ;this[_0x73f6[257]]=false;} ,_addControls:function (){var _0xabcbxe=this;this[_0x73f6[272]]=_0xabcbxd(_0x73f6[273])[_0x73f6[69]](this.$wrapper);this[_0x73f6[274]]=this[_0x73f6[272]][_0x73f6[19]](_0x73f6[277])[_0x73f6[5]](_0x73f6[275],function (_0xabcbxf){_0xabcbxe._slide(_0x73f6[276]);return false;} );this[_0x73f6[278]]=this[_0x73f6[272]][_0x73f6[19]](_0x73f6[280])[_0x73f6[5]](_0x73f6[275],function (_0xabcbxf){_0xabcbxe._slide(_0x73f6[279]);return false;} );} ,_setItemsSize:function (){var _0xabcbxe=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?(Math[_0x73f6[281]](this[_0x73f6[263]][_0x73f6[132]]()/this[_0x73f6[207]][_0x73f6[260]])*100)/this[_0x73f6[263]][_0x73f6[132]]():100;this[_0x73f6[249]][_0x73f6[97]]({width:_0xabcbxe+_0x73f6[282],"\x6D\x61\x78\x2D\x77\x69\x64\x74\x68":this[_0x73f6[267]][_0x73f6[132]],"\x6D\x61\x78\x2D\x68\x65\x69\x67\x68\x74":this[_0x73f6[267]][_0x73f6[126]]});if(this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[261]){this[_0x73f6[264]][_0x73f6[97]](_0x73f6[283],this[_0x73f6[267]][_0x73f6[132]]+parseInt(this[_0x73f6[264]][_0x73f6[97]](_0x73f6[284]))+parseInt(this[_0x73f6[264]][_0x73f6[97]](_0x73f6[285])));} ;} ,_setWrapperSize:function (){if(this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[261]){this[_0x73f6[264]][_0x73f6[97]]({height:this[_0x73f6[207]][_0x73f6[260]]*this[_0x73f6[267]][_0x73f6[126]]+parseInt(this[_0x73f6[264]][_0x73f6[97]](_0x73f6[286]))+parseInt(this[_0x73f6[264]][_0x73f6[97]](_0x73f6[287]))});} ;} ,_configure:function (){this[_0x73f6[288]]=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?this[_0x73f6[263]][_0x73f6[132]]()<this[_0x73f6[207]][_0x73f6[260]]*this[_0x73f6[267]][_0x73f6[132]]?this[_0x73f6[207]][_0x73f6[260]]:Math[_0x73f6[281]](this[_0x73f6[263]][_0x73f6[132]]()/this[_0x73f6[267]][_0x73f6[132]]):this[_0x73f6[263]][_0x73f6[126]]()<this[_0x73f6[207]][_0x73f6[260]]*this[_0x73f6[267]][_0x73f6[126]]?this[_0x73f6[207]][_0x73f6[260]]:Math[_0x73f6[281]](this[_0x73f6[263]][_0x73f6[126]]()/this[_0x73f6[267]][_0x73f6[126]]);} ,_initEvents:function (){var _0xabcbxe=this;_0xabcbx6[_0x73f6[5]](_0x73f6[289],function (){_0xabcbxe._setItemsSize();_0xabcbxe._configure();_0xabcbxe._slideToItem(_0xabcbxe[_0x73f6[98]]);} );this[_0x73f6[205]][_0x73f6[5]](this[_0x73f6[245]],function (){_0xabcbxe._onEndTransition();} );if(this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]){this[_0x73f6[205]][_0x73f6[5]]({swipeleft:function (){_0xabcbxe._slide(_0x73f6[279]);} ,swiperight:function (){_0xabcbxe._slide(_0x73f6[276]);} });} else {this[_0x73f6[205]][_0x73f6[5]]({swipeup:function (){_0xabcbxe._slide(_0x73f6[279]);} ,swipedown:function (){_0xabcbxe._slide(_0x73f6[276]);} });} ;this[_0x73f6[205]][_0x73f6[5]](_0x73f6[290],_0x73f6[78],function (_0xabcbx11){var _0xabcbxf=_0xabcbxd(this);_0xabcbxe[_0x73f6[207]][_0x73f6[291]](_0xabcbxf,_0xabcbxf[_0x73f6[130]](),_0xabcbx11);} );} ,_destroy:function (_0xabcbxe){this[_0x73f6[205]][_0x73f6[6]](this[_0x73f6[245]])[_0x73f6[6]](_0x73f6[292]);_0xabcbx6[_0x73f6[6]](_0x73f6[293]);this[_0x73f6[205]][_0x73f6[97]]({"\x6D\x61\x78\x2D\x68\x65\x69\x67\x68\x74":_0x73f6[96],transition:_0x73f6[96]})[_0x73f6[294]](this.$carousel)[_0x73f6[294]](this.$wrapper);this[_0x73f6[249]][_0x73f6[97]]({width:_0x73f6[295],"\x6D\x61\x78\x2D\x77\x69\x64\x74\x68":_0x73f6[96],"\x6D\x61\x78\x2D\x68\x65\x69\x67\x68\x74":_0x73f6[96]});this[_0x73f6[272]][_0x73f6[89]]();this[_0x73f6[264]][_0x73f6[89]]();if(_0xabcbxe){_0xabcbxe[_0x73f6[26]]();} ;} ,_toggleControls:function (_0xabcbxe,_0xabcbxf){if(_0xabcbxf){(_0xabcbxe===_0x73f6[279])?this[_0x73f6[278]][_0x73f6[191]]():this[_0x73f6[274]][_0x73f6[191]]();} else {(_0xabcbxe===_0x73f6[279])?this[_0x73f6[278]][_0x73f6[193]]():this[_0x73f6[274]][_0x73f6[193]]();} ;} ,_slide:function (_0xabcbxf,_0xabcbx12){if(this[_0x73f6[248]]){return false;} ;this[_0x73f6[207]][_0x73f6[296]]();this[_0x73f6[248]]=true;var _0xabcbx20=this,_0xabcbxe=this[_0x73f6[297]]||0,_0xabcbx22=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?this[_0x73f6[249]][_0x73f6[268]](true):this[_0x73f6[249]][_0x73f6[269]](true),_0xabcbx16=this[_0x73f6[250]]*_0xabcbx22,_0xabcbx11=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?this[_0x73f6[263]][_0x73f6[132]]():this[_0x73f6[263]][_0x73f6[126]]();if(_0xabcbx12===_0xabcbx4){var _0xabcbx1e=this[_0x73f6[288]]*_0xabcbx22;if(_0xabcbx1e<0){return false;} ;if(_0xabcbxf===_0x73f6[279]&&_0xabcbx16-(Math[_0x73f6[298]](_0xabcbxe)+_0xabcbx1e)<_0xabcbx11){_0xabcbx1e=_0xabcbx16-(Math[_0x73f6[298]](_0xabcbxe)+_0xabcbx11);this._toggleControls(_0x73f6[279],false);this._toggleControls(_0x73f6[276],true);} else {if(_0xabcbxf===_0x73f6[276]&&Math[_0x73f6[298]](_0xabcbxe)-_0xabcbx1e<0){_0xabcbx1e=Math[_0x73f6[298]](_0xabcbxe);this._toggleControls(_0x73f6[279],true);this._toggleControls(_0x73f6[276],false);} else {var _0xabcbx26=_0xabcbxf===_0x73f6[279]?Math[_0x73f6[298]](_0xabcbxe)+Math[_0x73f6[298]](_0xabcbx1e):Math[_0x73f6[298]](_0xabcbxe)-Math[_0x73f6[298]](_0xabcbx1e);_0xabcbx26>0?this._toggleControls(_0x73f6[276],true):this._toggleControls(_0x73f6[276],false);_0xabcbx26<_0xabcbx16-_0xabcbx11?this._toggleControls(_0x73f6[279],true):this._toggleControls(_0x73f6[279],false);} ;} ;_0xabcbx12=_0xabcbxf===_0x73f6[279]?_0xabcbxe-_0xabcbx1e:_0xabcbxe+_0xabcbx1e;} else {var _0xabcbx1e=Math[_0x73f6[298]](_0xabcbx12);if(Math[_0x73f6[299]](_0xabcbx16,_0xabcbx11)-_0xabcbx1e<_0xabcbx11){_0xabcbx12=-(Math[_0x73f6[299]](_0xabcbx16,_0xabcbx11)-_0xabcbx11);} ;_0xabcbx1e>0?this._toggleControls(_0x73f6[276],true):this._toggleControls(_0x73f6[276],false);Math[_0x73f6[299]](_0xabcbx16,_0xabcbx11)-_0xabcbx11>_0xabcbx1e?this._toggleControls(_0x73f6[279],true):this._toggleControls(_0x73f6[279],false);} ;this[_0x73f6[297]]=_0xabcbx12;if(_0xabcbxe===_0xabcbx12){this._onEndTransition();return false;} ;if(this[_0x73f6[210]]){this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?this[_0x73f6[205]][_0x73f6[97]](_0x73f6[300],_0x73f6[301]+_0xabcbx12+_0x73f6[302]):this[_0x73f6[205]][_0x73f6[97]](_0x73f6[300],_0x73f6[303]+_0xabcbx12+_0x73f6[302]);} else {_0xabcbxd[_0x73f6[13]][_0x73f6[229]]=this[_0x73f6[257]]?_0xabcbxd[_0x73f6[13]][_0x73f6[104]]:_0xabcbxd[_0x73f6[13]][_0x73f6[97]];var _0xabcbx29=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?{left:_0xabcbx12}:{top:_0xabcbx12};this[_0x73f6[205]][_0x73f6[231]]()[_0x73f6[229]](_0xabcbx29,_0xabcbxd[_0x73f6[47]](true,[],{duration:this[_0x73f6[207]][_0x73f6[200]],complete:function (){_0xabcbx20._onEndTransition();} }));} ;if(!this[_0x73f6[257]]){this._onEndTransition();} ;} ,_onEndTransition:function (){this[_0x73f6[248]]=false;this[_0x73f6[207]][_0x73f6[304]]();} ,_slideTo:function (_0xabcbx16){var _0xabcbx16=_0xabcbx16||this[_0x73f6[98]],_0xabcbx12=Math[_0x73f6[298]](this[_0x73f6[297]])||0,_0xabcbx11=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?this[_0x73f6[249]][_0x73f6[268]](true):this[_0x73f6[249]][_0x73f6[269]](true),_0xabcbxf=_0xabcbx12+this[_0x73f6[263]][_0x73f6[132]](),_0xabcbxe=Math[_0x73f6[298]](_0xabcbx16*_0xabcbx11);if(_0xabcbxe+_0xabcbx11>_0xabcbxf||_0xabcbxe<_0xabcbx12){this._slideToItem(_0xabcbx16);} ;} ,_slideToItem:function (_0xabcbxf){var _0xabcbxe=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?_0xabcbxf*this[_0x73f6[249]][_0x73f6[268]](true):_0xabcbxf*this[_0x73f6[249]][_0x73f6[269]](true);this._slide(_0x73f6[46],-_0xabcbxe);} ,add:function (_0xabcbx12){var _0xabcbxe=this,_0xabcbx11=this[_0x73f6[98]],_0xabcbxf=this[_0x73f6[249]][_0x73f6[165]](this[_0x73f6[98]]);this[_0x73f6[249]]=this[_0x73f6[205]][_0x73f6[112]](_0x73f6[78]);this[_0x73f6[250]]=this[_0x73f6[249]][_0x73f6[23]];this[_0x73f6[98]]=_0xabcbxf[_0x73f6[130]]();this._setItemsSize();this._configure();this._removeTransition();_0xabcbx11<this[_0x73f6[98]]?this._slideToItem(this[_0x73f6[98]]):this._slide(_0x73f6[279],this[_0x73f6[297]]);setTimeout(function (){_0xabcbxe._addTransition();} ,25);if(_0xabcbx12){_0xabcbx12[_0x73f6[26]]();} ;} ,setCurrent:function (_0xabcbxe,_0xabcbxf){this[_0x73f6[98]]=_0xabcbxe;this._slideTo();if(_0xabcbxf){_0xabcbxf[_0x73f6[26]]();} ;} ,next:function (){self._slide(_0x73f6[279]);} ,previous:function (){self._slide(_0x73f6[276]);} ,slideStart:function (){this._slideTo(0);} ,slideEnd:function (){this._slideTo(this[_0x73f6[250]]-1);} ,destroy:function (_0xabcbxe){this._destroy(_0xabcbxe);} };var _0xabcbxc=function (_0xabcbxe){if(_0xabcbxa[_0x73f6[232]]){_0xabcbxa[_0x73f6[232]][_0x73f6[41]](_0xabcbxe);} ;} ;_0xabcbxd[_0x73f6[13]][_0x73f6[180]]=function (_0xabcbx11){var _0xabcbxe=_0xabcbxd[_0x73f6[30]](this,_0x73f6[180]);if( typeof _0xabcbx11===_0x73f6[233]){var _0xabcbxf=Array[_0x73f6[141]][_0x73f6[234]][_0x73f6[26]](arguments,1);this[_0x73f6[22]](function (){if(!_0xabcbxe){_0xabcbxc(_0x73f6[305]+_0xabcbx11+_0x73f6[236]);return ;} ;if(!_0xabcbxd[_0x73f6[14]](_0xabcbxe[_0xabcbx11])||_0xabcbx11[_0x73f6[237]](0)===_0x73f6[238]){_0xabcbxc(_0x73f6[239]+_0xabcbx11+_0x73f6[306]);return ;} ;_0xabcbxe[_0xabcbx11][_0x73f6[8]](_0xabcbxe,_0xabcbxf);} );} else {this[_0x73f6[22]](function (){if(_0xabcbxe){_0xabcbxe._init();} else {_0xabcbxe=_0xabcbxd[_0x73f6[30]](this,_0x73f6[180], new _0xabcbxd.Elastislide(_0xabcbx11,this));} ;} );} ;return _0xabcbxe;} ;} )(jQuery,window);
/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
var $event = $.event,
$special,
resizeTimeout;

$special = $event.special.debouncedresize = {
    setup: function() {
        $( this ).on( "resize", $special.handler );
    },
    teardown: function() {
        $( this ).off( "resize", $special.handler );
    },
    handler: function( event, execAsap ) {
        // Save the context
        var context = this,
            args = arguments,
            dispatch = function() {
                // set correct event type
                event.type = "debouncedresize";
                $event.dispatch.apply( context, args );
            };

        if ( resizeTimeout ) {
            clearTimeout( resizeTimeout );
        }

        execAsap ?
            dispatch() :
            resizeTimeout = setTimeout( dispatch, $special.threshold );
    },
    threshold: 250
};

// ======================= imagesLoaded Plugin ===============================
// https://github.com/desandro/imagesloaded

// $('#my-container').imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  this is the container

// original: MIT license. Paul Irish. 2010.
// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function( callback ) {
    var $this = this,
        deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
        hasNotify = $.isFunction(deferred.notify),
        $images = $this.find('img').add( $this.filter('img') ),
        loaded = [],
        proper = [],
        broken = [];

    // Register deferred callbacks
    if ($.isPlainObject(callback)) {
        $.each(callback, function (key, value) {
            if (key === 'callback') {
                callback = value;
            } else if (deferred) {
                deferred[key](value);
            }
        });
    }

    function doneLoading() {
        var $proper = $(proper),
            $broken = $(broken);

        if ( deferred ) {
            if ( broken.length ) {
                deferred.reject( $images, $proper, $broken );
            } else {
                deferred.resolve( $images );
            }
        }

        if ( $.isFunction( callback ) ) {
            callback.call( $this, $images, $proper, $broken );
        }
    }

    function imgLoaded( img, isBroken ) {
        // don't proceed if BLANK image, or image is already loaded
        if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
            return;
        }

        // store element in loaded images array
        loaded.push( img );

        // keep track of broken and properly loaded images
        if ( isBroken ) {
            broken.push( img );
        } else {
            proper.push( img );
        }

        // cache image and its state for future calls
        $.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

        // trigger deferred progress method if present
        if ( hasNotify ) {
            deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
        }

        // call doneLoading and clean listeners if all images are loaded
        if ( $images.length === loaded.length ){
            setTimeout( doneLoading );
            $images.unbind( '.imagesLoaded' );
        }
    }

    // if no images, trigger immediately
    if ( !$images.length ) {
        doneLoading();
    } else {
        $images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
            // trigger imgLoaded
            imgLoaded( event.target, event.type === 'error' );
        }).each( function( i, el ) {
            var src = el.src;

            // find out if this image has been already checked for status
            // if it was, and src has not changed, call imgLoaded on it
            var cached = $.data( el, 'imagesLoaded' );
            if ( cached && cached.src === src ) {
                imgLoaded( el, cached.isBroken );
                return;
            }

            // if complete is true and browser supports natural sizes, try
            // to check for image status manually
            if ( el.complete && el.naturalWidth !== undefined ) {
                imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
                return;
            }

            // cached images don't fire load sometimes, so we reset src, but only when
            // dealing with IE, or image is complete (loaded) and failed manual check
            // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
            if ( el.readyState || el.complete ) {
                el.src = BLANK;
                el.src = src;
            }
        });
    }

    return deferred ? deferred.promise( $this ) : $this;
};

/**
 * jquery elastic_grid
 *
 * Copyright 2013, vukhanhtruong
 * http://www.bonchen.net
 */
$(function() {
    $.elastic_grid = {
        version: '1.0'
    };
    $.fn.elastic_grid = function(config){
        config = $.extend({}, {
            items: null,
            filterEffect: '',
            hoverDirection: true,
            hoverDelay: 0,
            hoverInverse: false,
            expandingHeight: 500,
            expandingSpeed: 300,
            callback: function() {}
        }, config);

        // initial container object
        var container = $(this);
        // number of questions
        var numOfItems = config.items.length;
        if(numOfItems == 0){
            return false;
        }

        //initial filter nav
        container.html('<div class="wagwep-container"><nav id="porfolio-nav" class="clearfix"><ul id="portfolio-filter" class="nav nav-tabs clearfix"></ul></nav></div>');

        //initial items
        var gridContent = "";
        var ulObject = $('<ul id="og-grid" class="og-grid"></ul>');
        for (itemIdx = 0; itemIdx < numOfItems; itemIdx++) {
            if(config.items[itemIdx] != undefined){
                var item = config.items[itemIdx];

                //initial new li
                liObject = $('<li></li>');

                //get tags
                tags = item.tags;
                strTag = "";
                for (var i = tags.length - 1; i >= 0; i--) {
                    strTag += ","+tags[i];
                };
                strTag = strTag.substring(1);
                liObject.attr('data-tags', strTag);

                //initial a object
                aObject = $('<a></a>');
                aObject.attr('href', 'javascript:;;');

                //initial default photo
                imgObject = $('<img/>');
                imgObject.attr('src', item.thumbnail[0]);
                imgObject.attr('data-largesrc', item.large[0]);


                //initial hover direction
                spanObject = $('<span></span>');
                spanObject.html(item.title);
                figureObject = $('<figure></figure>');
                figureObject.append(spanObject);

                imgObject.appendTo(aObject);
                figureObject.appendTo(aObject);
                aObject.appendTo(liObject);
                liObject.appendTo(ulObject);
            }
        }
        if(config.filterEffect == ''){
            config.filterEffect = 'moveup';
        }
        ulObject.addClass('effect-'+config.filterEffect);
        ulObject.appendTo(container);
/**************************************************************************
* HOVER DIR
***************************************************************************/
        if(config.hoverDirection == true){
            ulObject.find('li').each( function() {
                $(this).hoverdir({
                    hoverDelay : config.hoverDelay,
                    inverse : config.hoverInverse
                });
            } );
        }

/**************************************************************************
* Tags to filter
***************************************************************************/
    var porfolio_filter = container.find('#portfolio-filter');
    var items = ulObject.find('li'),
    itemsByTags = {};
    numOfTag = 0;

    // Looping though all the li items:

    items.each(function(i){
        var elem = $(this),
        tags = elem.data('tags').split(',');

        // Adding a data-id attribute. Required by the Quicksand plugin:
        elem.attr('data-id',i);

        elem.addClass('all');
        $.each(tags,function(key,value){
            // Removing extra whitespace:
            value = $.trim(value);

            //add class tags to li
            elem.addClass(value.toLowerCase().replace(' ','-'));

            if(!(value in itemsByTags)){
                // Create an empty array to hold this item:
                itemsByTags[value] = [];
                numOfTag++;
            }

            // Each item is added to one array per tag:
            itemsByTags[value].push(elem);
        });

    });

    if(numOfTag > 1){
        // Creating the "Everything" option in the menu:
        createList(config.showAllText);

        // Looping though the arrays in itemsByTags:
        $.each(itemsByTags,function(k,v){
            createList(k);
        });
    }else{
        porfolio_filter.remove();
    }


    porfolio_filter.find('a').bind('click',function(e){
        //close expanding preview
        $grid.find('li.og-expanded').find('a').trigger('click');
        $grid.find('.og-close').trigger('click');

        $this = $(this);
        $this.css('outline','none');
        porfolio_filter.find('.current').removeClass('current');
        $this.parent().addClass('current');

        var filterVal = $this.text().toLowerCase().replace(' ','-');
        var count  = numOfItems;
        ulObject.find('li').each( function(i, el) {
            classie.remove( el, 'hidden' );
            classie.remove( el, 'animate' );
            if(!--count){
                setTimeout( function() {
                    doAnimateItems(ulObject.find('li'), filterVal);
                }, 1);
            }
        });

        return false;
    });

    function doAnimateItems(objectLi, filterVal){
        objectLi.each(function(i, el) {
            if(classie.has( el, filterVal ) ) {
                classie.toggle( el, 'animate' );
                classie.remove( el, 'hidden' );
            }else{
                classie.add( el, 'hidden' );
                classie.remove( el, 'animate' );
            }
        });
    }

    porfolio_filter.find('li:first').addClass('current');

    function createList(text){
        var filter = text.toLowerCase().replace(' ','-');
        // This is a helper function that takes the
        // text of a menu button and array of li items
        if(text != ''){
            var li = $('<li>');
            var a = $('<a>',{
                html: text,
                'data-filter': '.'+filter,
                href:'#',
                'class':'filter',
            }).appendTo(li);

            li.appendTo(porfolio_filter);
        }
    }
/**************************************************************************
* EXPANDING
***************************************************************************/
        // list of items
        var $grid = ulObject,
            // the items
            $items = $grid.children( 'li' ),
            // current expanded item's index
            current = -1,
            // position (top) of the expanded item
            // used to know if the preview will expand in a different row
            previewPos = -1,
            // extra amount of pixels to scroll the window
            scrollExtra = 0,
            // extra margin when expanded (between preview overlay and the next items)
            marginExpanded = 10,
            $window = $( window ), winsize,
            $body = $( 'html, body' ),
            // transitionend events
            transEndEventNames = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition' : 'transitionend',
                'OTransition' : 'oTransitionEnd',
                'msTransition' : 'MSTransitionEnd',
                'transition' : 'transitionend'
            },
            transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
            // support for csstransitions
            support = Modernizr.csstransitions,
            // default settings
            settings = {
                minHeight : config.expandingHeight,
                speed : config.expandingSpeed,
                easing : 'ease'
            };


        // add more items to the grid.
        // the new items need to appended to the grid.
        // after that call Grid.addItems(theItems);
        function addItems( $newitems ) {

            $items = $items.add( $newitems );

            $newitems.each( function() {
                var $item = $( this );
                $item.data( {
                    offsetTop : $item.offset().top,
                    height : $item.height()
                } );
            } );

            initItemsEvents( $newitems );

        }

        // saves the item´s offset top and height (if saveheight is true)
        function saveItemInfo( saveheight ) {
            $items.each( function() {
                var $item = $( this );
                $item.data( 'offsetTop', $item.offset().top );
                if( saveheight ) {
                    $item.data( 'height', $item.height() );
                }
            } );
        }

        function initEvents() {

            // when clicking an item, show the preview with the item´s info and large image.
            // close the item if already expanded.
            // also close if clicking on the item´s cross
            initItemsEvents( $items );

            // on window resize get the window´s size again
            // reset some values..
            $window.on( 'debouncedresize', function() {

                scrollExtra = 0;
                previewPos = -1;
                // save item´s offset
                saveItemInfo();
                getWinSize();
                var preview = $.data( this, 'preview' );
                if( typeof preview != 'undefined' ) {
                    hidePreview();
                }

            } );

        }

        function initItemsEvents( $items ) {
            $items.on( 'click', 'span.og-close', function() {
                hidePreview();
                return false;
            } ).children( 'a' ).on( 'click', function(e) {
                var $item = $( this ).parent();
                //$(this).addClass('unhoverdir');
                //remove animate class
                $item.removeClass('animate');

                // check if item already opened
                current === $item.index() ? hidePreview($(this)) : showPreview( $item );
                return false;

            } );
        }

        function getWinSize() {
            winsize = { width : $window.width(), height : $window.height() };
        }

        function showPreview( $item ) {
            hidePreview();

            // console.log('--show--');

            var preview = $.data( this, 'preview' ),
                // item´s offset top
                position = $item.data( 'offsetTop' );

            scrollExtra = 0;

            // if a preview exists and previewPos is different (different row) from item´s top then close it
            if( typeof preview != 'undefined' ) {

                // not in the same row
                if( previewPos !== position ) {
                    // if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
                    if( position > previewPos ) {
                        scrollExtra = preview.height;
                    }
                    hidePreview();
                }
                // same row
                else {
                    preview.update( $item );
                    return false;
                }

            }

            // update previewPos
            previewPos = position;
            // initialize new preview for the clicked item
            preview = $.data( this, 'preview', new Preview( $item ) );
            // expand preview overlay
            preview.open();

        }

        function hidePreview() {
            //hide pointer
            $items.find('.og-pointer').remove();

            current = -1;
            var preview = $.data( this, 'preview' );

            if(typeof preview == "undefined"){
                //do nothing
            }else{
                preview.close();
            }
            $.removeData( this, 'preview' );
        }

        // the preview obj / overlay
        function Preview( $item ) {
            this.$item = $item;
            this.expandedIdx = this.$item.index();
            this.create();
            this.update();
        }

        Preview.prototype = {
            create : function() {
                // create Preview structure:
                this.$title = $( '<h3></h3>' );
                this.$description = $( '<p></p>' );
                this.$href = $( '<a href="#">Visit website</a>' );
                this.$detailButtonList = $( '<span class="buttons-list"></span>' );
                this.$details = $( '<div class="og-details"></div>' ).append( this.$title, this.$description, this.$detailButtonList );
                this.$loading = $( '<div class="og-loading"></div>' );
                this.$fullimage = $( '<div class="og-fullimg"></div>' ).append( this.$loading );
                this.$closePreview = $( '<span class="og-close"></span>' );
                this.$previewInner = $( '<div class="og-expander-inner"></div>' ).append( this.$closePreview, this.$fullimage, this.$details );
                this.$previewEl = $( '<div class="og-expander"></div>' ).append( this.$previewInner );
                // append preview element to the item
                this.$item.append( $('<div class="og-pointer"></div>') );
                this.$item.append( this.getEl() );

                // set the transitions for the preview and the item
                if( support ) {
                    this.setTransition();
                }
            },
            update : function( $item ) {

                if( $item ) {
                    this.$item = $item;
                }

                // if already expanded remove class "og-expanded" from current item and add it to new item
                if( current !== -1 ) {
                    var $currentItem = $items.eq( current );
                    $currentItem.removeClass( 'og-expanded' );
                    this.$item.addClass( 'og-expanded' );
                    // position the preview correctly
                    this.positionPreview();
                }

                // update current value
                current = this.$item.index();


                // update preview´s content
                if(typeof config.items[current] === "undefined"){
                    //nothing happen
                }else{
                    eldata = config.items[current];

                    this.$title.html( eldata.title );
                    this.$description.html( eldata.description );
                    //clear current button list
                    this.$detailButtonList.html("");
                    urlList = eldata.button_list;

                    if(urlList.length > 0)
                    {
                        for (i = 0; i < urlList.length; i++)
                        {
                            var linkTarget = (urlList[i]['new_window']) ? '_blank' : '_self';
                            var ObjA = $('<a target="'+linkTarget+'"></a>');
                            ObjA.addClass('link-button');
                            if(i==0){
                                ObjA.addClass('first');
                            }
                            ObjA.attr("href", urlList[i]['url']);
                            ObjA.html( urlList[i]['title']);
                            this.$detailButtonList.append(ObjA);
                        }
                    }

                   var self = this;

                    // remove the current image in the preview
                    if( typeof self.$largeImg != 'undefined' ) {
                        self.$largeImg.remove();
                    }


                    //relate photo
                    glarge = eldata.large;
                    gthumbs = eldata.thumbnail;
                    if(glarge.length == gthumbs.length && glarge.length > 0){
                        var ObjUl = $('<ul></ul>');
                        for (i = 0; i < gthumbs.length; i++)
                        {
                            var Objli = $('<li></li>');
                            var ObjA = $('<a href="javascript:;;"></a>');
                            var ObjImg = $('<img/>');

                            ObjImg.addClass('related_photo');
                            if(i==0){
                                ObjImg.addClass('selected');
                            }
                            ObjImg.attr("src", gthumbs[i]);
                            ObjImg.attr("data-large", glarge[i]);
                            ObjA.append(ObjImg);
                            Objli.append(ObjA);
                            ObjUl.append(Objli);
                        }
                        // ObjUl.addClass("og-grid-small");
                        ObjUl.addClass("elastislide-list");
                        ObjUl.elastislide();
                        var carousel = $('<div class="elastislide-wrapper elastislide-horizontal"></div>');
                        carousel.append(ObjUl).find('.related_photo').bind('click', function(){
                            carousel.find('.selected').removeClass('selected');
                            $(this).addClass('selected');
                            $largePhoto = $(this).data('large');
                            console.log($largePhoto);
                            console.log($largePhoto.indexOf("https://www.youtube.com"));
                            if ($largePhoto.indexOf("https://www.youtube.com") > -1) {
                                //load youtube
                                 $('<img/>').fadeOut(500);
                                 console.log("load video test");
                                //code <iframe width="560" height="315" src="https://www.youtube.com/embed/s4sl9V8zh5c" frameborder="0" allowfullscreen></iframe>
                            }else{
                                //load images
                                $('<img/>').load(function(){
                                    self.$fullimage.find('img').fadeOut(500, function(){
                                        $(this).fadeIn(500).attr('src', $largePhoto);
                                    })
                                }).attr('src', $largePhoto);
                            }
                            
                        });
                        self.$details.append('<div class="infosep"></div>');
                        self.$details.append(carousel);
                    }else{
                        self.$details.find('.infosep, .og-grid-small').remove();
                    }


                    // preload large image and add it to the preview
                    // for smaller screens we don´t display the large image (the media query will hide the fullimage wrapper)
                    if( self.$fullimage.is( ':visible' ) ) {
                        this.$loading.show();
                        $( '<img/>' ).load( function() {
                            var $img = $( this );
                            if( $img.attr( 'src' ) === self.$item.children('a').find('img').data( 'largesrc' ) ) {
                                self.$loading.hide();
                                self.$fullimage.find( 'img' ).remove();
                                self.$largeImg = $img.fadeIn( 350 );
                                self.$fullimage.append( self.$largeImg );
                            }
                        } ).attr( 'src', eldata.large[0] );
                    }

                }
            },
            open : function() {

                setTimeout( $.proxy( function() {
                    // set the height for the preview and the item
                    this.setHeights();
                    // scroll to position the preview in the right place
                    this.positionPreview();
                }, this ), 25 );

            },
            close : function() {

                var self = this,
                    onEndFn = function() {
                        if( support ) {
                            $( this ).off( transEndEventName );
                        }
                        self.$item.removeClass( 'og-expanded' );
                        self.$previewEl.remove();
                    };

                setTimeout( $.proxy( function() {

                    if( typeof this.$largeImg !== 'undefined' ) {
                        this.$largeImg.fadeOut( 'fast' );
                    }
                    this.$previewEl.css( 'height', 0 );
                    // the current expanded item (might be different from this.$item)
                    var $expandedItem = $items.eq( this.expandedIdx );
                    $expandedItem.css( 'height', $expandedItem.data( 'height' ) ).on( transEndEventName, onEndFn );

                    if( !support ) {
                        onEndFn.call();
                    }

                }, this ), 25 );

                return false;

            },
            calcHeight : function() {

                var heightPreview = winsize.height - this.$item.data( 'height' ) - marginExpanded,
                    itemHeight = winsize.height;

                //console.log(heightPreview);
                if( heightPreview < settings.minHeight ) {
                    heightPreview = settings.minHeight;
                    itemHeight = settings.minHeight + this.$item.data( 'height' ) + marginExpanded;
                }
                //console.log(heightPreview);
                //console.log(this.$item.data( 'height' ));

                this.height = heightPreview;
                this.itemHeight = itemHeight;

            },
            setHeights : function() {

                var self = this,
                    onEndFn = function() {
                        if( support ) {
                            self.$item.off( transEndEventName );
                        }
                        self.$item.addClass( 'og-expanded' );
                    };

                this.calcHeight();
                this.$previewEl.css( 'height', this.height );
                this.$item.css( 'height', this.itemHeight ).on( transEndEventName, onEndFn );

                if( !support ) {
                    onEndFn.call();
                }

            },
            positionPreview : function() {

                // scroll page
                // case 1 : preview height + item height fits in window´s height
                // case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
                // case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height
                var position = this.$item.data( 'offsetTop' ),
                    previewOffsetT = this.$previewEl.offset().top - scrollExtra,
                    scrollVal = this.height + this.$item.data( 'height' ) + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - ( winsize.height - this.height ) : previewOffsetT;

                $body.animate( { scrollTop : scrollVal }, settings.speed );

            },
            setTransition  : function() {
                this.$previewEl.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
                this.$item.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
            },
            getEl : function() {
                return this.$previewEl;
            }
        }

        // return {
        //     init : init,
        //     addItems : addItems
        // };
        $grid.imagesLoaded( function() {

            // save item´s size and offset
            saveItemInfo( true );
            // get window´s size
            getWinSize();
            // initialize some events
            initEvents();

        } );

    }
})
/**
 * jquery.elastislide.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

;( function( $, window, undefined ) {
	
	'use strict';

	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/
	var $event = $.event,
	$special,
	resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 150
	};

	// ======================= imagesLoaded Plugin ===============================
	// https://github.com/desandro/imagesloaded

	// $('#my-container').imagesLoaded(myFunction)
	// execute a callback when all images have loaded.
	// needed because .load() doesn't work on cached images

	// callback function gets image collection as argument
	//  this is the container

	// original: mit license. paul irish. 2010.
	// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

	// blank image data-uri bypasses webkit log warning (thx doug jones)
	var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

	$.fn.imagesLoaded = function( callback ) {
		var $this = this,
			deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
			hasNotify = $.isFunction(deferred.notify),
			$images = $this.find('img').add( $this.filter('img') ),
			loaded = [],
			proper = [],
			broken = [];

		// Register deferred callbacks
		if ($.isPlainObject(callback)) {
			$.each(callback, function (key, value) {
				if (key === 'callback') {
					callback = value;
				} else if (deferred) {
					deferred[key](value);
				}
			});
		}

		function doneLoading() {
			var $proper = $(proper),
				$broken = $(broken);

			if ( deferred ) {
				if ( broken.length ) {
					deferred.reject( $images, $proper, $broken );
				} else {
					deferred.resolve( $images );
				}
			}

			if ( $.isFunction( callback ) ) {
				callback.call( $this, $images, $proper, $broken );
			}
		}

		function imgLoaded( img, isBroken ) {
			// don't proceed if BLANK image, or image is already loaded
			if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
				return;
			}

			// store element in loaded images array
			loaded.push( img );

			// keep track of broken and properly loaded images
			if ( isBroken ) {
				broken.push( img );
			} else {
				proper.push( img );
			}

			// cache image and its state for future calls
			$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

			// trigger deferred progress method if present
			if ( hasNotify ) {
				deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
			}

			// call doneLoading and clean listeners if all images are loaded
			if ( $images.length === loaded.length ){
				setTimeout( doneLoading );
				$images.unbind( '.imagesLoaded' );
			}
		}

		// if no images, trigger immediately
		if ( !$images.length ) {
			doneLoading();
		} else {
			$images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
				// trigger imgLoaded
				imgLoaded( event.target, event.type === 'error' );
			}).each( function( i, el ) {
				var src = el.src;

				// find out if this image has been already checked for status
				// if it was, and src has not changed, call imgLoaded on it
				var cached = $.data( el, 'imagesLoaded' );
				if ( cached && cached.src === src ) {
					imgLoaded( el, cached.isBroken );
					return;
				}

				// if complete is true and browser supports natural sizes, try
				// to check for image status manually
				if ( el.complete && el.naturalWidth !== undefined ) {
					imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
					return;
				}

				// cached images don't fire load sometimes, so we reset src, but only when
				// dealing with IE, or image is complete (loaded) and failed manual check
				// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
				if ( el.readyState || el.complete ) {
					el.src = BLANK;
					el.src = src;
				}
			});
		}

		return deferred ? deferred.promise( $this ) : $this;
	};

	// global
	var $window = $( window ),
		Modernizr = window.Modernizr;

	$.Elastislide = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		
	};

	$.Elastislide.defaults = {
		// orientation 'horizontal' || 'vertical'
		orientation : 'horizontal',
		// sliding speed
		speed : 500,
		// sliding easing
		easing : 'ease-in-out',
		// the minimum number of items to show. 
		// when we resize the window, this will make sure minItems are always shown 
		// (unless of course minItems is higher than the total number of elements)
		minItems : 3,
		// index of the current item (left most item of the carousel)
		start : 0,
		// click item callback
		onClick : function( el, position, evt ) { return false; },
		onReady : function() { return false; },
		onBeforeSlide : function() { return false; },
		onAfterSlide : function() { return false; }
	};

	$.Elastislide.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.Elastislide.defaults, options );

			// https://github.com/twitter/bootstrap/issues/2870
			var self = this,
				transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				};
			
			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
			
			// suport for css transforms and css transitions
			this.support = Modernizr.csstransitions && Modernizr.csstransforms;

			// current item's index
			this.current = this.options.start;

			// control if it's sliding
			this.isSliding = false;

			this.$items = this.$el.children( 'li' );
			// total number of items
			this.itemsCount = this.$items.length;
			if( this.itemsCount === 0 ) {

				return false;

			}
			this._validate();
			// remove white space
			this.$items.detach();
			this.$el.empty();
			this.$el.append( this.$items );

			// main wrapper
			this.$el.wrap( '<div class="elastislide-wrapper elastislide-loading elastislide-' + this.options.orientation + '"></div>' );

			// check if we applied a transition to the <ul>
			this.hasTransition = false;
			
			// add transition for the <ul>
			this.hasTransitionTimeout = setTimeout( function() {
				
				self._addTransition();

			}, 100 );

			// preload the images
			
			this.$el.imagesLoaded( function() {

				self.$el.show();

				self._layout();
				self._configure();
				
				if( self.hasTransition ) {

					// slide to current's position
					self._removeTransition();
					self._slideToItem( self.current );

					self.$el.on( self.transEndEventName, function() {

						self.$el.off( self.transEndEventName );
						self._setWrapperSize();
						// add transition for the <ul>
						self._addTransition();
						self._initEvents();

					} );

				}
				else {

					clearTimeout( self.hasTransitionTimeout );
					self._setWrapperSize();
					self._initEvents();
					// slide to current's position
					self._slideToItem( self.current );
					setTimeout( function() { self._addTransition(); }, 25 );

				}

				self.options.onReady();

			} );

		},
		_validate : function() {

			if( this.options.speed < 0 ) {

				this.options.speed = 500;

			}
			if( this.options.minItems < 1 || this.options.minItems > this.itemsCount ) {

				this.options.minItems = 1;

			}
			if( this.options.start < 0 || this.options.start > this.itemsCount - 1 ) {

				this.options.start = 0;

			}
			if( this.options.orientation != 'horizontal' && this.options.orientation != 'vertical' ) {

				this.options.orientation = 'horizontal';

			}
				
		},
		_layout : function() {

			this.$el.wrap( '<div class="elastislide-carousel"></div>' );

			this.$carousel = this.$el.parent();
			this.$wrapper = this.$carousel.parent().removeClass( 'elastislide-loading' );

			// save original image sizes
			var $img = this.$items.find( 'img:first' );
			this.imgSize = { width : $img.outerWidth( true ), height : $img.outerHeight( true ) };

			this._setItemsSize();
			this.options.orientation === 'horizontal' ? this.$el.css( 'max-height', this.imgSize.height ) : this.$el.css( 'height', this.options.minItems * this.imgSize.height );

			// add the controls
			this._addControls();

		},
		_addTransition : function() {

			if( this.support ) {

				this.$el.css( 'transition', 'all ' + this.options.speed + 'ms ' + this.options.easing );
				
			}
			this.hasTransition = true;

		},
		_removeTransition : function() {

			if( this.support ) {

				this.$el.css( 'transition', 'all 0s' );

			}
			this.hasTransition = false;
			
		},
		_addControls : function() {

			var self = this;

			// add navigation elements
			this.$navigation = $( '<nav><span class="elastislide-prev">Previous</span><span class="elastislide-next">Next</span></nav>' )
				.appendTo( this.$wrapper );


			this.$navPrev = this.$navigation.find( 'span.elastislide-prev' ).on( 'mousedown.elastislide', function( event ) {

				self._slide( 'prev' );
				return false;

			} );

			this.$navNext = this.$navigation.find( 'span.elastislide-next' ).on( 'mousedown.elastislide', function( event ) {

				self._slide( 'next' );
				return false;

			} );

		},
		_setItemsSize : function() {

			// width for the items (%)
			var w = this.options.orientation === 'horizontal' ? ( Math.floor( this.$carousel.width() / this.options.minItems ) * 100 ) / this.$carousel.width() : 100;
			
			this.$items.css( {
				'width' : w + '%',
				'max-width' : this.imgSize.width,
				'max-height' : this.imgSize.height
			} );

			if( this.options.orientation === 'vertical' ) {
			
				this.$wrapper.css( 'max-width', this.imgSize.width + parseInt( this.$wrapper.css( 'padding-left' ) ) + parseInt( this.$wrapper.css( 'padding-right' ) ) );
			
			}

		},
		_setWrapperSize : function() {

			if( this.options.orientation === 'vertical' ) {

				this.$wrapper.css( {
					'height' : this.options.minItems * this.imgSize.height + parseInt( this.$wrapper.css( 'padding-top' ) ) + parseInt( this.$wrapper.css( 'padding-bottom' ) )
				} );

			}

		},
		_configure : function() {

			// check how many items fit in the carousel (visible area -> this.$carousel.width() )
			this.fitCount = this.options.orientation === 'horizontal' ? 
								this.$carousel.width() < this.options.minItems * this.imgSize.width ? this.options.minItems : Math.floor( this.$carousel.width() / this.imgSize.width ) :
								this.$carousel.height() < this.options.minItems * this.imgSize.height ? this.options.minItems : Math.floor( this.$carousel.height() / this.imgSize.height );

		},
		_initEvents : function() {

			var self = this;

			$window.on( 'debouncedresize.elastislide', function() {

				self._setItemsSize();
				self._configure();
				self._slideToItem( self.current );

			} );

			this.$el.on( this.transEndEventName, function() {

				self._onEndTransition();

			} );

			if( this.options.orientation === 'horizontal' ) {

				this.$el.on( {
					swipeleft : function() {

						self._slide( 'next' );
					
					},
					swiperight : function() {

						self._slide( 'prev' );
					
					}
				} );

			}
			else {

				this.$el.on( {
					swipeup : function() {

						self._slide( 'next' );
					
					},
					swipedown : function() {

						self._slide( 'prev' );
					
					}
				} );

			}

			// item click event
			this.$el.on( 'click.elastislide', 'li', function( event ) {

				var $item = $( this );

				self.options.onClick( $item, $item.index(), event );
				
			});

		},
		_destroy : function( callback ) {
			
			this.$el.off( this.transEndEventName ).off( 'swipeleft swiperight swipeup swipedown .elastislide' );
			$window.off( '.elastislide' );
			
			this.$el.css( {
				'max-height' : 'none',
				'transition' : 'none'
			} ).unwrap( this.$carousel ).unwrap( this.$wrapper );

			this.$items.css( {
				'width' : 'auto',
				'max-width' : 'none',
				'max-height' : 'none'
			} );

			this.$navigation.remove();
			this.$wrapper.remove();

			if( callback ) {

				callback.call();

			}

		},
		_toggleControls : function( dir, display ) {

			if( display ) {

				( dir === 'next' ) ? this.$navNext.show() : this.$navPrev.show();

			}
			else {

				( dir === 'next' ) ? this.$navNext.hide() : this.$navPrev.hide();

			}
			
		},
		_slide : function( dir, tvalue ) {

			if( this.isSliding ) {

				return false;

			}
			
			this.options.onBeforeSlide();

			this.isSliding = true;

			var self = this,
				translation = this.translation || 0,
				// width/height of an item ( <li> )
				itemSpace = this.options.orientation === 'horizontal' ? this.$items.outerWidth( true ) : this.$items.outerHeight( true ),
				// total width/height of the <ul>
				totalSpace = this.itemsCount * itemSpace,
				// visible width/height
				visibleSpace = this.options.orientation === 'horizontal' ? this.$carousel.width() : this.$carousel.height();
			
			if( tvalue === undefined ) {
				
				var amount = this.fitCount * itemSpace;

				if( amount < 0 ) {

					return false;

				}

				if( dir === 'next' && totalSpace - ( Math.abs( translation ) + amount ) < visibleSpace ) {

					amount = totalSpace - ( Math.abs( translation ) + visibleSpace );

					// show / hide navigation buttons
					this._toggleControls( 'next', false );
					this._toggleControls( 'prev', true );

				}
				else if( dir === 'prev' && Math.abs( translation ) - amount < 0 ) {

					amount = Math.abs( translation );

					// show / hide navigation buttons
					this._toggleControls( 'next', true );
					this._toggleControls( 'prev', false );

				}
				else {
					
					// future translation value
					var ftv = dir === 'next' ? Math.abs( translation ) + Math.abs( amount ) : Math.abs( translation ) - Math.abs( amount );
					
					// show / hide navigation buttons
					ftv > 0 ? this._toggleControls( 'prev', true ) : this._toggleControls( 'prev', false );
					ftv < totalSpace - visibleSpace ? this._toggleControls( 'next', true ) : this._toggleControls( 'next', false );
						
				}
				
				tvalue = dir === 'next' ? translation - amount : translation + amount;

			}
			else {

				var amount = Math.abs( tvalue );

				if( Math.max( totalSpace, visibleSpace ) - amount < visibleSpace ) {

					tvalue	= - ( Math.max( totalSpace, visibleSpace ) - visibleSpace );
				
				}

				// show / hide navigation buttons
				amount > 0 ? this._toggleControls( 'prev', true ) : this._toggleControls( 'prev', false );
				Math.max( totalSpace, visibleSpace ) - visibleSpace > amount ? this._toggleControls( 'next', true ) : this._toggleControls( 'next', false );

			}
			
			this.translation = tvalue;

			if( translation === tvalue ) {
				
				this._onEndTransition();
				return false;

			}

			if( this.support ) {
				
				this.options.orientation === 'horizontal' ? this.$el.css( 'transform', 'translateX(' + tvalue + 'px)' ) : this.$el.css( 'transform', 'translateY(' + tvalue + 'px)' );

			}
			else {

				$.fn.applyStyle = this.hasTransition ? $.fn.animate : $.fn.css;
				var styleCSS = this.options.orientation === 'horizontal' ? { left : tvalue } : { top : tvalue };
				
				this.$el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : this.options.speed, complete : function() {

					self._onEndTransition();
					
				} } ) );

			}
			
			if( !this.hasTransition ) {

				this._onEndTransition();

			}

		},
		_onEndTransition : function() {

			this.isSliding = false;
			this.options.onAfterSlide();

		},
		_slideTo : function( pos ) {

			var pos = pos || this.current,
				translation = Math.abs( this.translation ) || 0,
				itemSpace = this.options.orientation === 'horizontal' ? this.$items.outerWidth( true ) : this.$items.outerHeight( true ),
				posR = translation + this.$carousel.width(),
				ftv = Math.abs( pos * itemSpace );

			if( ftv + itemSpace > posR || ftv < translation ) {

				this._slideToItem( pos );
			
			}

		},
		_slideToItem : function( pos ) {

			// how much to slide?
			var amount	= this.options.orientation === 'horizontal' ? pos * this.$items.outerWidth( true ) : pos * this.$items.outerHeight( true );
			this._slide( '', -amount );
			
		},
		// public method: adds new items to the carousel
		/*
		
		how to use:
		var carouselEl = $( '#carousel' ),
			carousel = carouselEl.elastislide();
		...
		
		// append or prepend new items:
		carouselEl.prepend('<li><a href="#"><img src="images/large/2.jpg" alt="image02" /></a></li>');

		// call the add method:
		es.add();
		
		*/
		add : function( callback ) {
			
			var self = this,
				oldcurrent = this.current,
				$currentItem = this.$items.eq( this.current );
			
			// adds new items to the carousel
			this.$items = this.$el.children( 'li' );
			this.itemsCount = this.$items.length;
			this.current = $currentItem.index();
			this._setItemsSize();
			this._configure();
			this._removeTransition();
			oldcurrent < this.current ? this._slideToItem( this.current ) : this._slide( 'next', this.translation );
			setTimeout( function() { self._addTransition(); }, 25 );
			
			if ( callback ) {

				callback.call();

			}
			
		},
		// public method: sets a new element as the current. slides to that position
		setCurrent : function( idx, callback ) {
			
			this.current = idx;

			this._slideTo();
			
			if ( callback ) {

				callback.call();

			}
			
		},
		// public method: slides to the next set of items
		next : function() {

			self._slide( 'next' );

		},
		// public method: slides to the previous set of items
		previous : function() {

			self._slide( 'prev' );

		},
		// public method: slides to the first item
		slideStart : function() {

			this._slideTo( 0 );

		},
		// public method: slides to the last item
		slideEnd : function() {

			this._slideTo( this.itemsCount - 1 );

		},
		// public method: destroys the elastislide instance
		destroy : function( callback ) {

			this._destroy( callback );
		
		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.elastislide = function( options ) {

		var self = $.data( this, 'elastislide' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !self ) {

					logError( "cannot call methods on elastislide prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( self[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for elastislide self" );
					return;
				
				}
				
				self[ options ].apply( self, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( self ) {

					self._init();
				
				}
				else {

					self = $.data( this, 'elastislide', new $.Elastislide( options, this ) );
				
				}

			});
		
		}
		
		return self;
		
	};
	
} )( jQuery, window );

/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {
	
	'use strict';

	$.HoverDir = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );

	};

	// the options
	$.HoverDir.defaults = {
		speed : 300,
		easing : 'ease',
		hoverDelay : 0,
		inverse : false
	};

	$.HoverDir.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.HoverDir.defaults, options );
			// transition properties
			this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
			// support for CSS transitions
			this.support = Modernizr.csstransitions;
			// load the events
			this._loadEvents();

		},
		_loadEvents : function() {

			var self = this;
			
			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
				
				var $el = $( this ),
					$hoverElem = $el.find( 'figure' ),
					direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					styleCSS = self._getStyle( direction );
				
				if( event.type === 'mouseenter' ) {
					
					$hoverElem.hide().css( styleCSS.from );
					clearTimeout( self.tmhover );

					self.tmhover = setTimeout( function() {
						
						$hoverElem.show( 0, function() {
							
							var $el = $( this );
							if( self.support ) {
								$el.css( 'transition', self.transitionProp );
							}
							self._applyAnimation( $el, styleCSS.to, self.options.speed );

						} );
						
					
					}, self.options.hoverDelay );
					
				}
				else {
				
					if( self.support ) {
						$hoverElem.css( 'transition', self.transitionProp );
					}
					clearTimeout( self.tmhover );
					self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );
					
				}
					
			} );

		},
		// credits : http://stackoverflow.com/a/3647634
		_getDir : function( $el, coordinates ) {
			
			// the width and height of the current div
			var w = $el.width(),
				h = $el.height(),

				// calculate the x and y to get an angle to the center of the div from that x and y.
				// gets the x value relative to the center of the DIV and "normalize" it
				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
			
				// the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
				// first calculate the angle of the point,
				// add 180 deg to get rid of the negative values
				// divide by 90 to get the quadrant
				// add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
			
			return direction;
			
		},
		_getStyle : function( direction ) {
			
			var fromStyle, toStyle,
				slideFromTop = { left : '0px', top : '-100%' },
				slideFromBottom = { left : '0px', top : '100%' },
				slideFromLeft = { left : '-100%', top : '0px' },
				slideFromRight = { left : '100%', top : '0px' },
				slideTop = { top : '0px' },
				slideLeft = { left : '0px' };
			
			switch( direction ) {
				case 0:
					// from top
					fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
					toStyle = slideTop;
					break;
				case 1:
					// from right
					fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
					toStyle = slideLeft;
					break;
				case 2:
					// from bottom
					fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
					toStyle = slideTop;
					break;
				case 3:
					// from left
					fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
					toStyle = slideLeft;
					break;
			};
			
			return { from : fromStyle, to : toStyle };
					
		},
		// apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
		_applyAnimation : function( el, styleCSS, speed ) {

			$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms' } ) );

		},

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.hoverdir = function( options ) {

		var instance = $.data( this, 'hoverdir' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for hoverdir instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );

 $(function(){
        $("#elastic_grid").elastic_grid({
            'showAllText' : 'All',
            'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 500,
            'items' :
            [
                {
                    'title'         : 'MediaCAST',
                    'description'   : 'MediaCAST is a Live Streaming and Video on Demand application tailored for school districts and colleges. The application interfaces with a propriety hardware and software in order to make uploading and sharing a variety of digital and analog media in the classroom fun and easy.<br> Confidentialty prevents me from sharing the code or from discussing some of the tech that drives this full-stack application.',
                    'thumbnail'     : ['images/small/mediacast02.png','images/small/mediacast03.png','images/small/mediacast04.png','images/small/mediacast05.png','images/small/mediacast06.png','images/small/mediacast07.png'],
                    'large'         : ['images/large/mediacast02.png','images/large/mediacast03.png','images/large/mediacast04.png','images/large/mediacast05.png','images/large/mediacast06.png','images/large/mediacast07.png'],
                    'button_list'   :
                    [
                       // { 'title':'Playable Demo', 'url' : 'https://dl.dropboxusercontent.com/u/215389670/games/DynamicAudioSample/index.html', 'new_window' : true },
                        { 'title':'View Company Website', 'url':'http://www.inventivetec.com/', 'new_window' : true}
                    ],
                    'tags'          : ['Full-Stack App']
                },
		        {
                    'title'         : 'Streaming Radio',
                    'description'   : "A simple Angular app for streaming radio stations based on Icecast and Liquidsoap. It also uses last.fm's API to try to find album artwork. Currently, only written for Chrome Browsers.",
                    'thumbnail'     : ['images/small/radio.png'],
                    'large'         : ['images/large/radio.png'],
                    'button_list'   :
                    [
                        //{ 'title':'Live Demo', 'url' : 'http://165.227.31.125:3000', 'new_window' : true },
			          { 'title':'Watch Demo on YouTube', 'url' : 'https://youtu.be/nrIUyExQC-U', 'new_window' : true },
                        { 'title':'View Project on GitHub', 'url':'https://github.com/patrickhimes/streaming-radio', 'new_window' : true}
                    ],
                    'tags'          : ['Angular']
                },
		        {
                    'title'         : '< Rant >',
                    'description'   : "Don\'t vent your frustrations on social media. Try screaming into the void instead. < Rant > is a simple app that will let you post what\'s bugging you without sharing or remembering any of your choice words.",
                    'thumbnail'     : ['images/small/rant01.png','images/small/rant02.png'],
                    'large'         : ['images/large/rant01.png','images/large/rant02.png'],
                    'button_list'   :
                    [
			            { 'title':'View Project on GitHub', 'url':'https://github.com/patrickhimes/rant', 'new_window' : true}
                    ],
                    'tags'          : ['Angular']
                },
		        {
                    'title'         : 'VR Audio Visualizer',
                    'description'   : 'Imagine a landscape that changes in response to the background music. Here I animate an array of game objects to create an audio visualizer that surrounds can respond to either music or a microphone.',
                    'thumbnail'     : ['images/small/av01.png','images/small/av02.png','images/small/av01.png'],
                    'large'         : ['images/large/av01.png', 'images/large/av02.png','https://www.youtube.com/watch?v=s4sl9V8zh5c'],
                    'button_list'   :
                    [
                        //{ 'title':'Playable Demo', 'url' : 'https://dl.dropboxusercontent.com/u/215389670/games/DynamicAudioSample/index.html', 'new_window' : true },
			        { 'title':'Watch Demo on YouTube', 'url' : 'https://www.youtube.com/watch?v=s4sl9V8zh5c', 'new_window' : true },
                        { 'title':'View Project on GitHub', 'url':'https://github.com/patrickhimes/unity-audio-visualizer', 'new_window' : true}
                    ],
                    'tags'          : ['Unity3D']
                },
                {
                    'title'         : 'PipBuck UI',
                    'description'   : 'Using Unity\'s new UI system, I created a Pipboy parody (PipBuck) who\'s stats and inventory are driven by Scriptable Objects. The UI is rendered in world space and takes advantage to the Pipboy model\'s texture to create a CRT effect.',
                    'thumbnail'     : ['images/small/pipbuckUI.png'],
                    'large'         : ['images/large/pipbuckUI.png'],
                    'button_list'   :
                    [
                       // { 'title':'Playable Demo', 'url' : 'https://dl.dropboxusercontent.com/u/215389670/games/DynamicAudioSample/index.html', 'new_window' : true },
                        { 'title':'View Project on GitHub', 'url':'https://github.com/patrickhimes/PipBuck', 'new_window' : true}
                    ],
                    'tags'          : ['Unity3D']
                }

            ]
        });
    });
(function () {

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  var css = '<%= contents %>';

  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);

})();

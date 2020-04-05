
alert("Hello! I am an alert box!!");
function injectStyles(rule) {
  var div = $("<div />", {
    html: '&shy;<style>' + rule + '</style>'
  }).appendTo("body");    
}

$("button").on("click", function() {
  injectStyles('a:hover { color: red; }');
});

body {
  background-color:green;
}

a { color: blue; }
a:hover { color: pink; }

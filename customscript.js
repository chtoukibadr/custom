window.onload = function () {  // make sure you run after the document has been loaded, otherwise you won't have access to jquery.
	$( document ).ready(function() {
    		startcustomization();
	});
}

function startcustomization() {
	
	$(“.button”).css(‘color’,’red’);
	console.log("cust started");  // good old debugging log statements.
 	var d = document.createElement("div");  // adding a div to hold our stuff
	d.className = "listing-tweet-button"    // leveraging a existing css class

 	var s = document.createElement("script");  // inject a script tag
    	s.type = "text/javascript";
    	s.src = "//platform.linkedin.com/in.js";  // this code is all from https://developer.linkedin.com/plugins/share 
        var textnode = document.createTextNode("lang: en_US");
	d.appendChild(s);

 	var s = document.createElement("script");  // had to inject both script tags, otherwise they weren't executed.
    	s.type = "IN/Share";
	// commented out: s["data-url"] = "http://www.foo.com";  If you wanted to share a different page than the one that the sharebutton was on, you'd use this.  The share button defaults to sharing the page it is installed on.  
	d.appendChild(s);

	$(".listing-social").append(d);  // find where the other share buttons are, and append our div
}

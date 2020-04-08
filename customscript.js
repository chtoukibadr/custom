$(function(){ // .ready() callback, is only executed when the DOM is fully loaded
        var length = $("p").length;
        // The following will log 1 to the console, as the paragraph exists.
        // This is the evidence that this method is only called when the
        // DOM is fully loaded
        console.log(length);
      });

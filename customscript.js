<script type="text/javascript">
  (function(document){
    function syncDatePickers(startDateNode, endDateNode) {
      startDateNode.datepicker().on("changeDate", function(e) {
        endDateNode.datepicker('setDate', new Date(e.target.value));
      });
    }

    function changeLabelText(datePickerNode, text) {
      datePickerNode.closest('div').css('width', '100%').find('label').text(text);
    }

    function addHelpText(datePickerNode, text) {
      datePickerNode.closest('#datepicker').prepend('<span class="help-text">' + text + '</span>');
    }

    function hideDatePicker(datePickerNode) {
      datePickerNode.closest('div').hide();
    }

    function updateUnitText(txt) {
      var unitText = $('.listing-price-quantity');
      if (unitText.length > 0) {
        unitText.text(txt);
      }
    }

    function insertHtml(html) {
      var sidebar = $("#listing-message-links");
      if (sidebar.length > 0) {
        sidebar.closest('aside').prepend(html);
      }
    }

    function NavItem(text, url) {
      this.text = text;
      this.url = url;
    }

    NavItem.prototype.hasUrl = function() {
      return (typeof this.url !== 'undefined' && this.url !== null);
    };

    NavItem.prototype.html = function() {
      return this.hasUrl() ? this.anchor() : this.textNode();
    };

    NavItem.prototype.anchor = function() {
      return '<a href="' + this.url + '">' + this.text + '</a>';
    };

    NavItem.prototype.textNode = function() {
      return '<a class="active" onClick="return false;" href="#">' + this.text + '</a>';
    };

    function Navbar() {
      this.navItems = [];
    }

    Navbar.prototype.add = function(text, url) {
      this.navItems.push(new NavItem(text, url));
    };

    Navbar.prototype.colSize = function() {
      if (this.navItems.length <= 1) {
        return 'col-12';
      }
      var size = Math.floor(12/this.navItems.length);
      return 'col-' + size.toString();
    };

    Navbar.prototype.html = function() {
      var html = '<div class="row-with-divider" id="rental-length">';
      var colSize = this.colSize();
      this.navItems.forEach(function(item) {
        html += '<div class="' + colSize + '" style="text-align:center;">';
        html += item.html();
        html += '</div>';
      });
      html += '</div>';
      return html;
    };

    document.addEventListener("DOMContentLoaded", function (event) {
      var bookingDates = $("#booking-dates");

      if (bookingDates.length === 0) {
        return;
      }

      // Make sure all unit text is "per day" as opposed to "per night".
      updateUnitText('per day');

      // Check if the listing is a 'per day' listing
      var isPerDay = typeof bookingDates.validate().settings.rules.end_on === 'undefined';

      // Force the date picker to select a single date if it's 'per day'
      var startDateNode = $('#start-on');
      var endDateNode = $('#end-on');

      if (isPerDay) {
        syncDatePickers(startDateNode, endDateNode);
        changeLabelText(startDateNode, "Rental Date");
        hideDatePicker(endDateNode);
      }

      var helpTextNode = $(".listing-details-container .row .col-12:contains('Instructions:')");
      if (helpTextNode.length > 0) {
        var helpText = helpTextNode.contents()[2].data.trim();
        addHelpText(startDateNode, helpText);
      }

      var navbar = new Navbar();
      var altListing = $(".listing-details-container .row .col-12:contains('Additional Listing URL:')");

      if (altListing.length > 0) {
        var url = altListing.contents()[2].data.trim();
        if (isPerDay) {
          navbar.add('Day Trip');
          navbar.add('Multi-day Trip', url);
        } else {
          navbar.add('Day Trip', url);
          navbar.add('Multi-day Trip');
        }
        altListing.hide();
      } else {
        var notAvailableText = isPerDay ? 'Multi-day trips are unavailable' : 'Day trips are unavailable';
        navbar.add(notAvailableText);
      }
      insertHtml(navbar.html());
    });
  }(window.document));
</script>

<script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/o8br7rlv';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>

<style>
  #rental-length {
    padding-bottom: 20px;
  }
  #rental-length a {
      width: 100%;
      display: block;
      padding: 10px 0; 
      border: 1px solid #eaeaea;
      border-radius: 4px;
  }
  #rental-length a:link, #rental-length a:visited {
      background: #fff;
  }
  #rental-length a:hover, #rental-length a:active {
      background: #fcfcfc; 
  }
  #rental-length a.active {
      background: #f1f1f1;
      color: #757575;
      border-color: #dedede;
      cursor: default;
  }
  span.help-text {
      font-size: 13px;
      color: #989898;
  }
  .row-with-divider {
    border-color: #eaeaea;
  }
  .marketplace-lander .coverimage-fade {
      background: rgba(0, 0, 0, 0.4) !important;
  }
  .marketplace-lander .marketplace-title-header h1 {
      color: #fff;
  }
  .home-toolbar-button-group-button:first-child {
      -webkit-border-top-left-radius: 3px;
      -webkit-border-bottom-left-radius: 3px;
      -moz-border-radius-topleft: 3px;
      -moz-border-radius-bottomleft: 3px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
  }
  .home-toolbar-button-group-button:last-child {
      -webkit-border-top-right-radius: 3px;
      -webkit-border-bottom-right-radius: 3px;
      -moz-border-radius-topright: 3px;
      -moz-border-radius-bottomright: 3px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
  }
  .AddNewListingButton_background, .AddNewListingButton {
      -webkit-border-radius: 3px !important;
      -moz-border-radius: 3px !important;
      border-radius: 3px !important;
  }
  .fluid-thumbnail-grid-image-overlay {
      background: rgba(0,0,0,.05);
      -webkit-border-top-left-radius: 3px;
      -webkit-border-top-right-radius: 3px;
      -moz-border-radius-topleft: 3px;
      -moz-border-radius-topright: 3px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
  }
  .fluid-thumbnail-grid-image-title {
      background: rgba(0, 0, 0, 0.6);
      height: 4em;
      min-height: 4em;
      width: 100%;
  }
  .marketplace-lander-content h1, 
  .marketplace-lander-content p, 
  #listing-title {
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  }
</style>

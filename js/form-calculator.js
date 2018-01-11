/**
 * Custom form calculator widget javascript
 */
(function($){
// Handle the form submission
$( "#ret__calculator__form" ).submit(function( event ) {
  event.preventDefault();
  // Hide the error messages if there are any (this is a bug in Mayflower)

  // Populate the allowance values (indicated by a custom .js-ret-* class in the markup)
  $(".js-ret-annual").text("32,000");
  $(".js-ret-monthly").text("2,666");
});
})(jQuery);

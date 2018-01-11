/**
 * Custom form calculator widget javascript
 */
(function($){
// Handle the form submission
$( "#ret__calculator__form" ).submit(function( event ) {
  console.log( "Handler for .submit() called." );
  event.preventDefault();
});
})(jQuery);

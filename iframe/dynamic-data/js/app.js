/**
 * Custom dynamic data widget javascript
 */
(function($){
  $(".ms__dynamic-data").each(function(){
    // Cache jQuery objects
    var $el = $(this),
        $button = $el.find(".ms__dynamic-data__button"),
        $data = $el.find(".ms__dynamic-data__output-text");

    // Handle button click event
    $button.on('click',function(e){
      // Get random number (Note: replace this with your own functionality to bring in data)
      var code = Math.random().toString(36).toUpperCase().slice(8);
      // Render the data;
      $data.text(code);
    });
  });
})(jQuery);
// jQuery is available from vendor-generated.js

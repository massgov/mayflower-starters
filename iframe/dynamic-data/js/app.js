/**
 * Custom form calculator widget javascript
 */
(function($){
  $(".ms__dynamic-data").each(function(){
    // cache jQuery objects
    var $el = $(this),
        $button = $el.find(".ms__dynamic-data__button"),
        $data = $el.find(".ms__dynamic-data__output-text");

    // handle click event
    $button.on('click',function(e){
      // get random number (replace this with your own functionality to bring in data)
      var code = Math.random().toString(36).toUpperCase().slice(8);
      // render code;
      $data.text(code);
    });
  });
// Handle the form submission

})(jQuery);

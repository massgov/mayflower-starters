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

// Forming search query
(function($){
  $(".js-header-search-form").each(function(){
    // Cache jQuery objects
    var $el = $(this),
        $input = $el.find("input"),
        $button = $el.find(".ma__button-search");

        // Handle button click event
      $button.on('click',function(e){
        e.preventDefault();
        var $query = encodeURIComponent($input[0].value),
            $path = 'https://search.mass.gov/?q=',
            $location = $path.concat($query);
        window.location.href = $location;
      });
  });
})(jQuery);

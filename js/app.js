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

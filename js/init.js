$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});
(function($){
  $(function(){

    // Floating-Fixed table of contents
    if ($('section#intro').length) {
      $('.toc-wrapper').pushpin({ top: $('section#intro').height() });
    }
    else {
      $('.toc-wrapper').pushpin({ top: 0 });
    }
        }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});
(function($){
  $(function(){

    // Floating-Fixed table of contents
    if ($('nav').length) {
      $('.toc-wrapper').pushpin({ top: $('nav').height() });
    }
    else if ($('#index-banner').length) {
      $('.toc-wrapper').pushpin({ top: $('#index-banner').height() });
    }
    else {
      $('.toc-wrapper').pushpin({ top: 0 });
    }
        }); // end of document ready
})(jQuery); // end of jQuery name space

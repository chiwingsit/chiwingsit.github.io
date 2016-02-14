$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});
console.log("Hello World");
(function($){
  $(function(){

    // Floating-Fixed table of contents
    if ($('section#cover').length) {
      $('.toc-wrapper').pushpin({ top: $('section#cover').height() });
    }
    else {
      $('.toc-wrapper').pushpin({ top: 0 });
    }
        }); // end of document ready
})(jQuery); // end of jQuery name space

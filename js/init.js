$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $(".button-collapse").sideNav();
});
(function($){
  $(function(){
      $('.toc-wrapper').pushpin({ top: 0 });
        }); // end of document ready
})(jQuery); // end of jQuery name space

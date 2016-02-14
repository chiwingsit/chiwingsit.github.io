$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});
console.log("Hello World");
var options = [
    {selector: '#proficient-skills', offset: 0, callback: 'Materialize.showStaggeredList("#proficient-skills")' },
    {selector: '#inter-skills', offset: 0, callback: 'Materialize.showStaggeredList("#inter-skills")' },
    {selector: '#novice-skills', offset: 0, callback: 'Materialize.showStaggeredList("#novice-skills")' },
    {selector: '#list-ubisoft', offset: 0, callback: 'Materialize.showStaggeredList("#list-ubisoft")' },
    {selector: '#list-appvelopers', offset: 0, callback: 'Materialize.showStaggeredList("#list-appvelopers")' },
    {selector: '#list-silanis', offset: 0, callback: 'Materialize.showStaggeredList("#list-silanis")' },
    {selector: '#list-codejam', offset: 0, callback: 'Materialize.showStaggeredList("#list-codejam")' },
    {selector: '#list-radioip', offset: 0, callback: 'Materialize.showStaggeredList("#list-radioip")' }
];
Materialize.scrollFire(options);
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

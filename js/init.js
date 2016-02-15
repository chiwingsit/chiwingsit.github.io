$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $(".button-collapse").sideNav();
});
console.log("Hello World");
var options = [
    {selector: '#list-about', offset: 50, callback: 'Materialize.showStaggeredList("#list-about")' },
    {selector: '#proficient-skills', offset: 50, callback: 'Materialize.showStaggeredList("#proficient-skills")' },
    {selector: '#inter-skills', offset: 50, callback: 'Materialize.showStaggeredList("#inter-skills")' },
    {selector: '#novice-skills', offset: 50, callback: 'Materialize.showStaggeredList("#novice-skills")' },
    {selector: '#list-ubisoft', offset: 50, callback: 'Materialize.showStaggeredList("#list-ubisoft")' },
    {selector: '#list-appvelopers', offset: 50, callback: 'Materialize.showStaggeredList("#list-appvelopers")' },
    {selector: '#list-silanis', offset: 50, callback: 'Materialize.showStaggeredList("#list-silanis")' },
    {selector: '#list-codejam', offset: 50, callback: 'Materialize.showStaggeredList("#list-codejam")' },
    {selector: '#list-radioip', offset: 50, callback: 'Materialize.showStaggeredList("#list-radioip")' },
    {selector: '#list-riotinto', offset: 50, callback: 'Materialize.showStaggeredList("#list-riotinto")' },
    {selector: '#list-nserc', offset: 50, callback: 'Materialize.showStaggeredList("#list-nserc")' },
    {selector: '#img-about', offset: 0, callback: 'Materialize.fadeInImage("#img-about")' },
    {selector: '#img-mcgill', offset: 0, callback: 'Materialize.fadeInImage("#img-mcgill")' },
    {selector: '#img-KU', offset: 0, callback: 'Materialize.fadeInImage("#img-KU")' },
    {selector: '#img-ubisoft', offset: 0, callback: 'Materialize.fadeInImage("#img-ubisoft")' },
    {selector: '#img-appvelopers', offset: 0, callback: 'Materialize.fadeInImage("#img-appvelopers")' },
    {selector: '#img-silanis', offset: 0, callback: 'Materialize.fadeInImage("#img-silanis")' },
    {selector: '#img-codejam', offset: 0, callback: 'Materialize.fadeInImage("#img-codejam")' },
    {selector: '#img-radioip', offset: 0, callback: 'Materialize.fadeInImage("#img-radioip")' },
    {selector: '#img-riotinto', offset: 0, callback: 'Materialize.fadeInImage("#img-riotinto")' },
    {selector: '#img-nserc', offset: 0, callback: 'Materialize.fadeInImage("#img-nserc")' },
    {selector: '#img-about-small', offset: 0, callback: 'Materialize.fadeInImage("#img-about-small")' },
    {selector: '#img-mcgill-small', offset: 0, callback: 'Materialize.fadeInImage("#img-mcgill-small")' },
    {selector: '#img-KU-small', offset: 0, callback: 'Materialize.fadeInImage("#img-KU-small")' },
    {selector: '#img-ubisoft-small', offset: 0, callback: 'Materialize.fadeInImage("#img-ubisoft-small")' },
    {selector: '#img-appvelopers-small', offset: 0, callback: 'Materialize.fadeInImage("#img-appvelopers-small")' },
    {selector: '#img-silanis-small', offset: 0, callback: 'Materialize.fadeInImage("#img-silanis-small")' },
    {selector: '#img-codejam-small', offset: 0, callback: 'Materialize.fadeInImage("#img-codejam-small")' },
    {selector: '#img-radioip-small', offset: 0, callback: 'Materialize.fadeInImage("#img-radioip-small")' },
    {selector: '#img-riotinto-small', offset: 0, callback: 'Materialize.fadeInImage("#img-riotinto-small")' },
    {selector: '#img-nserc-small', offset: 0, callback: 'Materialize.fadeInImage("#img-nserc-small")' }
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

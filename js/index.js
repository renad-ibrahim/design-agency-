$(function (){
    'user strict';
    
    var windowHeight = $(window).height(),
        upperHeight = $('.upper-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight();
    
    $('.slider , .carousel-item').height(windowHeight - (upperHeight+navHeight));
});
    
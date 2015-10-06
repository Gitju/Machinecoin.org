/*

My Custom JS
============

Author: Jürgen Scholz
Updated: October 2015
Notes: 

*/

$(function() {

    //<!-- smooth scrolling --> 
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': ($target.offset().top-60)
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

}); 
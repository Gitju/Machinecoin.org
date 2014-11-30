/*

My Custom JS
============

Author: Jürgen Scholz
Updated: November 2014
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


    function load() {
        $('#getblocknumber').load('http://blockchain.machinecoin.org:8080/chain/Machinecoin/q/getblockcount?callback=?', 
          function (responseText, textStatus, XMLHttpRequest) {
            if (textStatus == 'success') {
                 // all good!
            }
            if (textStatus == 'error') {
                 // oh noes!
            }
          });   

        $('#getdifficulty').load('http://blockchain.machinecoin.org:8080/chain/Machinecoin/q/getdifficulty?callback=?', 
          function (responseText, textStatus, XMLHttpRequest) {
            if (textStatus == 'success') {
                 // all good!
            }
            if (textStatus == 'error') {
                 // oh noes!
            }
          });   

        $('#getcoins').load('http://blockchain.machinecoin.org:8080/chain/Machinecoin/q/totalbc?callback=?', 
          function (responseText, textStatus, XMLHttpRequest) {
            if (textStatus == 'success') {
                 // all good!
                $('#getcoins').append(' Machinecoin');
            }
            if (textStatus == 'error') {
                 // oh noes!
            }
          }); 

        $.getJSON("https://www.cryptonator.com/api/ticker/mac-btc", function(data){
            $('#mac-btc-exchangerate').text(data.ticker.price + ' BTC');
        });

        $.getJSON("https://www.cryptonator.com/api/ticker/mac-eur", function(data){
            $('#mac-eur-exchangerate').text(data.ticker.price + ' EUR');
        });

        $.getJSON("https://www.cryptonator.com/api/ticker/mac-usd", function(data){
            $('#mac-usd-exchangerate').text(data.ticker.price + ' USD');
        });

    }


    load();

    setInterval(load, 60000);

}); 
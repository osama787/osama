$(function () {
    'use strict';
    var winH       = $(window).height(),
        upperH     = $('.upper-bar').innerHeight(),
        navH       = $('.navbar').innerHeight();
    $('.carousel-slide').height(winH - (upperH + navH));
});
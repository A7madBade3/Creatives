/* global $, alert, console */

$(function () {
    
    'use strict'; 
    
    // Links Add Active Class 

    $('.links li').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active'); 
         
    });

});
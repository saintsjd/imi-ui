$(function(){
    'use strict';
    
    $('#support-link,#support-bar .close').click(function(){
        $('#support-bar').slideToggle();
    });

    $('.filter-btn').click(function(){

        var whichBtn = $(this).attr('id').split('-')[0];
        var alreadyActive = $(this).hasClass('active');

        $('.filter-btn').removeClass('active');
        $('.filter').slideUp(function(){
            console.log('up');
        });

        if( !alreadyActive ) {
            $('#'+whichBtn+'-filter').slideToggle();
            $(this).toggleClass('active');
        }

        return false;
    });

    $('.update-btn').click(function(){

        $('.filter-btn').removeClass('active');
        $('.filter').slideUp();
        return false;
    });


    $(".form-signin").submit(function(){
        window.location = "myreports.html";
        return false;
    });


    return '\'Allo \'Allo!';
});
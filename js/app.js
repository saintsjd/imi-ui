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


    $("#showme-product").click(function(){
        $("#product-filter-btn").fadeTo( "slow", 0.10,function(){
            $("#product-filter-btn").fadeTo( "slow", 1.0 );
        });
    });
    $("#showme-territory").click(function(){
        $("#territory-filter-btn").fadeTo( "slow", 0.10,function(){
            $("#territory-filter-btn").fadeTo( "slow", 1.0 );
        });
    });
    $("#showme-optional").click(function(){
        $("#optional-filter-btn").fadeTo( "slow", 0.10,function(){
            $("#optional-filter-btn").fadeTo( "slow", 1.0 );
        });
    });

    return '\'Allo \'Allo!';
});
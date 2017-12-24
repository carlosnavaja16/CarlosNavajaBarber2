$(document).ready(function()
{

    var frameWidth = $('#instagramGallery').width();
    $('#instagramGallery').css({'height':frameWidth*3/4+'px'});

    if ($(window).width() <= 990) {


        $('#navbarNav>ul>li>a').on('click', function(){

            $('.navbar-collapse').collapse('hide');

        });

    }

    $('a[href^="#"]').on('click',function (e) {

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 75
	    }, 1000, 'swing');
	});

});

$(window).resize(function(){
    var frameWidth = $('#instagramGallery').width();
    $('#instagramGallery').css({'height':frameWidth*3/4+'px'});


});


$(document).ready(function()
{

    var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());

    if (isiDevice)
    {
        $('a.takeMe').attr('href', 'http://maps.apple.com/?address=12515+Orange+Dr,Davie,Florida');
    }


    if ($(window).width() <= 990) {


        $('#navbarNav>ul>li>a').on('click', function(){

            $('.navbar-collapse').collapse('hide');

        });

    }

    $('#navbarNav>ul>li>a[href^="#"]').click(function (e) {

        e.preventDefault();

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

/*
function goToMap(){

    // if we're on iOS, open in Apple Maps
    if((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1) || (navigator.platform.indexOf("iPod") != -1)){
        
        window.location.replace("https://maps.apple.com/?ll=26.065771,-80.316416");

    }

    else{

        window.location.replace("https://www.google.com/maps/?q=26.065771,-80.316416")


    }
   
}

*/

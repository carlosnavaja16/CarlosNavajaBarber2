$(document).ready(function()
{

    var frameWidth = $('#instagramGallery').width();
    $('#instagramGallery').css({'height':frameWidth*3/4+'px'});

    if ($(window).width() <= 990) {


        $('#navbarNav>ul>li>a').on('click', function(){

            $('.navbar-collapse').collapse('hide');

        });

    }

});

$(window).resize(function(){
    var frameWidth = $('#instagramGallery').width();
    $('#instagramGallery').css({'height':frameWidth*3/4+'px'});


});


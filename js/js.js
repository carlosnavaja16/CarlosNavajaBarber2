$(document).ready(function()
{

    $( "#galleryLink" ).click(function() {
        $( ".gallery" ).show( "blind", "swing",1000 );
        $( ".appointments" ).hide( "blind", "swing",1000 );
        $( ".map" ).hide( "blind", "swing",1000 );
    });

    $( "#appointmentsLink" ).click(function() {
        $( ".gallery" ).hide( "blind", "swing",1000 );
        $( ".appointments" ).show( "blind", "swing",1000 );
        $( ".map" ).hide( "blind", "swing",1000 );
    });

    $( "#mapLink" ).click(function() {
        $( ".gallery" ).hide( "blind", "swing",1000 );
        $( ".appointments" ).hide( "blind", "swing",1000 );
        $( ".map" ).show( "blind", "swing",1000 );
    });



});
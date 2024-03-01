// For index.html carousel
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    stagePadding: 20,
    nav:true,
    navText: [
        "<div><i class=\"bi bi-chevron-left\"></i></div>",
        "<div><i class=\"bi bi-chevron-right\"></i></i></div>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// For view.html main slider
jQuery( document ).ready(function( $ ) {
    $( '#my-slider' ).sliderPro({
        width: 300,
        height: 300,
        visibleSize: '100%',
        forceSize: 'fullWidth',
        autoSlideSize: true
    });
});
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
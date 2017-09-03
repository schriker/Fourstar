$(document).ready(function(){
    $(".slider-btn").on("click",function(){
        var slideNum = $(this).attr('data-slide-num');
        $(".slider-btn").removeClass("slider-btn-active");
        $(this).addClass("slider-btn-active");
        $(".slide").each(function(){
            if($(this).attr("id") == slideNum) {
                    $(this).removeClass("d-none");
                }
            else {
                    $(this).addClass("d-none");
            }
        });
    });
    $(".owl-carousel").owlCarousel({
        loop: true,
        responsive: {
            0:{
                autoplay: true,
                autoplayTimeout: 2500,
                items: 1
            },
            767:{
                items: 2
            }
        }
    });
    $(".owl-item").addClass("col-6");

    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $(".next").click(function(){
        owl.trigger('next.owl.carousel');
    });
    
    $(".prev").click(function(){
        owl.trigger('prev.owl.carousel');
    });
})
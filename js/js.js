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
})
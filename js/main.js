$(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
    var owl = $('.owl-carousel');
owl.owlCarousel();
$('.customNextBtn21').click(function() {
owl.trigger('next.owl.carousel');
});

$('.customPrevBtn21').click(function() {

owl.trigger('prev.owl.carousel', [300]);
});
$(".mune").click(function(){
    $(".list-header ul").toggle(100);
    $(" .header-information").toggle(100);
});
});
AOS.init({
    once:true
});

window.onresize = function(){
    if(window.innerWidth > 992){
        document.getElementsByClassName(".sd").style.display="block";
    }
}



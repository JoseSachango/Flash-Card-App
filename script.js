$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: false
  });

$(".leftArrow").on("click",function(){
    $('.carousel.carousel-slider').carousel('prev')
    console.log("it's working")
})


$(".rightArrow").on("click",function(){
    $('.carousel.carousel-slider').carousel('next')
    console.log("it's working")
})

$("#startButton").on("click",function(){
    $('.carousel.carousel-slider').carousel('next')
})


$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton({direction:"left"});
    $('.collapsible').collapsible();
    
});
        
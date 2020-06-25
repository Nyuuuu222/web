// nav
$('.main_menu').mouseenter(function(){ 
    $(this).children('.sub_menu').animate({width:"show"}, 200, "linear"); 
}); 
    
$('.main_menu').mouseleave(function(){ 
    $(this).children('.sub_menu').fadeOut('fast'); 
});





// slide
// setInterval(function(){
//     $('.slide_box').delay("2500")
//     $('.slide_box').animate({marginLeft:"-760px"})
//     $('.slide_box').delay("2500")
//     $('.slide_box').animate({marginLeft:"-1520px"})
//     $('.slide_box').delay("2500")
//     $('.slide_box').animate({marginLeft:"0"})

// })



// // 이게 정석인데
timer();
// var current=0;
var interval;

function timer(){
  var interval=setInterval(function(){slide()},2000);                        
}

function slide(){
  $(".slide_list").animate({left:"-=760px"},1000,function(){
    $(this).css({"left":0});
    $(".slide_list").append( $(".slide_list").children(".slide_list>li").eq(0) );
  });    

}    







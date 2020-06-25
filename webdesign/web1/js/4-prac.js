//메뉴

$('.mainmenu').mouseenter(function(){
    $('.submenu').stop().slideDown();
    $('.nav_bg').stop().slideDown();
})
$('.mainmenu').mouseleave(function(){
    $('.submenu').stop().slideUp();
    $('.nav_bg').stop().slideUp();
})




//슬라이드

    

$('.slide>li').hide();
$('.slide>li:first-child').show();

setInterval(function(){
    $('.slide>li:first').fadeOut(1000).next().fadeIn().end(1000).appendTo('.slide');
},2500);
    

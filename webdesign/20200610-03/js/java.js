$('.menu').mouseover(function(){
    $('.submenu').css("display","flex")
    $('.submenu').fadeIn()
})

$('.navi_box').mouseleave(function(){
    $('.submenu').css("display","none")
    $('.submenu').fadeOut()
})
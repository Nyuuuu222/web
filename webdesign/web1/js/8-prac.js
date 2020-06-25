//메뉴
$('nav>ul>li').hover(function(){
    $('.submenu').stop().slideToggle()
    $('.menu_bg').stop().slideToggle();
})


//슬라이드
setInterval(function(){
    $('.slide').delay("2500").animate({marginLeft:"-1200px"})
    $('.slide').delay("2500").animate({marginLeft:"-2400px"})
    $('.slide').delay("2500").animate({marginLeft:"0px"})
    
})




//메뉴
$('nav>ul>li').hover(function(){
    $(this).children('.submenu').stop().slideToggle()
});

//슬라이드
$('.slide>li').hide();
$('.slide>li:first-child').show()

setInterval(function(){
    $('.slide>li:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('.slide');
},2500)

//탭메뉴
$('.gallery').click(function(){
    $('.notice_tab').css("display","none");
    $('.gallery_tab').css("display","flex");
    $('.gallery a').css("color","#143546");
    $('.gallery').css("background","white");    
    $('.notice a').css("color","white");
    $('.notice').css("background","#143546");
})

$('.notice').click(function(){
    $('.gallery_tab').css("display","none");
    $('.notice_tab').css("display","flex");
    $('.notice a').css("color","#143546");
    $('.notice').css("background","white");    
    $('.gallery a').css("color","white");
    $('.gallery').css("background","#143546");
})

//#143546

// 메뉴
$('.mainmenu').hover(function(){
    $(this).children('.submenu').stop().slideToggle()
})



// // 슬라이드
$('.slide>img').hide();
$('.slide>img:first-child').show();

setInterval(function(){
    $('.slide>img:first').fadeOut(1000).next().fadeIn().end(1000).appendTo('.slide');
}, 2500)




// 팝업
$('.popup_show').click(function(){
    $('.popup').show()
})
$('.popup_hide').click(function(){
    $('.popup').hide()
})










// $(function(){
//     $('.mainmenu-1').mouseover(function(){
//         $('.submenu-1').animate({width: '150px'}, 100);
//         $('.submenu-1').css("display", "block");
//     });
//     $('.mainmenu-1').mouseleave(function(){
//         $('.submenu-1').animate({width: '0'}, 100);
//         $('.submenu-1').css("display", "none");
//     });

//     $('.mainmenu-2').mouseover(function(){
//         $('.submenu-2').animate({width: '150px'}, 100);
//         $('.submenu-2').css("display", "block");
//     });
//     $('.mainmenu-2').mouseleave(function(){
//         $('.submenu-2').animate({width: '0'}, 100);
//         $('.submenu-2').css("display", "none");
//     });

//     $('.mainmenu-3').mouseover(function(){
//         $('.submenu-3').animate({width: '150px'}, 100);
//         $('.submenu-3').css("display", "block");
//     });
//     $('.mainmenu-3').mouseleave(function(){
//         $('.submenu-3').animate({width: '0'}, 100);
//         $('.submenu-3').css("display", "none");
//     });

//     $('.mainmenu-4').mouseover(function(){
//         $('.submenu-4').animate({width: '150px'}, 100);
//         $('.submenu-4').css("display", "block");
//     });
//     $('.mainmenu-4').mouseleave(function(){
//         $('.submenu-4').animate({width: '0'}, 100);
//         $('.submenu-4').css("display", "none");
//     });
// });
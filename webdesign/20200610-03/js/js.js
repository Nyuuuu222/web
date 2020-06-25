$('.menu>ul>li').hover(function(){ $(this).children('.sub_menu').stop().slideToggle(); });



//메뉴슬라이드 
$('.navi_box').hover(function() {
    $('.submenu').stop().slideToggle();
});
//이미지페이드인아웃 
start();
var imgs = $('#slide_box>a').length - 1;
var now = 0;

function start() {
    $('#slide_box>a').eq(0).siblings().fadeOut('slow');
    setInterval(function() {
        slide();
    }, 3000);
};

function slide() {
    now = now == imgs ? 0 : now += 1;
    $('#slide_box>a').eq(now - 1).fadeOut('slow');
    $('#slide_box>a').eq(now).fadeIn('slow');
};
//공지사항갤러리 탭메뉴 
$('.content').children().hide();
$('.content div:first').fadeIn();
$('.tab_menu li:first a').css('background', 'white');
$('.tab_menu li:last a').click(function() {
    $('.tab_menu li:last a').css('background', 'white');
    $('.tab_menu li:first a').css('background', 'silver');
    $('.content div:first').css('display', 'none');
    $('.content div:last').fadeIn();
});
$('.tab_menu li:first a').click(function() {
    $('.tab_menu li:first a').css('background', 'white');
    $('.tab_menu li:last a').css('background', 'silver');
    $('.content div:first').fadeIn();
    $('.content div:last').css('display', 'none');
});
//팝업 
$('.팝업버튼').click(function() {
    $('.popup_window').show();
});
$('.팝업닫기').click(function() {
    $('.popup_window').hide();
});
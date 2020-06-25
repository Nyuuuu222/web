//패밀리사이트 클릭시 메뉴 토글 
$('.family_title').click(function() {
    $('.family_list').stop().slideToggle()
});
//팝업 
$('.popup_hide').click(function() {
    $('#popup').hide();
});
$('.popup_show').click(function() {
    $('#popup').show();
});
//메뉴 네비게이션 
$('nav>ul>li').hover(function() {
    $('.sub_menu').stop().slideToggle();
    $('.menu_bg').stop().slideToggle();
});
//좌우슬라이드 
setInterval(function() {
    $('.slide').delay('2500');
    $('.slide').animate({
        marginLeft: '-1200px'
    }, '700');
    $('.slide').delay('2500');
    $('.slide').animate({
        marginLeft: '-2400px'
    }, '700');
    $('.slide').delay('2500');
    $('.slide').animate({
        marginLeft: '0'
    }, '700');
});
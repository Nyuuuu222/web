$('nav>div').hover(function() {
    $(this).children('ul').stop().slideToggle();
});
$('.팝업열기').click(function() {
    $('#popup').show();
});
$('.팝업닫기').click(function() {
    $('#popup').hide();
});
setInterval(function() {
    $('.슬라이드').delay('2500');
    $('.슬라이드').animate({
        marginTop: '-300px'
    }, '700');
    $('.슬라이드').delay('2500');
    $('.슬라이드').animate({
        marginTop: '-600px'
    }, '700');
    $('.슬라이드').delay('2500');
    $('.슬라이드').animate({
        marginTop: '0'
    }, '700');
});
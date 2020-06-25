//메뉴네비게이션 
$('nav>ul>li').mouseenter(function() {
    $(this).children('.submenu').fadeIn();
});
$('nav>ul>li').mouseleave(function() {
    $(this).children('.submenu').fadeOut();
});
//좌우롤링배너 
setInterval(function() {
    $('#slide>ul').delay("2500") $('#slide>ul').animate({
        marginLeft: "-800px"
    }, "700");
    $('#slide>ul').delay("2500");
    $('#slide>ul').animate({
        marginLeft: "-1600px"
    }, "700");
    $('#slide>ul').delay("2500");
    $('#slide>ul').animate({
        marginLeft: "0px"
    }, "700");
});
//팝업 
$('.팝업열기').click(function() {
    $('#modal_popup').show();
});
$('.팝업닫기').click(function() {
    $('#modal_popup').hide();
});
//패밀리사이트 
$('.family_select').mouseenter(function() {
    $('.family_select>div>span').text('▲');
    $('.family_select>ul').slideDown();
});
$('.family_select').mouseleave(function() {
    $('.family_select>div>span').text('▼');
    $('.family_select>ul').slideUp();
});
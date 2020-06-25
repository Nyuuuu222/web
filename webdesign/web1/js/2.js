//메뉴슬라이드 
$('.menu a').hover(function() {
    $('.submenu_box').stop().slideToggle();
    $('.navi_box_bg').stop().slideToggle();
}, function() {
    $('.navi_box_bg').stop().fadeOut();
});
//이미지 좌우슬라이드 
setInterval(function() {
    $(".slide_img").delay("2500");
    $(".slide_img").animate({
        marginLeft: "-1200px"
    }, "700");
    $(".slide_img").delay("2500");
    $(".slide_img").animate({
        marginLeft: "-2400px"
    }, "700");
    $(".slide_img").delay("2500");
    $(".slide_img").animate({
        marginLeft: "-1200px"
    }, "700");
    $(".slide_img").delay("2500");
    $(".slide_img").animate({
        marginLeft: "0"
    }, "700");
});
//메뉴슬라이드 
$('.family_list_box').hover(function() {
    $(".family_list_box ul").stop().slideDown();
}, function() {
    $(".family_list_box ul").stop().slideUp();
});
//팝업 
$('.popup_button').click(function() {
    $('.popup').css("display", "block");
});
$('.팝업닫기').click(function() {
    $('.popup').css("display", "none");
});
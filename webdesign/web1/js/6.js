$("nav>ul>li").mouseenter(function() {
    $(".sub_menu").stop().slideDown('slow');
    $(".menu_bg").stop().slideDown('slow');
});
$("nav>ul>li").mouseleave(function() {
    $(".sub_menu").stop().slideUp('slow');
    $(".menu_bg").stop().slideUp('slow');
});
setInterval(function() {
    $("#slide_wrap").delay('2500');
    $("#slide_wrap").animate({
        marginTop: "-300px"
    }, '700');
    $("#slide_wrap").delay('2500');
    $("#slide_wrap").animate({
        marginTop: "-600px"
    }, '700');
    $("#slide_wrap").delay('2500');
    $("#slide_wrap").animate({
        marginTop: "0"
    }, '700');
});
$(".family_site>div").click(function() {
    if ($(".family_site>div>ul").css('display') == 'none') {
        $(".family_site>div>ul").stop().slideDown();
        $(".family_site>div>span").text('▲');
    } else {
        $(".family_site>div>ul").stop().slideUp();
        $(".family_site>div>span").text('▼');
    }
});
$(".팝업열기").click(function() {
    $('#popup').show()
});
$(".팝업닫기").click(function() {
    $('#popup').hide()
});
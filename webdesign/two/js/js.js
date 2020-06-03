
// 메뉴 슬라이드
$(function(){
    $(".menu a").hover(function(){
        $(".submenu_box").stop().slideToggle();
        $(".navi_box_bg").stop().slideToggle(); 
    })
})


//이미지 좌우슬라이드

setInterval(function() {
    $(".slide_box").delay("2500");
    $(".slide_box").animate({
        marginLeft: "-1200px"
    }, "700");
    $(".slide_box").delay("2500");
    $(".slide_box").animate({
        marginLeft: "-2400px"
    }, "700");
    $(".slide_box").delay("2500");
    $(".slide_box").animate({
        marginLeft: "-1200px"
    }, "700");
    $(".slide_box").delay("2500");
    $(".slide_box").animate({
        marginLeft: "0"
    }, "700");
});


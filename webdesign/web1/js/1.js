$('nav>ul>li').hover(function() {
    $('.submenu').stop().slideToggle();
});
setInterval(function() {
    $("#slide>ul").delay('2500');
    $("#slide>ul").animate({
        marginTop: '-300px'
    }, '500');
    $("#slide>ul").delay('2500');
    $("#slide>ul").animate({
        marginTop: '-600px'
    }, '500');
    $("#slide>ul").delay('2500');
    $("#slide>ul").animate({
        marginTop: '0'
    }, '500');
});
$('.popup_hide').click(function() {
    $('#popup').hide();
});
$('.popup_show').click(function() {
    $('#popup').show();
});
$('#tab_menu>ul>li:nth-child(2)').click(function() {
    $('.notice').hide();
    $('.gallery').css('display', 'flex');
    $(this).css({
        background: "white",
        borderBottom: "1px solid white",
    });
    $('#tab_menu>ul>li:nth-child(1)').css({
        background: "mistyrose",
        border: "1px solid slategrey"
    });
});
$('#tab_menu>ul>li:nth-child(1)').click(function() {
    $('.gallery').hide();
    $('.notice').show();
    $(this).css({
        background: "white",
        borderBottom: "1px solid white",
    });
    $('#tab_menu>ul>li:nth-child(2)').css({
        background: "mistyrose",
        border: "1px solid slategrey"
    });
});
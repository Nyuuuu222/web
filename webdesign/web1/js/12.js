$(function(){
    
    console.log('제이쿼리 시작');
    
    ///////////////////////////////////////////////
    
    var $main=$('.gnb > li');
    var $sub=$('.gnb > li > ul');
    var menuSpeed=300;
    
    $sub.hide();
    
    $main.mouseenter(function(){
        
        $(this).children('.subMenu').stop().show();
        $(this).find('a').addClass('on');
        $(this).find('ul').addClass('on');

    }).mouseleave(function(){
        
        $sub.hide();
        $(this).find('a').removeClass('on');
        $(this).find('ul').removeClass('on');
        
    });
    
    ///////////////////////////////////////////////
    
    var moveX=0;
    var slideW=$('#slideWrap').width();
    var slideSpeed=2500;
     $('.slideList').children('.slide:last').insertBefore($('.slideList').children('.slide:first'));
    $('.slideList').css('left',-slideW);
    $('.slideList').css('transition', 'transform 2s');
    
    function slideLeft() {
        
        $('.slideList').css('transform','translateX('+moveX+'px)');
        $('.slideList').children('.slide:first').insertAfter($('.slideList').children('.slide:last'));
        $('.slideList').css('left',-moveX-slideW);
        
    }
    
    var end=setInterval(function(){
        
        moveX+=-slideW;
        slideLeft();
        
    },slideSpeed);
    
    ///////////////////////////////////////////////
    
    $('.news li:first').click(function(){
        $('#popupWrap').show();
    });
    
    $('.popupClose').click(function(){
        $('#popupWrap').hide();
    });
    
});
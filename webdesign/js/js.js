$(function(){
    $(".mainNav").mouseover(function(){
        $(".subNav").stop().slideDown();
        $(".subNav").css("display","flex");
    });
    $(".menu").mouseleave(function(){
        $(this).children(".subNav").stop().slideUp();
    });
});


setInterval(function(){            
    $(".slide-all").delay("2500");       
    $(".slide-all").animate({marginTop:"-304px" },"500");  
    $(".slide-all").delay("2500");                          
    $(".slide-all").animate({marginTop:"-608px" },"500");  
    $(".slide-all").delay("2500");                          
    $(".slide-all").animate({marginTop:"0" },"500");       
  });
 

 $(function(){
     $(".tab1").click(function(){
         $(".content").css("display","block");
         $(".tab2").css("background","#cccccc")
         $(".gallery").css("display","none");
         $(".tab1").css("background","white")
     })
     $(".tab2").click(function(){
        $(".gallery").css("display","block");
        $(".tab1").css("background","#cccccc")
        $(".content").css("display","none");
        $(".tab2").css("background","white")
    })
 })



  $(function(){
    $('.pop-btn').on('click',function(){
        $('.popup').fadeIn();
    });
    $('.팝업닫기').on('click',function(){
        $('.popup').fadeOut();
    });
})
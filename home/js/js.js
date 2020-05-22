

AOS.init({
    easing: 'ease-in-out-sine'
  });

animation().init();
  
  

// $(function () {
//     new Swiper('.swiper-container02', {
//     speed: 400, // 슬라이드 간 전환 시간 (ms)
//     spaceBetween: 100, //  슬라이드 간 거리 (px)
//     initialSlide: 0, // 초기 슬라이드의 색인 번호입니다
//     //truewrapper adoptsheight of active slide 
//     autoHeight: false, 
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     // delay between transitions in ms
//     autoplay: 5000, // 전환 사이의 지연 (ms). 이 매개 변수를 지정하지 않으면 자동 재생이 비활성화됩니다.
//     autoplayStopOnLast: false, // loop false also
//     // If we need pagination
//     pagination: '.swiper-pagination', 
//     paginationType: "bullets", 
     
//     // Navigation arrows
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
     
//     // And if we need scrollbar
//     //scrollbar: '.swiper-scrollbar',
//     // "slide", "fade", "cube", "coverflow" or "flip"
//     effect: 'slide',
//     // Distance between slides in px.
//     spaceBetween: 60,
//     //
//     slidesPerView: 2,
//     //
//     centeredSlides: true, // true 인 경우 활성 슬라이드는 항상 왼쪽이 아닌 가운데에 배치됩니다.
//     //
//     slidesOffsetBefore: 0, // 컨테이너 시작 부분 (모든 슬라이드 이전)에 슬라이드 오프셋 추가 (픽셀 단위)
//     //
//     grabCursor: true, //이 옵션은 데스크탑 사용성을 약간 향상시킬 수 있습니다. 경우 사실 , 사용자는 Swiper에 "잡아"커서를 가져가 표시됩니다
     
//     });



  
  /**스크롤이 설정한 높이 이상 내려갔을때 스타일추가하기**/
if (jQuery(window).width() > 0) {
    jQuery(window).on("scroll",function(ev){
        if(jQuery(window).scrollTop() > 0 ) { /**높이 픽셀 조정**/
            jQuery('.menu_box').addClass('fixed');  /**위의 높이에서 .fixed 클래스를 추가합니다. 스타일에서 자유롭게 수치 조절 가능합니다.**/
        }
        else{
            jQuery('.menu_box').removeClass('fixed');
        }
        return false;
    });
    }



        
/**마우스 부드럽게 해당위치로 이동**/
$(function(){
    $('a[href^=#]').click(function() {
        var speed = 800;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});

// 메인이미지 호버
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  



// 이거 그 스크롤 내리면 그 되는거?
    // $(window).ready(function(){

    //         var max = 1000; //100% 투명할때의 스크롤 값

    //         $(window).scroll(function(){

    //             var scrollPX = $(this).scrollTop(1000);

    //             if( scrollPX  < max ) {

    //                 $("#slider1").css({"opacity": (max-scrollPX)/max });

    //             }else{

    //                 $("#slider2").css({"opacity": 0});

    //             }  

    //         });
 
    //     });
        


    // jQuery(document).ready(function($) {
    //     $window = $(window);
 
    //     // 다음 섹션이 브라우저 하단으로부터 200px 만큼 보여질때
    //     var delayPosition = 200,
    //         // 현재 브라우저의 높이값
    //         windowheight; 
 
    //     // 브라우저의 크기가 변하면 대상 엘리먼트의 위치값을 다시 할당
    //     $window.on('resize', function() {
    //       insertTargetPosition();
    //     });
       


    



// //스크롤 하면 네비색상변경
// $(document).ready(function(){ 
//     $(window).scroll(function(){ 
//       var scroll = $(window).scrollTop(); 
//       if(scroll>1){ 
//         $(".menu_box").css("background","#FF543A"); 
//       } 
//       else{ 
//         $(".menu_box").css("background","#ffffff"); 
//       } 
//     }) 
//   })


// jQuery(window).scroll(function() {    
//     var scroll = jQuery(window).scrollTop();
//     if (scroll >= 500) {       
//         jQuery(".site-title").addClass("fixedtxt");
//     } else
//     {
//         jQuery(".site-title").removeClass("fixedtxt");
//     }
// }); 

// (function()
// {
//     var setPoint = 50;
//     var headerElement = document.getElementById("header");
//     var ReferenceElement = document.getElementById("page");
//     function ToggleHeader(setValue, currentPosValue)
//     {
//         if(currentPosValue > setValue)
//         {
//             headerElement.style.color = "black";
//             headerElement.style.backgroundColor = "white";
//         }else{
//             headerElement.style.color = "white";
//             headerElement.style.backgroundColor = "transparent";
//         }
//     }
    
    // ReferenceElement.onscroll = function()
    // {
    //     ToggleHeader(setPoint, ReferenceElement.scrollTop);
    //     document.getElementById("text").innerHTML = "Scroll pos is: " + ReferenceElement.scrollTop;
    // }
// }());













// 두번째 슬라이드


// var mySwiper = new Swiper(".swiper-container", {
//     direction: "vertical",
//     loop: true,
//     pagination: ".swiper-pagination",
//     grabCursor: true,
//     speed: 1000,
//     paginationClickable: true,
//     parallax: true,
//     autoplay: false,
//     effect: "slide",
//     mousewheelControl: 1
//   });

  


  

// // 고스트바 메뉴
// $(function(){
//     $("#btn-nav").click(function(){
//         $(".menu_box").toggle(500);
//     });
// });








//         /* PLEASE DO NOT COPY AND PASTE THIS CODE. */
// (function() {
//     var w = window,
//         C = '___grecaptcha_cfg',
//         cfg = w[C] = w[C] || {},
//         N = 'grecaptcha';
//     var gr = w[N] = w[N] || {};
//     gr.ready = gr.ready || function(f) {
//         (cfg['fns'] = cfg['fns'] || []).push(f);
//     };
//     (cfg['render'] = cfg['render'] || []).push('onload');
//     w['__google_recaptcha_client'] = true;
//     var d = document,
//         po = d.createElement('script');
//     po.type = 'text/javascript';
//     po.async = true;
//     po.src = 'https://www.gstatic.com/recaptcha/releases/JPZ52lNx97aD96bjM7KaA0bo/recaptcha__ko.js';
//     var e = d.querySelector('script[nonce]'),
//         n = e && (e['nonce'] || e.getAttribute('nonce'));
//     if (n) {
//         po.setAttribute('nonce', n);
//     }
//     var s = d.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(po, s);
// })();
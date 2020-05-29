// 첫페이지 로딩페이지
(function ($) {
    $.fakeLoader = function(options) {

        var settings = $.extend({
            targetClass:'fakeLoader',
            timeToHide:1200,               
            bgColor: '#2ecc71', 
            spinner:'spinner2'
        }, options);

        var spinner01 = '<div class="fl fl-spinner spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
        var spinner02 = '<div class="fl fl-spinner spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
        var spinner03 = '<div class="fl fl-spinner spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
        var spinner04 = '<div class="fl fl-spinner spinner4"></div>'; 
        var spinner05 = '<div class="fl fl-spinner spinner5"><div class="cube1"></div><div class="cube2"></div></div>'; 
        var spinner06 = '<div class="fl fl-spinner spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'; 
        var spinner07 = '<div class="fl fl-spinner spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'; 

        var el = $('body').find('.' + settings.targetClass);

        el.each(function() {
            var a = settings.spinner;
            
                switch (a) {
                    case 'spinner1':
                            el.html(spinner01);
                        break;
                    case 'spinner2':
                            el.html(spinner02);
                        break;
                    case 'spinner3':
                            el.html(spinner03);
                        break;
                    case 'spinner4':
                            el.html(spinner04);
                        break;
                    case 'spinner5':
                            el.html(spinner05);
                        break;
                    case 'spinner6':
                            el.html(spinner06);
                        break;
                    case 'spinner7':
                            el.html(spinner07);
                        break;
                    default:
                        el.html(spinner01);
                    }
        });

        el.css({
            'backgroundColor':settings.bgColor
        });

        setTimeout(function () {
            $(el).fadeOut();
        }, settings.timeToHide);
    }; 
}(jQuery));





// 지도
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = { 
        center: new kakao.maps.LatLng(37.700734, 126.684287), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'img/logo-black.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(50,41 ), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.700734, 126.684287); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
    '  <a href="http://kko.to/jvXXJ2pYj" target="_blank">' +
    '    <span class="title">파주출판단지</span>' +
    '  </a>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.700734, 126.684287);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1 
});






// 

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
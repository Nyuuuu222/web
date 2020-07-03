// car color

$(function(){
    $('#wc9').click(function(){
        $('.wc9').fadeIn();
        $('.r2t').css('display','none').fadeOut();
        $('.e2r').css('display','none').fadeOut();
        $('.q2w').css('display','none').fadeOut();
        $('.j2f').css('display','none').fadeOut();
        $('.a2s').css('display','none').fadeOut();
        $('.y2b').css('display','none').fadeOut();

    });
    $('#r2t').click(function(){
        $('.r2t').fadeIn();
        $('.wc9').css('display','none').fadeOut();
        $('.e2r').css('display','none').fadeOut();
        $('.q2w').css('display','none').fadeOut();
        $('.j2f').css('display','none').fadeOut();
        $('.a2s').css('display','none').fadeOut();
        $('.y2b').css('display','none').fadeOut();

    });
    $('#e2r').click(function(){
        $('.e2r').fadeIn();
        $('.r2t').css('display','none').fadeOut();
        $('.wc9').css('display','none').fadeOut();
        $('.q2w').css('display','none').fadeOut();
        $('.j2f').css('display','none').fadeOut();
        $('.a2s').css('display','none').fadeOut();
        $('.y2b').css('display','none').fadeOut();

    });
    $('#q2w').click(function(){
        $('.q2w').fadeIn();
        $('.r2t').css('display','none').fadeOut();
        $('.e2r').css('display','none').fadeOut();
        $('.wc9').css('display','none').fadeOut();
        $('.j2f').css('display','none').fadeOut();
        $('.a2s').css('display','none').fadeOut();
        $('.y2b').css('display','none').fadeOut();

    });
    $('#j2f').click(function(){
        $('.j2f').fadeIn();
        $('.r2t').css('display','none').fadeOut();
        $('.e2r').css('display','none').fadeOut();
        $('.q2w').css('display','none').fadeOut();
        $('.wc9').css('display','none').fadeOut();
        $('.a2s').css('display','none').fadeOut();
        $('.y2b').css('display','none').fadeOut();

    });
    $('#a2s').click(function(){
        $('.a2s').fadeIn();
        $('.r2t').css('display','none').fadeOut();
        $('.e2r').css('display','none').fadeOut();
        $('.q2w').css('display','none').fadeOut();
        $('.j2f').css('display','none').fadeOut();
        $('.wc9').css('display','none').fadeOut();
        $('.y2b').css('display','none').fadeOut();

    });
    $('#y2b').click(function(){
        $('.y2b').fadeIn();
        $('.r2t').css('display','none').fadeOut();
        $('.e2r').css('display','none').fadeOut();
        $('.q2w').css('display','none').fadeOut();
        $('.j2f').css('display','none').fadeOut();
        $('.a2s').css('display','none').fadeOut();
        $('.wc9').css('display','none').fadeOut();

    });

    
});



// slide
$( document ).ready(function( $ ) {
    $( '#example1' ).sliderPro({
        width: 960,
        height: 500,
        arrows: true,
        buttons: false,
        waitForLayers: true,
        thumbnailWidth: 200,
        thumbnailHeight: 100,
        thumbnailPointer: true,
        autoplay: false,
        autoScaleLayers: false,
        breakpoints: {
            500: {
                thumbnailWidth: 120,
                thumbnailHeight: 50
            }
        }
    });
});




// aos
AOS.init();


// owl carousel
$(document).ready(function(){
	var owl = $('.owl-carousel');

	owl.owlCarousel({
		margin:10,
		nav:true,
		loop:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})
})


// tooltip

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

// exterior interior button
$('.exterior_btn').click(function(){
    $('.exterior_btn a').css("background","#337ab7").css("color","white")
    $('.interior_btn a').css("background","white").css("color","#555")
    
})

$('.interior_btn').click(function(){
    $('.interior_btn a').css("background","#337ab7").css("color","white")
    $('.exterior_btn a').css("background","white").css("color","#555")
})


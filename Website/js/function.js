$(function(){


'use strict';

/* ==============================================
Detect Mobile Devices
=============================================== */
var detectmob = false; 

    if(navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {  

            detectmob = true;

    }



/* ==============================================
 Front Page
 =============================================== */  

/* Search Tool */
  $('.slip-search-wrap').hover(function(){

    var searchWidth=$('.fixed-header').find('.col-sm-2').width();

    $(this).find('input').stop().animate({

        width:searchWidth+'px',
        opacity:1

    },{queue:false,duration:300});
    

  },function(){

    $(this).find('input').stop().animate({

        width:0,
        opacity:0

    });

  },{queue:false,duration:300});


  $('.slip-search-wrap').hover(function(){

    $(this).find('.fa-search').stop().fadeToggle();

  });



/* Menu */
if($(window).width()>992){

  if(detectmob!=true){

  $(window).scroll(function(){

  var windowPos=$(window).scrollTop();

  if(windowPos>150){

    $('.fixed-header').fadeIn(300);

  }else{

    $('.fixed-header').slideUp(100);

  }


});


}


}else{


  $('.fixed-header').css('display','none');

}





/* Scrolling */
if($('.section-quote').length){

  var sectionQuote=$('.section-quote').offset().top;

  $(window).resize(function(){

    sectionQuote=$('.section-quote').offset().top;

  });


  $('.scrolling-btn').click(function(){

    $('body').animate({scrollTop:sectionQuote},600);

  });

}




/* Header Banner Height */
var windowHeight=$(window).height();

$('.front-header').css({

  height:windowHeight+'px'

});



$(window).resize(function(){

  var windowHeight=$(window).height();

  $('.front-header').css({

    height:windowHeight+'px'

  });



});



if($(window).width()>992){

  var topheadline=$('.top-headline').height();


  $('.front-header').find('.top-headline').css({

    marginTop:-topheadline/2+'px'

  });

}






/* ==============================================
Parallax
=============================================== */
if (detectmob != true) {

    $( '.front-header' ).parallax('50%',0.3,true);
    $( '.section-features' ).parallax('50%',0.4,false);
    $( '.section-counter' ).parallax('50%',0.4,false);
    $( '.section-card' ).parallax('50%',0.4,false);
    $( '.blog-header' ).parallax('50%',0.5,true);
    $( '.blog-single-header' ).parallax('50%',0.3,true);      

}






/* ==============================================
Top Elements Fading
=============================================== */
if (detectmob != true) {

    $(window).scroll(function(){
  

    var top=$(this).scrollTop();
    var wrap=$('.front-header,.blog-header .top-headline');
    var title=$('.front-header,.blog-header .top-headline').find('h1');
    var desc=$('.front-header,.blog-header .top-headline').find('.description');
    var separator=$('.front-header,.blog-header .top-headline').find('.separator');
    var button=$('.front-header').find('.detail-button');

    wrap.css('position','relative');
    title.css('position','relative');
    desc.css('position','relative');
    separator.css('position','relative');
    button.css('position','relative');

        title.animate({ 

            top:(top/6)+'px',
            opacity:1-top/260

        },0);

        desc.animate({

            top:(top/1.5)+'px',
            opacity:.7-top/350

         },0);
        
        separator.animate({

             top:top/2,
             width:(100-top/5)+'%',
             opacity:1-top/400          

         },0);

        button.animate({

            top:top/2,
            opacity:1-top/300

        },0);


});

}


/* ==============================================
About Blog Content
=============================================== */
$('.dropdown-trigger').hover(function(){

    $(this).siblings('ul').stop().fadeToggle('fast');

});

$('.dropdown-trigger').siblings('ul').hover(function(){

    $(this).stop().fadeToggle('fast');

});




/* ==============================================
Isotope
=============================================== */

var $container = $('.isotope-container').isotope({
  transitionDuration: '.6s'
});

$('.filter-group').find('a').click(function(){

    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });

});


  /* ==============================================
Gallery
=============================================== */
$('.zoom-gallery').magnificPopup({

    delegate: '.image-zoom',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    navigateByImgClick: false,


    mainClass: 'mfp-with-zoom mfp-img-mobile',         
       gallery: {
        enabled: true
      },

      image: {
            verticalFit: true,
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          },
    zoom: {
        enabled: true,
        duration: 300,
        opener: function(element) {
          return element.siblings('img');
        }
    },
    callbacks: {

        markupParse      : function (template, values, item) {
        template.find('.desc').html('');
        var $desc = item.el.data("desc");       
                           
        template.find('.desc').append($desc);                            

        },


    }
      
});

$('.isotope-container').find('.isotope-single').hover(function(){

    $(this).children('img').stop().animate({
        opacity:'.3'
    },200);


    $(this).find('.image-zoom').stop().animate({

        marginTop:'-20px',
        opacity:1

    },200);

    $(this).find('.image-permalink').stop().animate({

        marginTop:'-20px',
        opacity:1

    },200);


},function(){

    $(this).children('img').stop().animate({
        opacity:'1'
    },200);

    $(this).find('.image-zoom').stop().animate({

        marginTop:'-40px',
        opacity:0

    },200);

    $(this).find('.image-permalink').stop().animate({

        marginTop:0,
        opacity:0

    },200);

});



$('.filter-inner').find('a').click(function(){

    $('.filter-inner').find('a').removeClass('default');
    $(this).addClass('default');

});



/* ==============================================
Number Counter
=============================================== */
$('.section-counter').find('.counter-number').counterUp({
            delay: 10,
            time: 1000
        });


/* ==============================================
Team Slider
=============================================== */
$('.team-img-inner').freetile();
  
$('.teamslider-wrap').teamslider();





/* ==============================================
Timeline Calling
=============================================== */
if($('.section-history').length){

  $('#timeline').timelinr({
        orientation:  'vertical',
        issuesSpeed:  250,
        datesSpeed:   100,
        startAt:    1
  });

}



/* ==============================================
Vertical Slider
=============================================== */
 $('.vertical-slider').slick({
        centerMode: true,
        infinite: false,
        centerPadding: '125px',
        slidesToShow: 1,
        vertical:true,       
        initialSlide:1,        
        swipe:false        
    });


$('.slider-vertical').find('.arrow-left').click(function(){

  $('.vertical-slider').slickPrev();  

});


$('.slider-vertical').find('.arrow-right').click(function(){

  $('.vertical-slider').slickNext();

});





/* ==============================================
Gallery Big Button
=============================================== */
  $('.gallery-inner-span').hover(function(){

    $('.gallery-inner-button').css('outline-color','white');
    $('.border-line-two').css('borderColor','white');

  },function(){

    $('.gallery-inner-button').css('outline','5px solid rgba(190,190,190,.3)');   
    $('.border-line-two') .css('borderColor','#3a5386');

  });




/* ==============================================
Blog Post Slider
=============================================== */
var postSlider = new Swiper('.blog-post-slider',{

  loop:true,
  speed:500

});

$('.post-slider-left').on('click', function(e){
    e.preventDefault()
    postSlider.swipePrev()
});

$('.post-slider-right').on('click', function(e){
    e.preventDefault()
    postSlider.swipeNext()
});


var contentHeight=$('.blog-post-slider .swiper-slide-active').find('img').height();

  $('.blog-post-slider').css({

    height:contentHeight+'px'

  });



$(window).resize(function(){

  var contentHeight=$('.blog-post-slider .swiper-slide-active').find('img').height();

  $('.blog-post-slider').css({

    height:contentHeight+'px'

  });


});



$('.swiper-slide,.post-slider-right,.post-slider-left').click(function(){

  var contentHeight=$('.blog-post-slider .swiper-slide-active').find('img').height();

  $('.blog-post-slider').css({

    height:contentHeight+'px'

  });

});




/* ==============================================
Video
=============================================== */
$(".player").mb_YTPlayer();

$('.player-icon').click(function(){
  $('.player').playYTP();
});


$('.player').on("YTPStart",function(){   
  $('.video-text-wrap').fadeOut();
});


$('.player').on("YTPPause YTPEnd",function(){   
  $('.video-text-wrap').fadeIn();
});




/* ==============================================
Gallery Inner
=============================================== */
$('.zoom-gallery').magnificPopup({

    delegate: '.image-zoom',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    navigateByImgClick: false,


    mainClass: 'mfp-with-zoom mfp-img-mobile',         
       gallery: {
        enabled: true
      },

      image: {
            verticalFit: true,
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          },
    zoom: {
        enabled: true,
        duration: 300,
        opener: function(element) {
          return element.siblings('img');
        }
    },
    callbacks: {

        markupParse      : function (template, values, item) {
        template.find('.desc').html('');
        var $desc = item.el.data("desc");       
                           
        template.find('.desc').append($desc);                            

        },


    }
      
});

$('.isotope-container').find('.isotope-single').hover(function(){

    $(this).children('img').stop().animate({
        opacity:'.3'
    },200);


    $(this).find('.image-zoom').stop().animate({

        marginTop:'-20px',
        opacity:1

    },200);

    $(this).find('.image-permalink').stop().animate({

        marginTop:'-20px',
        opacity:1

    },200);


},function(){

    $(this).children('img').stop().animate({
        opacity:'1'
    },200);

    $(this).find('.image-zoom').stop().animate({

        marginTop:'-40px',
        opacity:0

    },200);

    $(this).find('.image-permalink').stop().animate({

        marginTop:0,
        opacity:0

    },200);

});



$('.filter-inner').find('a').click(function(){

    $('.filter-inner').find('a').removeClass('default');
    $(this).addClass('default');

});









/* ==============================================
Cross Browser
=============================================== */
/* IE */
if($.browser.msie){

  /* All IE */
  $('input[type="text"],input[type="email"]').addClass('padding-bottom');

  /* IE 10 */
  if($.browser.version==10){

    $('.gallery-inner-span').addClass('padding-left');

    $('.section-gallery-inner .filter-inner').find('a').addClass('padding-top');

  }

  /* IE 9 */
  if($.browser.version==9){

    $('.gallery-inner-span').addClass('padding-left');

    $('.section-gallery-inner .filter-inner').find('a').addClass('padding-top');

    $('input[type="text"]').val('Name');

    $('input[type="text"]').focus(function(){

      if($(this).val()=='Name'){

        $(this).val('');

      }

    });



    $('input[type="email"]').val('Email');

    $('input[type="email"]').focus(function(){

      if($(this).val()=='Email'){

        $(this).val('');

      }

    });


    $('textarea').val('Message');

    $('textarea').focus(function(){

      if($(this).val()=='Message'){

        $(this).val('');

      }

    });

  } 


}


/* Fittext */
$('h1').fitText(1, { minFontSize: '19px', maxFontSize: '50px' });

$('h2').fitText(1, { minFontSize: '17px', maxFontSize: '40px' });

$('h3').fitText(1, { minFontSize: '15px', maxFontSize: '30px' });





/* Responsive */
$('.menu-open').click(function(){

  $('.mobile-menu-wrap').slideDown(200);

});


$('.menu-close').click(function(){

  $('.mobile-menu-wrap').slideUp(200);

});



$('.mobile-menu-wrap').find('a').click(function(){

  $('.mobile-menu-wrap').slideUp(200);

});




$('.mobile-isotope').click(function(){

  $('.filter-inner').slideToggle(200);

  $('.filter-inner').find('a').click(function(){

    $('.filter-inner').slideUp(200);

  });

});









/* ==============================================
Map Calling
=============================================== */



 function initialize() {

  var mapCanvas = document.getElementById('map_canvas');

  var myLocation = new google.maps.LatLng(39.9177, 32.8560);

  var mapOptions = {
    center: myLocation,
    zoom: 15          
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
      position: myLocation,
      map: map,
      icon: 'img/marker.png'
  });


    map.set('styles', [
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { color: '#e4d4b4' },
      { weight: 1 }
    ]
  }, {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      { saturation: 1 },
      { invert_lightness: false }
    ]
  }, {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      { hue: '#ffff00' },
      { gamma: 1.4 },
      { saturation: 82 },
      { lightness: 96 }
    ]
  }, {
    featureType: 'poi.school',
    elementType: 'geometry',
    stylers: [
      { hue: '##21366c' },
     
    ]
  }
]);    


}


if($('.section-map').length){

  google.maps.event.addDomListener(window, 'load', initialize);
  
}




/* ==============================================
Page Loader
=============================================== */
$('.page-loader').find('img').fadeOut(300);
$('.page-loader').delay(100).fadeOut(500);





});
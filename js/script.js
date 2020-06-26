

$('html').niceScroll (
  {
      cursorwidth: "20px",
    // cursorcolor: "#fff",
      cursorborder: "none",
      cursorborderradius: "5px",
  }
)

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

window.onscroll = function() {myFunction()};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "15px";
    document.getElementById("header").style.backgroundColor = " #e49c46";
    document.getElementById("header").style.zIndex = "1";
    document.getElementById("header").style.paddingBottom = "5px";

   
  } else {
    document.getElementById("header").style.fontSize = "30px";
    document.getElementById("header").style.backgroundColor  = "transparent";
  
  }
}


          
                                    
var fixmeTop = $('.first-sticky').offset().top;
var fixmeDowen = $('.second-sticky').offset().top ;  
$(window).scroll(function() { 
    var currentScroll = $(window).scrollTop();
    if (currentScroll > fixmeTop && currentScroll <1790 ) {           
      $("#sticker1").sticky({}); 
        } else {       
            $("#sticker1").unstick();                                      
    }
    });

var fixmeTop1 = $('.second-sticky').offset().top;
$(window).scroll(function() { 
    var currentScroll = $(window).scrollTop();
    if (currentScroll > fixmeTop1 && currentScroll <2790 ) {           
      $("#sticker2").sticky({}); 
        } else {       
            $("#sticker2").unstick();                                      
    }
    });

var fixmeTop2 = $('.third-sticky').offset().top;
$(window).scroll(function() { 
    var currentScroll = $(window).scrollTop();
    if (currentScroll > fixmeTop2 && currentScroll <3790 ) {           
      $("#sticker3").sticky({}); 
        } else {       
            $("#sticker3").unstick();                                      
    }
    });



    
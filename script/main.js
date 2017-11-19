
$(document).ready(function(){
     $(".fa-bars").click(function(){
        $(".resp-menu").toggle("slow");
    });
    setTimeout(function(){ 
        $("#loading").fadeOut()
    }, 2000);
    ;
    $('.three-slide').owlCarousel({
        items: 3,
        loop: true,
        nav:true,
        margin: 30,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('.five-slide').owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        nav:false,
        margin: 30,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

// accardion starts
$(".head").click(function(ev){
    $(this).parent().find(".body").slideToggle();
    $(this).find("i").toggleClass("fa-minus");
       $(".head").not($(this)).parent().find(".body").slideUp();
       $(".head").not($(this)).find("i").removeClass("fa-minus").addClass("fa-plus");
})
// accardion ends
// scroll top starts
$('.daire').click(function(){
    $('html, body').animate({ scrollTop: 0 }, "slow")
    return false;
})

$(window).scroll(function () {
    scroll = $(window).scrollTop();
    console.log(scroll)
    if (scroll >= 500) {
        $(".daire").css({
            "position": "fixed",
            "bottom": 40,
            "right": 10
        });
    } else {
        $(".daire").css({
            "position": "absolute",
            "right": "10px",
            "bottom": "-500px"
        });
    }
});
// scroll top ends
$(".resp-menu li").click(function () {
    var scroll_number = $(this).attr("scroll");
    var scroll_position = $("section[scroll=" + scroll_number + "]").offset().top;

    $('html, body').animate({ scrollTop: scroll_position }, "slow")
    return false;
})
   // menu navigation starrts
 $(".menu-items button").click(function () {
    var scroll_number = $(this).attr("scroll");
    var scroll_position = $("section[scroll=" + scroll_number + "]").offset().top;

    $('html, body').animate({ scrollTop: scroll_position }, "slow")
    return false;
})
// menu navigation ends

// change menu item color when scroll starts
var menu_legth = $(".menu-items button").length;
console.log(menu_legth)
    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        for (var i=0;i<menu_legth;i++){
            var scroll_position = $("section[scroll="+i+"]").offset().top
            if (scroll >= scroll_position-10) {
                $("button[scroll="+i+"]").addClass("active");
                $("button[scroll="+i+"]").siblings().removeClass("active");
            }
        }
    });
    // change menu item color when scroll ends

    
});
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });


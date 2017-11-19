  $(window).scroll(function () {
    scroll = $(window).scrollTop();
    // console.log(scroll_position)
    if (scroll >= 5500) {
        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
            {
              duration: 2000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
            });  
          });
    } 
});

// progressbar starts
$(window).scroll(function () {
  scroll = $(window).scrollTop();
  // console.log(scroll_position)
  if (scroll >= 9200) {
  $(".service .counter").attr('data-count');
  $('.progress').each(function() {
    var a=$(this).text();
    var b=$(this).parent().parent().last().find(".progress_main").css({"width":a+"%"});
  })
  } 
});
// progressbar ends
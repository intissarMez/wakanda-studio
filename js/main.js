$(document).ready(function(){
    if($('.feedback').length) {
        var $feedback = $('.feedback');
        $('button', $feedback).click(function(){
           $feedback.addClass('hidden'); 
           $('.disqus_thread').removeClass('hidden'); 
        });
    }
    /*$(window).scroll(function () {
        console.log($(this).scrollTop());
		if ($(this).scrollTop() > 50) {
			$('.main-nav').addClass("sticky");
		} else {
			$('.main-nav').removeClass("sticky");
		}
	});*/
    var $blah = $(".main-nav"),
        $window = $(window),
        offset = $blah.offset();

    $window.scroll(function () {
        if($window.width() >= 992) {
            if ($window.scrollTop() > offset.top) {
                $blah.stop().animate({
                    top: 50
                });
            } else {
                $blah.stop().animate({
                    top: '180'
                });
            }
        }
    });

});
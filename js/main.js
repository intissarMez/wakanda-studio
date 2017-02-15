$(document).ready(function(){
    if($('.feedback').length) {
        var $feedback = $('.feedback');
        $('button', $feedback).click(function(){
           $feedback.addClass('hidden'); 
           $('.disqus_thread').removeClass('hidden'); 
        });
    }
});
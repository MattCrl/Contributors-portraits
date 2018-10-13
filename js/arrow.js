define('arrow', function () {
    $('#arrow').hover(
        function () { $(this).removeClass('animated') },
        function () { $(this).addClass('animated') }
    );

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#arrow').fadeIn();
        } else {
            $('#arrow').fadeOut();
        }
    });

    $('#arrow').on('click',function(){
        $('html, body').animate({
            scrollTop: "0px"
        }, 800);
        return false;
    });
});
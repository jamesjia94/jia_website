// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        console.log($(this));
        var $anchor = $(this);
        var width =  $($anchor.attr('href')).offset().top;
        $('html, body').stop().animate({
            scrollTop: width
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
        if ($(window).width() < 768){
            $(".topbar-navbar-collapse").collapse("toggle");
        }
    });
    if ($(window).width() < 768){
        $('body').scrollspy({
                target: '.bs-topbar',
                offset: 40
        });
    }
    else{
        $('body').scrollspy({
                target: '.bs-sidebar',
                offset: 40
        });
    }

    $(window).resize(function() {
        $data = $('body').data("bs.scrollspy");
        if ($(window).width() < 768){
            $data["selector"]=".bs-topbar .nav li > a";
        }
        else{
            $data["selector"]=".bs-sidebar .nav li > a";
        }
        $('body').data("bs.scrollspy", $data);
    });
});

var TOP_NAVBAR_HEIGHT_OFFSET = 50;
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var width =  $($anchor.attr('href')).offset().top;
        if ($(window).width() < 768){
            width -= TOP_NAVBAR_HEIGHT_OFFSET;
        }
        $('html, body').stop().animate({
            scrollTop: width
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    $('body').scrollspy({
        target: '.bs-docs-sidebar',
        offset: 20
    });

    $(window).resize(function() {
        $data = $('body').data("bs.scrollspy");
        if ($(window).width() < 768){
            $data["selector"]=".bs-topbar .nav li > a";
        }
        else{
            $data["selector"]=".bs-docs-sidebar .nav li > a";
        }
        $('body').data("bs.scrollspy", $data);
        
        var $affix = $(".affix");
        var $parent = $affix.parent();
        $affix.width($parent.width()); 
    });
});

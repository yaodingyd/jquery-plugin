/*
    This plugin creates a clone of the element as a placeholder inserted into the element's original position, makes the element
    fullscreen with fixed position.
*/
(function ($) {
    var topPos, leftPos, width, height, style;
    $.fn.fullScreen = function (flag) {
        var $el = this;
        var el = $el.get(0);
        if (flag) {
            topPos = el.getBoundingClientRect().top;
            leftPos = el.getBoundingClientRect().left;
            width = $el.width();
            height = $el.height();
            style = $el.attr('style');
            $('<div id="fullscreen-placeholder"></div>').css({
                width: width
                , height: height
                , visibility: 'hidden'
            }).insertAfter($el);
            $el.css({
                position: 'fixed'
                , top: topPos
                , left: leftPos
                , width: width
                , height: height
                , 'z-index': '9999'
                , 'max-height': '100vh'
                , 'max-width': '100vw'
            });
            $el.animate({
                top: '0'
                , left: '0'
                , width: '100%'
                , height: '100%'
            }, 1000);
        }
        else {
            $el.animate({
                top: topPos
                , left: leftPos
                , width: width
                , height: height
            }, 1000, function () {
                $('#fullscreen-placeholder').remove();
                $el.attr('style', style);
            });
        }
    }
}(jQuery))

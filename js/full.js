$(function () {

    let effects = 'animated flipInX';
    let effects2 = 'animated flipInY';
    let effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';



    $('.month').click(function () {

        $(this).addClass(effects).one(effectsEnd, function () {
            $(this).removeClass(effects);
        });
    });

    $('.years').click(function () {

        $(this).addClass(effects).one(effectsEnd, function () {
            $(this).removeClass(effects);
        });
    });

    $('.icon').hover(function () {

        $(this).addClass(effects2).one(effectsEnd, function () {
            $(this).removeClass(effects2);
        });
    });


});


$('a.nav-link').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 70
            }, 900);
            return false;
        }
    }
});
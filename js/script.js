(function() {
    'use strict';

    // loader
    $.fakeLoader({
        bgColor: '#e41b13',
        spinner: 'spinner6'
    });
    // loader end

    // owl carousel
    $('.owl-testimoni').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    })
    // owl carousel end

    // counter
    $("#counter1").countMe(40, 1);
    $("#counter2").countMe(400, 0);
    $("#counter3").countMe(40, 1);
    $("#counter4").countMe(40, 1);
    // counter end

})();
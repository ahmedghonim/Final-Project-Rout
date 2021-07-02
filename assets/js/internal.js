'use strict';
$(function() {
    var isrtl = document.getElementsByTagName("html")[0].getAttribute("dir") === 'rtl';

    $('.dropdown-menu > .dropdown > a').addClass('dropdown-toggle');
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-menu > .dropdown .show').removeClass("show");
        });
        return false;
    });
    //on hover
    /*
    $('nav li.dropdown').hover(function() {
      $(this).find('>.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
      $(this).find('>.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
    */
    //Quntity product details
    $(".ddd").on("click", function() {
        var $button = $(this);
        var oldValue = $button.closest('.sp-quantity').find("input.quntity-input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.closest('.sp-quantity').find("input.quntity-input").val(newVal);
    });

    //choose radio button
    $('input[type="radio"]').click(function(e) {
        e.stopPropagation();
        var inputValue = $(this).attr("id");
        var targetBox = $("." + inputValue);
        $(".open-box").not(targetBox).hide();
        $(targetBox).show();
    });

    //=========================
    //Owl Slider
    jQuery.fn.extend({
        toggleOwl: function(selector, options, destroy) {
            return this.each(function() {
                $(this).find(selector).filter(function() {
                    return $(this).parent().is(':visible');
                }).owlCarousel(options);

                $(this).on('shown.bs.tab', function(event) {
                    var target = $(event.target.getAttribute('href')).find(selector);
                    if (!target.data('owlCarousel')) {
                        var owl = target.owlCarousel(options).data("owlCarousel");
                    }
                });
                if (destroy === true) {
                    $(this).on('hide.bs.tab', function(event) {
                        var target = $(event.target.getAttribute('href')).find(selector);
                        if (target.data('owl.carousel')) {
                            target.data('owl.carousel').destroy();
                        }
                    });
                }
            });
        }
    });

    // Products tabs slider
    $('.main-slider').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 30,
        autoplay: true,
        thumbs: true,
        rtl: isrtl,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });
    $('.second').owlCarousel({
        items: 4,
        lazyLoad: true,
        loop: true,
        margin: 30,
        autoplay: true,
        thumbs: true,
        rtl: isrtl,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 4,
            }
        }
    });
    //============== 
    $('.details-slider').owlCarousel({
        thumbs: true,
        thumbsPrerendered: true,
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 30,
        center: true,
        dots: false,
        rtl: isrtl,
        nav: false,
    });
    //=========================
    // flip book
    if (document.getElementById("book")) {

        $('#book').FlipBook({
            pdf: 'assets/vendors/flip-book/books/pdf/CondoLiving.pdf',
            pages: 40,
            speed: 1000,
            template: {
                html: 'assets/vendors/flip-book/templates/default-book-view.html',
                styles: [
                    'assets/vendors/flip-book/css/white-book-view.css'
                ],
                links: [{
                    rel: 'stylesheet',
                    href: 'assets/vendors/flip-book/css/font-awesome.min.css'
                }],
                script: 'assets/vendors/flip-book/js/default-book-view.js'
            }
        });
    };
    //=========================

    //=========================
    // count
    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //=========================
    //Magnific popup js
    $('.popup-gallery').each(function() {
        var $container = $(this);
        var $imageLinks = $container.find('.item');

        var items = [];
        $imageLinks.each(function() {
            var $item = $(this);
            var type = 'image';
            if ($item.hasClass('magnific-youtube')) {
                type = 'iframe';
            }
            var magItem = {
                src: $item.attr('href'),
                type: type
            };
            magItem.title = $item.data('title');
            items.push(magItem);
        });

        $imageLinks.magnificPopup({
            mainClass: 'mfp-fade',
            items: items,
            gallery: {
                enabled: true,
                tPrev: $(this).data('prev-text'),
                tNext: $(this).data('next-text')
            },
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                    var index = $imageLinks.index(this.st.el);
                    if (-1 !== index) {
                        this.goTo(index);
                    }
                }
            }
        });
    });

    //--------------------	
    //Gmaps

});

function map() {
    if (document.getElementById('map')) {
        var locations = [
            ['Bondi Beach', -33.890542, 151.274856, 4],
        ];
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng(-33.92, 151.25),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var infowindow = new google.maps.InfoWindow();
        var icon = {
            url: 'assets/images/logo-contact.png',
            scaledSize: new google.maps.Size(40, 37)
        };
        var marker, i;
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                icon: icon,
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    }
};

function filtersearch() {
    document.getElementById("myDropdown").classList.toggle("show");
}

$("#myInput").focusout(function() {
    setTimeout(function() {
        myDropdown.classList.remove("show");
    }, 100);
});

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    var div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        var txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
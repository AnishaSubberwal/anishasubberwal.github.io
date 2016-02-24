/*
 Theme Name: EOVO - Creative HTML5 Responsive Template
 Theme URL: http://themewar.com/html/eovo/
 Author: ThemeWar
 Author URI: http://www.themewar.com
 Description: "EOVO - Creative HTML5 Responsive Template" is modern, clean, multiple functions and professionally. It has 11 homepage layouts and 11 Online store layout Options! This template suits for any type of portfolio, Creative, corporate, design studio, Fashions, Blog shopping and more… The template is designed on Bootstrap grid and can be easily conversion into Wordpress, Joomla and other systems. This is a perfect choice!
 Version: 1.0
 */
(function ($) {
    'use strict';
    //========================
    // Loader
    //========================
    $(window).load(function () {
        if ($(".loaderWrap").length > 0)
        {
            $(".loaderWrap").delay(500).fadeOut("slow");
        }
    });
    //=======================================================
    // Home Slider
    //=======================================================
    if ($(".mainSlider").length > 0)
    {
        var revs;
        revs = $('.tp-banner1').revolution({
            delay: 6000,
            startheight: 910,
            startwidth: 1170,
            hideThumbs: true,
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,
            navigationType: "bullet",
            navigationArrows: "none",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "on",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "on"
        });

    }
    //=======================================================
    // Shop Three Slider
    //=======================================================
    if ($(".shop3Slide").length > 0)
    {
        var revs;
        revs = $('.tp-banner1').revolution({
            delay: 6000,
            startheight: 645,
            startwidth: 1170,
            hideThumbs: true,
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,
            navigationType: "bullet",
            navigationArrows: "none",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "on",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "off"
        });

    }
    //=======================================================
    // Home 7 Slider
    //=======================================================
    if ($(".mainSlider2").length > 0)
    {
        var revs;
        revs = $('.tp-banner1').revolution({
            delay: 6000,
            startheight: 910,
            startwidth: 1170,
            hideThumbs: true,
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,
            navigationType: "bullet",
            navigationArrows: "none",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "on",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "off"
        });

    }
    //=======================================================
    // Home 11 Slider
    //=======================================================
    if ($(".mainSlider11").length > 0)
    {
        var revs;
        revs = $('.tp-banner1').revolution({
            delay: 6000,
            startheight: 910,
            startwidth: 1170,
            hideThumbs: true,
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,
            navigationType: "bullet",
            navigationArrows: "none",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "on",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "on"
        });

    }

    //========================
    // Home 5 Slider
    //========================
    if ($("#slider5").length > 0) {
        $("#slider5").owlCarousel({
            autoPlay: true,
            navigation: false, // Show next and prev buttons
            slideSpeed: 1500,
            paginationSpeed: 500,
            singleItem: true,
            pagination: true,
            stopOnHover: true,
            transitionStyle: "bounce"

        });
    }
    //========================
    // Home 9 Slider
    //========================
    if ($("#galSld").length > 0) {
        var gals = $("#galSld");
        gals.owlCarousel({
            autoPlay: true,
            navigation: true, // Show next and prev buttons
            slideSpeed: 1500,
            paginationSpeed: 500,
            pagination: false,
            items: 4,
            rewindNav: false,
            stopOnHover: true

        });
    }
    // Custom Navigation Events
    $(".owlnext").on('click', function (e) {
        e.preventDefault();
        gals.trigger('owl.next');
    });
    $(".owlprev").on('click', function (e) {
        e.preventDefault();
        gals.trigger('owl.prev');
    });

    //========================
    // Features Slider
    //========================
    if ($("#featureSlider").length > 0) {
        $("#featureSlider").owlCarousel({
            autoPlay: true,
            navigation: false, // Show next and prev buttons
            slideSpeed: 1500,
            paginationSpeed: 500,
            singleItem: true,
            pagination: true,
            stopOnHover: true,
            transitionStyle: "bounce"

        });
    }

    //========================
    // Features2 Slider
    //========================
    if ($("#featureSlider2").length > 0) {
        $("#featureSlider2").owlCarousel({
            autoPlay: true,
            navigation: false, // Show next and prev buttons
            slideSpeed: 1500,
            paginationSpeed: 500,
            singleItem: true,
            pagination: true,
            stopOnHover: true,
            transitionStyle: "bounce"

        });
    }
    //========================
    // Image Slider
    //========================
    if ($("#imageSlider").length > 0) {
        $("#imageSlider").owlCarousel({
            autoPlay: true,
            navigation: false, // Show next and prev buttons
            slideSpeed: 1500,
            paginationSpeed: 500,
            singleItem: true,
            pagination: true,
            stopOnHover: true

        });
    }
    //========================
    // Team Slider
    //========================
    resizeFullHeight();

    window.onresize = function (event) {
        resizeFullHeight();
    }

    function resizeFullHeight() {
        var vpw = $(window).width();
        var vph = $(window).height();
        var sph = $(".slider5item").height();
        var mar = (vph - sph) / 2;
        $(".slider5,.videoBanner").css({"height": vph + "px"});
        $(".slider6").css({"height": vph + "px"});
        $(".slider11").css({"height": vph + "px"});
        $(".slider7").css({"height": (vph - 90) + "px"});
        $(".shop_Slider").css({"height": (vph - 90) + "px"});
        $(".shop2").css({"height": (vph - 100) + "px"});

        $("#slider5").css('margin-top', mar + 'px');
    }

    //========================
    // Team Slider
    //========================
    if ($("#teamCarousel").length > 0) {
        $("#teamCarousel").owlCarousel({
            items: 3,
            autoPlay: false,
            stopOnHover: true,
            slideSpeed: 500,
            itemsMobile: [600, 1],
            itemsTabletSmall: [767, 2],
            itemsTablet: [991, 2],
            itemsDesktopSmall: [1199, 2]
        });
    }
    //========================
    // Testimonial Slider
    //========================
    if ($(".bxSlider").length > 0) {
        $('.bxSlider').bxSlider({
            mode: 'vertical',
            slideMargin: 0,
            adaptiveHeight: true,
            nextSelector: '#bxnext',
            prevSelector: '#bxpre',
            nextText: '<img alt="" src="images/home2/bx-bottom.png">',
            prevText: '<img alt="" src="images/home2/bx-top.png">',
            pager: false,
            auto: true
        });
    }
    if ($(".abBxSlider").length > 0) {
        $('.abBxSlider').bxSlider({
            mode: 'horizontal',
            slideMargin: 0,
            adaptiveHeight: true,
            pager: true,
            auto: false
        });
    }
    //========================
    // Art details 
    //========================
    if ($("#bxArtCros").length > 0) {
        $('#bxArtCros').bxSlider({
            mode: 'vertical',
            slideMargin: 0,
            adaptiveHeight: true,
            nextSelector: '#artbxnext',
            prevSelector: '#artbxpre',
            nextText: '<img alt="" src="images/home2/bx-bottom.png">',
            prevText: '<img alt="" src="images/home2/bx-top.png">',
            pager: false,
            auto: true
        });
    }
    //========================
    // Magnific Popup
    //========================
    if ($(".artpop, .galPop, .shopPop, .artpop7").length > 0) {
        $(".artpop, .galPop, .shopPop, .artpop7").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    //=======================================================
    // Background Video
    //=======================================================
    var vid = document.getElementById("myVideo");
    function playPause() {
        if (vid.paused) {
            vid.play();
        }
        else {
            vid.pause();
        }
    }
    if ($('#myVideo').length > 0) {
        $('#playVideo').on('click', function (e) {
            e.preventDefault();
            playPause();
            if ($(this).hasClass('playing'))
            {
                $(this).removeClass('playing').html('<i class="fa fa-play"></i>');
                vid.pause();
            }
            else
            {
                $(this).addClass('playing').html('<i class="fa fa-pause"></i>');
                vid.play();
            }
        });
    }

    //=======================================================
    // Gallery Mixing
    //=======================================================
    if ($('#gallMix').length > 0)
    {
        $('#gallMix').themeWar();
    }
    //=======================================================
    // Google Map
    //=======================================================
    if ($("#map").length > 0)
    {
        var map;
        map = new GMaps({
            el: '#map',
            lat: 51.4584218,
            lng: -0.0813982,
            scrollwheel: false,
            zoom: 16,
            zoomControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });
        var styles = [{"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]}, {"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]}, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}, {"lightness": 17}]}, {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]}, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#ffffff"}, {"lightness": 18}]}, {"featureType": "road.local", "elementType": "geometry", "stylers": [{"color": "#ffffff"}, {"lightness": 16}]}, {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]}, {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#dedede"}, {"lightness": 21}]}, {"elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]}, {"elementType": "labels.text.fill", "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]}, {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "geometry", "stylers": [{"color": "#f2f2f2"}, {"lightness": 19}]}, {"featureType": "administrative", "elementType": "geometry.fill", "stylers": [{"color": "#fefefe"}, {"lightness": 20}]}, {"featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]}];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }
    //=======================================================
    // Sub Menu
    //=======================================================
    if ($(".mainMenu,.mainMenu2").length > 0)
    {
        $("li.menu-has-children > a").click(function (e) {
            e.preventDefault();
            if ($(this).parent('li').hasClass('active'))
            {
                $(this).parent('li').removeClass('active');
                $(this).next('ul.subMenu').slideUp('slow');
            }
            else
            {
                $(".menu-has-children.active ul.subMenu").slideUp('fast');
                $(".menu-has-children.active").removeClass("active");
                $(this).parent().toggleClass('active');
                $(this).next('ul.subMenu').slideToggle('slow');
            }
        });
    }
    //=======================================================
    // Fixed Header 
    //=======================================================
    if ($(".headerArea,.headerAreaTwo,.headerThree,.headerAreaFour,.headerAreaEight,.headerAreaTen,.shopHeader").length > 0)
    {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100)
            {
                $(".headerArea,.headerAreaTwo,.headerThree,.headerAreaFour,.headerAreaEight,.headerAreaTen,.shopHeader").addClass('headerFix animated fadeInUp1');
            }
            else
            {
                $(".headerArea,.headerAreaTwo,.headerThree,.headerAreaFour,.headerAreaEight,.headerAreaTen,.shopHeader").removeClass('headerFix animated fadeInUp1');
            }
        });
    }
    else
    {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 170)
            {
                $(".headerArea").addClass('headerFix animated fadeInUp1');
            }
            else
            {
                $(".headerArea").removeClass('headerFix animated fadeInUp1');
            }
        });
    }
    //========================================================
    // Subscribe Form
    //========================================================
    if ($(".subscribeForm").length > 0)
    {
        $(".subscribeForm").submit(function (e) {
            e.preventDefault();
            $(".subscribeForm button").html('<span>Success!</span>');
            var email = $(".subscribeForm input").val();
            if (email !== '')
            {
                $(".subscribeForm input").removeClass('reqError');
                $.ajax({
                    type: "POST",
                    url: 'subscription.php',
                    data: {email: email},
                    success: function (data)
                    {
                        $(".subscribeForm input").val('');
                        $(".subscribeForm input").attr('placeholder', 'Successfully Done!');
                    }
                });
            }
            else
            {
                $(".subscribeForm input").addClass('reqError');
                $(".subscribeForm button").html('<span>submit</span>');
            }
            return false;
        });

    }
    //========================================================
    // Contact
    //========================================================
    if ($(".contactForm,.conForm").length > 0)
    {
        $(".contactForm,.conForm").on('submit', function (e) {
            e.preventDefault();
            var allData = $(this).serialize();
            var required = 0;
            $(".submitButton button,.conForm button").html('<span>Sending...</span>');
            $(".required", this).each(function () {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            //alert(required);
            if (required === 0)
            {
                $(".submitButton button,.conForm button").html('<span>Sending...</span>');
                $.ajax({
                    type: "POST",
                    url: 'mail.php',
                    data: {allData: allData},
                    success: function (data)
                    {
                        $(".contactForm input, .contactForm textarea").val('');
                        $(".conForm input, .conForm textarea").val('');
                        $(".submitButton button,.conForm button").html('<span>Done!</span>');
                    }
                });
            }
            else
            {
                $(".submitButton button,.conForm button").html('<span>Send</span>');
                $(".contactform2 .submitButton button").html('<span>Send a message</span>');
            }
        });
    }
    //========================
    // WOW INIT
    //========================
    if ($(window).width() > 490)
    {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }
    //========================
    // Progressbar
    //========================
    if ($('.abSkillArea').length > 0) {
        $('.abSkillArea').appear(function () {
            $('.progress .progress-bar').progressbar({display_text: 'fill'});
        });
    }
    //========================
    // FunFacts
    //========================
    if ($(".funfactsArea").length > 0)
    {
        $('.funFactsCont h1').appear(function () {
            var $this = $(this);
            $({Counter: 0}).animate({Counter: $this.text()}, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
    //========================
    // Art Mixer
    //========================
    $(window).load(function () {

        /* initialize shuffle plugin */
        if ($("#grid").length > 0)
        {

            var $grid = $('#grid');
            $grid.shuffle({
                itemSelector: '.galItem' // the selector for the items in the grid
            });
            /* reshuffle when user clicks a filter item */
            $('#filter li').on('click', function () {

                // set active class
                $('#filter li').removeClass('active');
                $(this).addClass('active');

                // get group name from clicked item
                var groupName = $(this).attr('data-group');

                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        }
    });
    //========================
    // Audio Player
    //========================
    if ($('.audioPost').length > 0) {
        $('#audioPost audio').mediaelementplayer();
    }

    //========================
    // Testimnial Slider
    //========================
    if ($("#aboutTestimonial").length > 0) {
        $("#aboutTestimonial").owlCarousel({
            autoPlay: true,
            navigation: false,
            slideSpeed: 1500,
            paginationSpeed: 500,
            singleItem: true,
            pagination: true,
            stopOnHover: true

        });
    }

    //=======================================================
    // Shop Slider
    //=======================================================
    if ($(".shopSlider").length > 0)
    {
        var revs;
        revs = $('.tp-banner1').revolution({
            delay: 6000,
            startheight: 910,
            startwidth: 1170,
            hideThumbs: true,
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,
            navigationType: "bullet",
            navigationArrows: "none",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "on",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "on"
        });

    }
    //========================
    // Seasonal Slider
    //========================
    if ($("#sesonal").length > 0)
    {

        var gals = $("#sesonal");
        gals.owlCarousel({
            autoPlay: true,
            navigation: false, // Show next and prev buttons
            slideSpeed: 1500,
            paginationSpeed: 500,
            pagination: false,
            items: 4,
            rewindNav: false,
            stopOnHover: true

        });
        // Custom Navigation Events
        $(".sesonNext").on('click', function (e) {
            e.preventDefault();
            gals.trigger('owl.next');
        });
        $(".sesonPrev").on('click', function (e) {
            e.preventDefault();
            gals.trigger('owl.prev');
        });
    }
    //========================
    // Shop details
    //========================
    if ($('.podCarous').length > 0) {
        $('.podCarous').slick({
            dots: false,
            infinite: false,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: "<img class='leftArrow' src='images/shopPrev.png' alt=''>",
            nextArrow: "<img class='rightArrow' src='images/shopNext.png' alt=''>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    //========================
    // Back To Top
    //========================
    if ($("#backtotop,.blackBg .whiteDefaultLink").length > 0)
    {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 700)
            {
                $("#backtotop,.blackBg .whiteDefaultLink").addClass("active");
            }
            else
            {
                $("#backtotop,.blackBg .whiteDefaultLink").removeClass("active");
            }
        });
        $("#backtotop,.blackBg .whiteDefaultLink").on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 1000);
        });
    }
})(jQuery);
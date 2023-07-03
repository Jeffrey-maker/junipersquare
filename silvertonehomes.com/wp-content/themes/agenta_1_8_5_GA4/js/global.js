(function($) {

    function smoothScrollInit() {
        $('.smooth-scroll').off('click');
        $('.smooth-scroll').on('click', function(e) {
            e.preventDefault();
            var a = $(this).attr('href');
            var t = $(a).offset().top;
            var h = $('#header-container').height();
            var l = t - h;
            $('html, body').animate({
                scrollTop: l
            }, 600);
        });
    }

    console.log(navigator.userAgent);
    if (navigator.userAgent.indexOf("Edg") != -1) {
        $('html').addClass('msedge');
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        $('html').addClass('chrome');
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        $('html').addClass('safari');
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        $('html').addClass('firefox');
    }

    /***********************
     Preloader
    ***********************/
    // $(window).on('load', function() {
    //   $('#preloader .container i').fadeOut(1000);
    //   $('#preloader').delay(500).fadeOut(1000);
    //   $("body").removeClass("preload");
    // });

    // document.addEventListener('mousemove', function(ev){
    //     document.getElementById('spinner').style.transform = 'translateY('+(ev.clientY-484)+'px)';
    //     document.getElementById('spinner').style.transform += 'translateX('+(ev.clientX-714)+'px)';
    // },false);

    /************************
     Resize Video
    ************************/
    function resizeVideos() {
        $('.background-container video').each(function() {
            var wW = $(this).closest('.background-container').width();
            var wH = $(this).closest('.background-container').height();
            var video = $(this).get(0);
            var vW = video.videoWidth;
            var vH = video.videoHeight;
            var adjW = wW;
            var calcH = Math.round(wW * vH / vW);
            var adjH = wH;
            var calcW = Math.round(wH * vW / vH);
            var fW, fH, fL, fT;

            if (calcW > wW) {
                fW = calcW;
                fH = adjH;
                fL = -Math.round((calcW - wW) / 2);
                fT = 0;
            } else {
                fW = adjW;
                fH = calcH;
                fL = 0;
                fT = -Math.round((calcH - wH) / 2);
            }
            $(this).css({
                width: fW,
                height: fH,
                left: fL,
                top: fT
            });
        });
    }
    $(window).on('load', resizeVideos);
    $(window).resize(resizeVideos);

    $('h1:empty,h2:empty,h3:empty,p:empty').remove();


    /************************
     Vimeo Thumb
    ************************/
    // function vimeoThumb(){
    //  if($('.vimeo-thumb').length > 0){
    //     $('.vimeo-thumb').each(function(){
    //     	var th = $(this), vidID = $(this).data('video-id');
    //     	$.getJSON('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/'.concat(vidID),{'format':'json','width':'1280'})
    //     	.done(function(j) { th.css({'background-image':'url('+j.thumbnail_url+')'}); });
    //     });
    // 	}
    // }
    // $(document).ready(vimeoThumb);
    /*
    $(document).ready(function(){
    	if($('.vimeo-thumb').length > 0){
    		$('.vimeo-thumb').each(function(){
    			var th = $(this);
    			window.vimeo.getThumbnail(
    				th.data('id'),
    				th.data('video-id'),
    			);
    			window.vimeo.vimeoPlayer(
    				th.data('id'),
    				th.data('video-id'),
    				th.data('pid')
    			);
    		});
    	}
    });
    */

    /*****************************
      Detach/Attach Call Buttons
    *****************************/
    var heroCTAs = $('.agent-phone-hero,.agent-email-hero,.agent-text-hero').detach();
    $('.call-buttons ul').html('');
    heroCTAs.appendTo('.call-buttons ul');

    /*****************************
      Calculate Process Step Nav
    *****************************/

    var firstStepMargin = $("#process-sticky-nav").height();
    var marginTop = parseInt(firstStepMargin) * -1;
    $("#first-step").css("marginTop", marginTop + "px");

    /*****************************
      Calculate IDX Header Margin
    *****************************/

    // Position hero content container
    function mapMargin() {

        // Header type
        var hType;
        if ($('body.primary').length > 0) {
            hType = 'primary';
        } else if ($('body.secondary').length > 0) {
            hType = 'secondary';
        } else if ($('body.slim').length > 0) {
            hType = 'slim';
        } else if ($('body.slideout').length > 0) {
            hType = 'slideout';
        } else if ($('body.centernav').length > 0) {
            hType = 'centernav';
        }

        // Assign padding for absolute containers
        if (hType == 'primary' || hType == 'slim') {

            var idxMargin = $("#header-container").height();
            var marginTop = idxMargin;
            $("ihf-search").css("marginTop", marginTop + "px");
        }

    }
    $(document).ready(mapMargin);
    $(window).resize(mapMargin);



    /*****************************
      CTA Boxes Clickable
    *****************************/
    $(document).ready(function() {
        $(".cta-box-style-1 .cta-box").click(function() {
            var target = $(this).find("a:first").attr('target');
            if (target == '') {
                target = '_self';
            }
            var loc = $(this).find("a:first").attr('href');
            $(this).closest('.cta-box-style-1 .cta-box').attr('target', target);
            window.open(loc, target);
            return false;
        });
    });

    /************************
    Accordion  https://codepen.io/chriswrightdesign/pen/cmanI
    ************************/
    (function() {
        var d = document,
            accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
            setAria,
            setAccordionAria,
            switchAccordion,
            touchSupported = ('ontouchstart' in window),
            pointerSupported = ('pointerdown' in window);

        skipClickDelay = function(e) {
            e.preventDefault();
            e.target.click();
        }

        setAriaAttr = function(el, ariaType, newProperty) {
            el.setAttribute(ariaType, newProperty);
        };
        setAccordionAria = function(el1, el2, expanded) {
            switch (expanded) {
                case "true":
                    setAriaAttr(el1, 'aria-expanded', 'true');
                    setAriaAttr(el2, 'aria-hidden', 'false');
                    break;
                case "false":
                    setAriaAttr(el1, 'aria-expanded', 'false');
                    setAriaAttr(el2, 'aria-hidden', 'true');
                    break;
                default:
                    break;
            }
        };
        //function
        switchAccordion = function(e) {
            e.preventDefault();

            var thisAnswer = e.target.parentNode.nextElementSibling;
            var thisQuestion = e.target;
            if (thisAnswer.classList.contains('is-collapsed')) {
                setAccordionAria(thisQuestion, thisAnswer, 'true');
            } else {
                setAccordionAria(thisQuestion, thisAnswer, 'false');
            }
            thisQuestion.classList.toggle('is-collapsed');
            thisQuestion.classList.toggle('is-expanded');
            thisAnswer.classList.toggle('is-collapsed');
            thisAnswer.classList.toggle('is-expanded');
            thisAnswer.classList.toggle('animateIn');
        };
        for (var i = 0, len = accordionToggles.length; i < len; i++) {
            if (touchSupported) {
                accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
            }
            if (pointerSupported) {
                accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
            }
            accordionToggles[i].addEventListener('click', switchAccordion, false);
        }
    })();

    /************************
    Custom Boostrap
    ************************/

    $('.searchbar-shortcode').hover(function() {
        $("#heroSlider").carousel('pause');
    }, function() {
        $("#heroSlider").carousel('cycle');
    });

    /*
    $('#testimonialSlider-dark,#testimonialSlider-light,#testimonials-dark,#testimonials-light').carousel({
      interval: false
    });
    */

    /************************
    WOW.js  https://mynameismatthieu.com/WOW/docs.html
    ************************/
    if ($('body').hasClass('wowJS') == true) {
        // Repeat demo content
        var $body = $('body');
        var $box = $('.box');
        for (var i = 0; i < 20; i++) {
            $box.clone().appendTo($body);
        }

        // Helper function for add element box list in WOW
        WOW.prototype.addBox = function(element) {
            this.boxes.push(element);
        };

        // Init WOW.js and get instance
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 60,
            mobile: true,
            live: true
        })

        // Init WOW.js for modal instance(s)
        var wowModal = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        })
        wow.init();
    }
    // Attach scrollSpy to .wow elements for detect view exit events,
    // then reset elements and add again for animation
    // $('.wow').on('scrollSpy:exit', function() {
    //   $(this).css({
    //     'visibility': 'hidden',
    //     'animation-name': 'none'
    //   }).removeClass('animated');
    //   wow.addBox(this);
    // }).scrollSpy();

    /************************
    Lazy Loading  http://jquery.eisbehr.de/lazy/
    ************************/
    if ($('body').hasClass('lazyJS') == true) {
        if ($('div').hasClass('lazy') == true) {
            $(function() {
                $('.lazy').Lazy();
            });

            $('.lazy').Lazy({
                // your configuration goes here
                scrollDirection: 'vertical',
                effect: 'fadeIn',
                effectTime: 800,
                threshold: 0,
                visibleOnly: true,
                onError: function(element) {
                    console.log('error loading ' + element.data('src'));
                }
            });
        }
    }

    /************************
    HideMe
    ************************/
    $(document).ready(function() {
        $(window).scroll(function() {
            $('.hideme').each(function(i) {
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                /* If the object is completely visible in the window, fade it */
                if (bottom_of_window > bottom_of_object) {
                    $(this).animate({
                        'opacity': '1'
                    }, 500);
                }
            });
        });
    });

    /************************
    Testimonials Carousel Normalization
    ************************/
    function carouselNormalization() {
        var items = $('.testimonials .carousel-item'),
            heights = [],
            tallest;

        if (items.length) {
            function normalizeHeights() {
                items.each(function() {
                    //add heights to array
                    heights.push($(this).height());
                });
                tallest = Math.max.apply(null, heights);
                //cache largest value
                items.each(function() {
                    $(this).css('min-height', tallest + 'px');
                });
            };
            normalizeHeights();

            $(window).on('resize orientationchange', function() {
                tallest = 0, heights.length = 0; //reset vars
                items.each(function() {
                    $(this).css('min-height', '0'); //reset min-height
                });
                normalizeHeights(); //run it again
            });
        }
    }
    $(document).ready(carouselNormalization);
    $(window).resize(carouselNormalization);

    /************************
     Modals
    ************************/
    // Create cookies
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    // Check modal cookies
    function getCookie(name) {
        var cookie = document.cookie;
        var prefix = name + "=";
        var begin = cookie.indexOf("; " + prefix);

        if (begin == -1) {
            begin = cookie.indexOf(prefix);
            if (begin != 0) return null;
        } else {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
                end = cookie.length;
            }
        }
        return unescape(cookie.substring(begin + prefix.length, end));
    }

    // OnLoad Modal
    function modalOnLoad() {
        var modal = $('.modal').length;
        if (modal > 0) {
            $('.modal').each(function() {
                var id = $(this).attr('id');
                var onLoad = $(this).data('onload');
                var delay = parseInt($(this).data('delay'));
                // Show modal on load
                if (onLoad == true) {
                    var cookie = getCookie(id);
                    if (cookie == null) {
                        setTimeout(function() {
                            $('#' + id).modal('show');
                        }, delay);
                    }
                }
            });
        }
    }
    $(document).ready(modalOnLoad);

    // Set modal cookie
    $('.modal').on('shown.bs.modal', function(e) {
        var onLoad = $(this).data('onload');
        if (onLoad = 'true') {
            var cname = $(this).attr('id');
            var cvalue = 'true';
            var frequency = parseInt($(this).data('frequency'));

            var d = new Date();
            d.setTime(d.getTime() + (frequency * 24 * 60 * 60 * 1000));
            var expires = d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; expires=" + expires + "; path=/";
        }
    });


    /************************
     GET to COOKIE
    ************************/
    function getUrlVars() {
        var v = {},
            u = window.location.href;
        u.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, k, val) {
            v[k] = val;
        });
        return v;
    }
    $.each(getUrlVars(), function(k, v) {
        Cookies.set(k, v, {
            expires: 30
        });
    });

    Cookies.set('utm_landing', window.location.origin + window.location.pathname, {
        expires: 30
    });

    /************************
     Buyer Needs
    ************************/
    // Detect cards
    var cards;

    function detectCards() {
        if ($('.table-card-deck').length == 0) {
            cards = false;
        } else {
            cards = true;
        }
    }
    $(window).resize(detectCards);
    $(document).ready(detectCards);

    // Fill empty items
    function emptyItems() {
        if (cards == false) {
            $('.buyer-needs-block td').each(function() {
                var value = $(this).text();
                if (value == '') {
                    $(this).text('-');
                }
            });
        } else {
            $('.card-text span').each(function() {
                var string = $(this).text();
                var split = string.split(': ')[1];
                if (split == '') {
                    $(this).hide();
                }
            });
        }
    }
    $(document).ready(emptyItems);
    $(window).resize(emptyItems)

    // Table link click
    $('body').on('click', '.buyer-needs-block a', function(e) {
        e.preventDefault();

        // Get table or card values
        if (cards == false) {
            var values = $(this).closest('tr').find('td').map(function(i, v) {
                return $(this).text();
            }).toArray();
        } else {
            var values = $(this).closest('.card-text').find('span').map(function(i, v) {
                var string = $(this).text();
                var split = string.split(': ')[1];
                return split;
            }).toArray();
        }

        // Get form ID
        var formID = $(this).closest('.row').data('form-id');

        // Message vars
        var countyVal = values[0];
        var areaVal = values[1];
        var typeVal = values[2];
        var priceVal = values[3];
        var bedsVal = values[4];
        var bathsVal = values[5];
        var zoneVal = values[6];

        // Set empty values
        var nil = ['', '-'];
        if (nil.indexOf(countyVal) == -1) {
            county = true;
        } else {
            county = false;
        }
        if (nil.indexOf(areaVal) == -1) {
            area = true;
        } else {
            area = false;
        }
        if (nil.indexOf(typeVal) == -1) {
            type = true;
        } else {
            type = false;
        }
        if (nil.indexOf(priceVal) == -1) {
            price = true;
        } else {
            price = false;
        }
        if (nil.indexOf(bedsVal) == -1) {
            beds = true;
        } else {
            beds = false;
        }
        if (nil.indexOf(bathsVal) == -1) {
            baths = true;
        } else {
            baths = false;
        }
        if (nil.indexOf(zoneVal) == -1) {
            zone = true;
        } else {
            zone = false;
        }

        // Populate message
        var message = 'I can help your buyer interested in ';

        if (beds == 8) {
            message += 'an ';
        } else {
            message += 'a ';
        }
        if (type == false && beds == true && baths == false) {
            message += bedsVal + ' bedroom ';
        } else if (beds == true && baths == true) {
            message += bedsVal + ' bedroom, ';
        } else if (type == false && beds == true && baths == false) {
            message += bedsVal + ' bedroom, ';
        } else if (county == false && type == true && beds == true && baths == false) {
            message += bedsVal + ' bedroom, ';
        }
        if (county == false && area == false && type == false && baths == true) {
            message += bathsVal + ' bath ';
        } else if (type == true && baths == true) {
            message += bathsVal + ' bath, ';
        } else if (baths == true) {
            message += bathsVal + ' bath ';
        }
        if (type == true) {
            message += typeVal;
            message += ' home';
        } else {
            message += 'home';
        }
        if (county == true && area == true) {
            message += ' in ';
            message += areaVal;
            message += ', ';
            message += countyVal;
            message += ' county';
        } else if (county == true && area == false) {
            message += ' in ';
            message += countyVal;
            message += ' county';
        } else if (county == false && area == true) {
            message += ' in ';
            message += areaVal;
        }
        message += '. ';
        if (price == true) {
            message += priceVal;
            message += ' price range. ';
        }
        if (zone == true) {
            message += 'Zoned for ';
            message += zoneVal;
            message += '.';
        }

        if ($('#' + formID).parents('.modal').length) {
            var modal = $('#' + formID).parents('.modal').attr('id');
            $('#' + formID + ' textarea#message').val(message);
            $('#' + modal).modal('show');
        } else {
            $('#' + formID + ' textarea#message').val(message);
            var headerH = $('#header-sticky').height();
            var formP = $('#' + formID).offset().top;
            var scrollP = formP - headerH - 15;

            $('html, body').animate({
                scrollTop: scrollP,
            }, 500, 'linear')
        }

    });

    /************************
       Headers
    ************************/
    // Sticky Header
    $(function() {
        $(document).scroll(function() {
            // console.log('Sticky Header');
            var $nav = $("#header");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            smoothScrollInit();
        });

        $("#header").ready(function() {
            var dropdownPos = $('#header').height();
            var centdropPos = $('.centernav #header nav').height();
            var slimdropPos = $('.slim #header nav').height();
            $('.menu li.dropdown ul').css('top', dropdownPos);
            $('.secondary .menu li.dropdown ul').css('top', dropdownPos);
            $('.centernav .menu li.dropdown ul').css('top', centdropPos);
            $('.slim .menu li.dropdown ul').css('top', slimdropPos);
        });

    });

    /************************
       Heroes
    ************************/
    // Get quick search height
    var searchH;

    function qsHeight() {
        searchH = $('.home-search-bar').outerHeight();
        heroTitle();
    }
    setTimeout(qsHeight, 500)

    // Position hero content container
    function heroTitle() {
        var winH = $(window).height();
        var headerH = $('#header-container').height();
        var bottomSearch = $('.bottom.home-search-bar').length;

        // Header type
        var hType;
        if ($('body.primary').length > 0) {
            hType = 'primary';
        } else if ($('body.secondary').length > 0) {
            hType = 'secondary';
        } else if ($('body.slim').length > 0) {
            hType = 'slim';
        } else if ($('body.slideout').length > 0) {
            hType = 'slideout';
        } else if ($('body.centernav').length > 0) {
            hType = 'centernav';
        }

        // Hero type
        var heroType;
        if ($('.hero-style-1').length > 0) {
            heroType = 1;
        } else if ($('.hero-style-2').length > 0) {
            heroType = 2;
        } else if ($('hero-style-3').length > 0) {
            heroType = 3;
        }

        // Assign padding for absolute containers
        if (hType == 'primary' || hType == 'slim' || hType == 'centernav' || hType == 'slideout') {

            $('.bio-intro .copy-box').css('padding-top', headerH);
            $('.hero-title-style-1').css('padding-top', headerH);
            $('.hero-style-2 .hero-text .centered-text').css('padding-top', headerH);
            $('.hero-style-3 .hero-text .centered-text').css('padding-top', headerH);

            if (bottomSearch > 0) {
                $('.hero-style-2 .hero-text .centered-text').css('padding-top', 0);
                $('.hero-style-3 .hero-text .centered-text').css('padding-top', 0);
            }
        }

        // Adjust full-height hero
        if (hType == 'secondary' && heroType == 1) {
            $('.hero-style-1').css('height', winH - headerH);
        }

        // Adjust .hero-text for botom search
        if (hType == 'secondary' && heroType == 1 && bottomSearch <= 0) {
            $('.hero-text').css('height', '100%');
        } else if (hType == 'secondary' && heroType == 1 && bottomSearch > 0) {
            $('.hero-text').css('height', winH - headerH - searchH);
        }

        // Adjust .hero-text for center search
        // if (hType == 'secondary' && heroType == 1 && bottomSearch <= 0) {
        //   $('.hero-text').css('height','100%');
        // } else if (hType == 'secondary' && heroType == 1 && bottomSearch > 0) {
        //   $('.hero-text').css('height', winH - headerH - searchH);
        // }

    }
    $(document).ready(heroTitle);
    $(window).resize(heroTitle);

    // Assign height to parent container for css transitions
    function posHeaderTxt() {
        $('.titleBox.row').each(function() {
            var h = $(this).height();
            if ($(this).find('.centered-text').length > 0) {
                var pT = parseInt($(this).find('.centered-text').css('padding-top').replace("px", ""));
                var pB = parseInt($(this).find('.centered-text').css('padding-bottom').replace("px", ""));
                $(this).css({
                    'height': h + pT + pB + 'px'
                });
            }
        })
    }
    $('.titleBox').ready(posHeaderTxt);

    function rePosHeaderTxt() {
        $('.titleBox.row').each(function() {
            var h = $(this).height();
            if ($(this).find('.centered-text').length > 0) {
                $(this).css({
                    'height': h + 'px'
                });
            }
        })
    }
    $(window).resize(rePosHeaderTxt);


    /************************
       Blog
    ************************/
    // Position blog page title
    // function blogTitle(){
    //   var hType;
    //   if ($('body.primary').length > 0) {
    //     hType = 'primary';
    //   } else if ($('body.secondary').length > 0) {
    //     hType = 'secondary';
    //   } else if ($('body.slim').length > 0) {
    //     hType = 'slim';
    //   } else if ($('body.slideout').length > 0) {
    //     hType = 'slideout';
    //   } else if ($('body.centernav').length > 0) {
    //     hType = 'centernav';
    //   }
    //
    //   if (hType == 'primary' || hType == 'slim' || hType == 'centernav' || hType == 'slideout') {
    //     var headerH = $('#header-container').height();
    //     $('#content-wrapper .blog-header .content-container').css({'padding-top':headerH +'px',})
    //   }
    // }
    // $('#header-container').ready(blogTitle);
    // $(window).resize(blogTitle);

    // Swap post header featured image
    $("#header-container").ready(function() {
        var isPost = $('body.single-blog').length;
        if (isPost > 0) {
            var post = true;
        }
        var hasFeatured = $('.wp-post-image').length;
        if (hasFeatured > 0) {
            var fImg = true;
        }

        var heroH1 = $('#post-header-title-card h1').text();
        var heroBG = $('#post-header-title-card .background-container .lazy');
        var title = $('h1.entry-title').text();
        var newPath = $('.wp-post-image').attr('src');
        var newImg = 'url(' + newPath + ')';

        if (post == true) {
            $('#post-header-title-card h1').text(title);
        }

        if (post == true && fImg == true) {
            $(heroBG).css({
                'background-image': newImg
            });
            $('h1.entry-title').hide();
            $('.wp-post-image').hide();
            $('.entry-thumb').hide();
        }
    });




    /************************
       IDX
    ************************/
    // Add IHF body classes
    function ihfClass() {
        var bodyID = $('body').attr('id');

        var propOrg = ['property-organizer-login', 'property-organizer-logout', 'property-organizer-delete-saved-search-submit', 'property-organizer-delete-saved-listing-submit', 'property-organizer-edit-subscriber', 'property-organizer-view-saved-search-list', 'property-organizer-saved-listings', 'property-organizer-help', '.property-organizer-resend-confirmation-email'];
        var orgLogin = $('#ihf-create-organizer-form').length;
        var orgListings = $('.ihf-results-organizer-rating').length;
        var marketRep = ['market-report', 'open-home-report', 'listing-report'];
        var search = ['homes-for-sale-search-advanced', 'email-alerts'];
        var propDetail = ['homes-for-sale-details'];

        if (propOrg.indexOf(bodyID) > -1) {
            $('body').addClass('property-organizer');
        }
        if (orgLogin > 0) {
            $('body').addClass('login');
        }
        if (orgListings > 0) {
            $('body').addClass('saved-listings');
        }
        if (marketRep.indexOf(bodyID) > -1) {
            $('body').addClass('market-report');
        }
        if (search.indexOf(bodyID) > -1) {
            $('body').addClass('search');
        }
        if (propDetail.indexOf(bodyID) > -1) {
            $('body').addClass('property-detail');
        }

    }
    $(document).ready(ihfClass);

    // Add agenta-cutton class to idx buttons
    $(document).ready(function() {
        $('.ihf-btn').addClass("agenta-button");
    });

    // Boostrap version shim
    /*
    function ihfBootsrapShim() {
      var id = $('body').is('#homes-for-sale-details,#homes-for-sale-sold-details,#market-report, #open-home-report,#listing-report');
      if (id == true) {
        (function () {
            'use strict';
            jQuery.getScript('https://stackpath.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js');
        }());
      }
    }
    $(document).ready(ihfBootsrapShim);
    */

    // Prevent page jump
    $('.ihf-results-organizer-rating a, .ihf-results-organizer-comments a, .schedule-showing-btn').on('click', function(e) {
        e.preventDefault();
    });


    // Detail pages
    function detailTarget() {
        $('.ihf-slide').attr('target', '_self');
    }
    $(window).on('load', detailTarget);


    // IHF card types
    function propCards() {

        var cardType;
        if ($('body.prop-cards-df').length > 0) {
            cardType = 'prop-cards-df';
        } else if ($('body.prop-cards-overlay').length > 0) {
            cardType = 'prop-cards-overlay';
        }
        // else if ($('body.prop-cards-overlay-blur').length > 0) {
        //   cardType = 'prop-cards-overlay-blur';
        // }
        else if ($('body.prop-cards-img-top').length > 0) {
            cardType = 'prop-cards-img-top';
        } else if ($('body.prop-cards-offset-img').length > 0) {
            cardType = 'prop-cards-offset-img';
        }

        if (cardType == 'prop-cards-df' || cardType == 'prop-cards-overlay') {

            $(".ihf-grid-result-basic-info-item1, .property-box .beds").html(function() {
                return $(this).html().replace("Beds", " ");
            });
            $(".ihf-grid-result-basic-info-item2, .property-box .baths").html(function() {
                return $(this).html().replace("Baths", " ");
            });
            $(".ihf-grid-result-basic-info-item3, .property-box .sq-ft").html(function() {
                return $(this).html().replace("SqFt", " ").replace("Lot Acres", " ");
            });
            $(".ihf-bedrooms-alt").html(function() {
                return $(this).html().replace("Bedrooms:", " ");
            });
            $(".ihf-baths-alt").html(function() {
                return $(this).html().replace("Bathrooms:", " ");
            });
            $(".ihf-square-feet-alt").html(function() {
                return $(this).html().replace("Sq. Ft.:", " ");
            });
        }

        if (cardType == 'prop-cards-overlay') {

            $('.cycle-slide').each(function() {
                $(this).find('.ihf-slider-col').each(function() {
                    var wrapper = '<div class="row prop-info"><div class="col-xs-12"><div class="inner"></div></div></div></div>';
                    var address = $(this).find('.ihf-grid-result-address').detach();
                    var basic = $(this).find('.ihf-grid-result-basic-info-container').detach();
                    var price = $(this).find('.ihf-grid-result-price').detach();
                    var mls = $(this).find('.ihf-grid-result-mlsnum-proptype').detach();
                    var attr = $(this).find('.ihf-grid-result-attribution').detach();

                    $(this).find('.ihf-grid-result-container').prepend(wrapper);
                    $(this).find('.ihf-grid-result-container .prop-info').prepend(attr);
                    $(this).find('.inner').prepend(mls);
                    $(this).find('.inner').prepend(price);
                    $(this).find('.inner').prepend(basic);
                    $(this).find('.inner').prepend(address);
                });
            });

            $('.ihf-grid-result').each(function() {
                var wrapper = '<div class="row prop-info"><div class="col-xs-12"><div class="inner"></div></div></div></div>';
                var address = $(this).find('.ihf-grid-result-address').detach();
                var basic = $(this).find('.ihf-grid-result-basic-info-container').detach();
                var price = $(this).find('.ihf-grid-result-price').detach();
                var mls = $(this).find('.ihf-grid-result-mlsnum-proptype').detach();
                var vOpen = $(this).find('.ihf-grid-result-virtual-open').detach();
                var vTour = $(this).find('.ihf-grid-result-virtual-tour').detach();

                $(this).find('.ihf-grid-result-container').prepend(wrapper);
                $(this).find('.inner').prepend(mls);
                $(this).find('.inner').prepend(price);
                $(this).find('.inner').prepend(basic);
                $(this).find('.inner').prepend(address);
                $(this).find('.prop-info').prepend(vOpen);
                $(this).find('.prop-info').prepend(vTour);
            });
        }

        if (cardType == 'prop-cards-img-top') {

            $('.ihf-grid-result, .ihf-slider-col').each(function() {
                var single = $(this).parents('#single-featured-widget').length;

                if (single <= 0) {
                    var propImg = $(this).find('.ihf-results-grid-photo');
                    var imgWrap = '<div class="row prop-img"><div class="col-xs-12 inner"></div></div>';
                    var img = $(this).find('.ihf-results-grid-photo').detach();
                    var price = $(this).find('.ihf-grid-result-price');
                    var priceWrap = '<div class="row price"><div class="col-xs-12 inner"></div></div>';
                    var open = $(this).find('.ihf-grid-result-additional-info').detach();
                    var vOpen = $(this).find('.ihf-grid-result-virtual-open').detach();
                    var vTour = $(this).find('.ihf-grid-result-virtual-tour').detach();

                    $(this).find('.ihf-grid-result-container').prepend(imgWrap);
                    $(this).find('.ihf-grid-result-container').append(priceWrap);
                    $(this).find('.prop-img .inner').prepend(img);
                    $(this).find('.price .inner').prepend(price);
                    $(this).find('.prop-img .inner').append(open);
                    $(this).find('.prop-img .inner').append(vOpen);
                    $(this).find('.prop-img .inner').append(vTour);
                }
            });
        }

        if (cardType == 'prop-cards-offset-img') {

            $('.cycle-slide').each(function() {
                $(this).find('.ihf-slider-col').each(function() {
                    var wrapper = '<div class="row prop-info"><div class="col-xs-12"><div class="inner"></div></div></div></div>';
                    var address = $(this).find('.ihf-grid-result-address').detach();
                    var basic = $(this).find('.ihf-grid-result-basic-info-container').detach();
                    var price = $(this).find('.ihf-grid-result-price').detach();
                    var mls = $(this).find('.ihf-grid-result-mlsnum-proptype').detach();
                    var attr = $(this).find('.ihf-grid-result-attribution').detach();

                    $(this).find('.ihf-grid-result-container').prepend(wrapper);
                    $(this).find('.inner').prepend(attr);
                    $(this).find('.inner').prepend(mls);
                    $(this).find('.inner').prepend(price);
                    $(this).find('.inner').prepend(basic);
                    $(this).find('.inner').prepend(address);
                });
            });

            $('.ihf-grid-result').each(function() {
                var wrapper = '<div class="row prop-info"><div class="col-xs-12"><div class="inner"></div></div></div></div>';
                var address = $(this).find('.ihf-grid-result-address').detach();
                var basic = $(this).find('.ihf-grid-result-basic-info-container').detach();
                var price = $(this).find('.ihf-grid-result-price').detach();
                var mls = $(this).find('.ihf-grid-result-mlsnum-proptype').detach();
                var vOpen = $(this).find('.ihf-grid-result-virtual-open').detach();
                var vTour = $(this).find('.ihf-grid-result-virtual-tour').detach();
                var attr = $(this).find('.ihf-grid-result-attribution').detach();

                $(this).find('.ihf-grid-result-container').prepend(wrapper);
                $(this).find('.inner').prepend(attr);
                $(this).find('.inner').prepend(mls);
                $(this).find('.inner').prepend(price);
                $(this).find('.inner').prepend(basic);
                $(this).find('.inner').prepend(address);
                $(this).find('.prop-info').prepend(vOpen);
                $(this).find('.prop-info').prepend(vTour);
            });
        }

    }
    $(window).on('load', function() {
        // setTimeout(function() {''
        propCards();
        // },1200);
    });

    // Blur gutters
    $('.prop-cards-overlay.card-blur .ihf-results-grid-photo, .blur .ihf-results-grid-photo').each(function() {
        var img = $(this).data('ihf-main-source');
        var imgAlt = $(this).data('ihf-alternate-source');
        var html = '<div class="blur" style="background-image: url(' + img + ')"></div>'
        $(this).parent().prepend(html);
    });

    $('.card-blur .property-box').each(function() {
        var img = $(this).find('.property-img').data('source');
        var html = '<div class="blur" style="background-image: url(' + img + ')"></div>'
        $(this).prepend(html);
    });

    // Remove input placeholders
    function removeInput() {
        $('#ihf-valuation-request-form input.name-field, #ihf-valuation-request-form input.emailAddress-field, #ihf-valuation-request-form input.phone-field').attr('placeholder', '');
    }
    $(document).ready(removeInput);

    // Custom radio buttons
    $('#ihf-valuation-request-form input[type="radio"]').change(function() {
        var name = $(this).attr('name');
        $('input[name="' + name + '"]').closest('.radio-inline').removeClass('checked');
        $(this).closest('.radio-inline').addClass('checked');
    });

    // Slider pagination
    function sliderPagination() {
        $('.market-report .ihf-slideshow').each(function() {
            var slides = $(this).find('.ihf-slider-col').length;
        });
    }
    $(document).ready(sliderPagination);


    /************************
       Map Search
    ************************/
    // Add save-search class
    function saveSearchBtn() {
        if ($('body').hasClass('search')) {
            $('.ihf-btn-primary:contains("Save")').each(function() {
                $(this).addClass('save-search')
            });
        }
    }
    setTimeout(function() {
        saveSearchBtn();
    }, 3000);

    // Change text on save
    function saveSearch() {
        $('.save-search').html('Saved');
        $('.save-search').prop('disabled', true);
    }
    $(document).on('click', ".save-search", saveSearch);

    // Change text on new search
    function newSearch() {
        $('.save-search').html('Save Search');
        $('.save-search').prop('disabled', false);
    }
    $(document).on('input', "ihf-search input", newSearch);
    $(document).on('click', "button:not(.save-search):not(.ihf-previous):not(.ihf-next):not(.ihf-listing-save), .ihf-select-available-option, .ihf-mapbox-gl-draw_ctrl-draw-btn, .ihf-mapbox-gl-draw_polygon, ihf-search-map", newSearch);

    // Move Disclaimer
    $('.ihf-listings-container').ready(function() {
        if ($('body').hasClass('search')) {
            $('.ihf-board-disclaimers').detach().appendTo('.ihf-listings-container')
        }
    });

    /************************
       Email Redirection
    ************************/
    $(document).ready(function() {
        var bodyID = $('body').attr('id');

        //Redirect valuation form
        if (bodyID == 'valuation-form' && window.location.href.indexOf("?esi=") > -1) {
            window.location.href = "/whats-my-home-worth/";
        }
    });


    /************************
       Scrollspy
    ************************/
    /**
     * Extend jquery with a scrollspy plugin.
     * This watches the window scroll and fires events when elements are scrolled into viewport.
     *
     * throttle() and getTime() taken from Underscore.js
     * https://github.com/jashkenas/underscore
     *
     * @author Copyright 2013 John Smart
     * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
     * @see https://github.com/thesmart
     * @version 0.1.2
     */

    var jWindow = $(window);
    var elements = [];
    var elementsInView = [];
    var isSpying = false;
    var ticks = 0;
    var offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }

    /**
     * Find elements that are within the boundary
     * @param {number} top
     * @param {number} right
     * @param {number} bottom
     * @param {number} left
     * @return {jQuery}   A collection of elements
     */
    function findElements(top, right, bottom, left) {
        var hits = $();
        $.each(elements, function(i, element) {
            var elTop = element.offset().top,
                elLeft = element.offset().left,
                elRight = elLeft + element.width(),
                elBottom = elTop + element.height();

            var isIntersect = !(elLeft > right ||
                elRight < left ||
                elTop > bottom ||
                elBottom < top);

            if (isIntersect) {
                hits.push(element);
            }
        });

        return hits;
    }

    /**
     * Called when the user scrolls the window
     */
    function onScroll() {
        // unique tick id
        ++ticks;

        // viewport rectangle
        var top = jWindow.scrollTop(),
            left = jWindow.scrollLeft(),
            right = left + jWindow.width(),
            bottom = top + jWindow.height();

        // determine which elements are in view
        var intersections = findElements(top + offset.top, right + offset.right, bottom + offset.bottom, left + offset.left);
        $.each(intersections, function(i, element) {
            var lastTick = element.data('scrollSpy:ticks');
            if (typeof lastTick != 'number') {
                // entered into view
                element.triggerHandler('scrollSpy:enter');
            }

            // update tick id
            element.data('scrollSpy:ticks', ticks);
        });

        // determine which elements are no longer in view
        $.each(elementsInView, function(i, element) {
            var lastTick = element.data('scrollSpy:ticks');
            if (typeof lastTick == 'number' && lastTick !== ticks) {
                // exited from view
                element.triggerHandler('scrollSpy:exit');
                element.data('scrollSpy:ticks', null);
            }
        });

        // remember elements in view for next tick
        elementsInView = intersections;
    }

    /**
     * Called when window is resized
     */
    function onWinSize() {
        jWindow.trigger('scrollSpy:winSize');
    }

    /**
     * Get time in ms
     * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
     * @type {function}
     * @return {number}
     */
    var getTime = (Date.now || function() {
        return new Date().getTime();
    });

    /**
     * Returns a function, that, when invoked, will only be triggered at most once
     * during a given window of time. Normally, the throttled function will run
     * as much as it can, without ever going more than once per `wait` duration;
     * but if you'd like to disable the execution on the leading edge, pass
     * `{leading: false}`. To disable execution on the trailing edge, ditto.
     * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
     * @param {function} func
     * @param {number} wait
     * @param {Object=} options
     * @returns {Function}
     */
    function throttle(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === false ? 0 : getTime();
            timeout = null;
            result = func.apply(context, args);
            context = args = null;
        };
        return function() {
            var now = getTime();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
                context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };

    /**
     * Enables ScrollSpy using a selector
     * @param {jQuery|string} selector  The elements collection, or a selector
     * @param {Object=} options Optional.
                        throttle : number -> scrollspy throttling. Default: 100 ms
                        offsetTop : number -> offset from top. Default: 0
                        offsetRight : number -> offset from right. Default: 0
                        offsetBottom : number -> offset from bottom. Default: 0
                        offsetLeft : number -> offset from left. Default: 0
     * @returns {jQuery}
     */
    $.scrollSpy = function(selector, options) {
        selector = $(selector);
        selector.each(function(i, element) {
            elements.push($(element));
        });
        options = options || {
            throttle: 100
        };

        offset.top = options.offsetTop || 0;
        offset.right = options.offsetRight || 0;
        offset.bottom = options.offsetBottom || 0;
        offset.left = options.offsetLeft || 0;

        var throttledScroll = throttle(onScroll, options.throttle || 100);
        var readyScroll = function() {
            $(document).ready(throttledScroll);
        };

        if (!isSpying) {
            jWindow.on('scroll', readyScroll);
            jWindow.on('resize', readyScroll);
            isSpying = true;
        }

        // perform a scan once, after current execution context, and after dom is ready
        setTimeout(readyScroll, 0);

        return selector;
    };

    /**
     * Listen for window resize events
     * @param {Object=} options           Optional. Set { throttle: number } to change throttling. Default: 100 ms
     * @returns {jQuery}    $(window)
     */
    $.winSizeSpy = function(options) {
        $.winSizeSpy = function() {
            return jWindow;
        }; // lock from multiple calls
        options = options || {
            throttle: 100
        };
        return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));
    };

    /**
     * Enables ScrollSpy on a collection of elements
     * e.g. $('.scrollSpy').scrollSpy()
     * @param {Object=} options Optional.
                        throttle : number -> scrollspy throttling. Default: 100 ms
                        offsetTop : number -> offset from top. Default: 0
                        offsetRight : number -> offset from right. Default: 0
                        offsetBottom : number -> offset from bottom. Default: 0
                        offsetLeft : number -> offset from left. Default: 0
     * @returns {jQuery}
     */
    $.fn.scrollSpy = function(options) {
        return $.scrollSpy($(this), options);
    };


    /************************
Featured Community Pages
************************/
    $('#header-container').ready(function() {
        if ($("body").hasClass("secondary")) {} else {
            var featComHero = $('#header-container .container-fluid').height();
            $('.featured-community-intro .copy-box').css('padding-top', featComHero + 50 + 'px');
        }
    });


    /************************
Featured Property Boxes
************************/

    /* Swap Left/Right Arrow Icons */
    $(function() {
        if ($('body').hasClass('thin-chevron')) {
            var aStyle = 'thin-chevron';
        } else if ($('body').hasClass('thick-chevron')) {
            var aStyle = 'thick-chevron';
        } else if ($('body').hasClass('double-line')) {
            var aStyle = 'double-line';
        } else if ($('body').hasClass('thin-triangle')) {
            var aStyle = 'thin-triangle';
        } else if ($('body').hasClass('thin-triangle-arrow')) {
            var aStyle = 'thin-triangle-arrow';
        } else if ($('body').hasClass('thin-arrow')) {
            var aStyle = 'thin-arrow';
        }

        $('a.ihf-slider-next').html('<i id="' + aStyle + '" class="carousel-control-next-icon"></i>');
        $('a.ihf-slider-prev').html('<i id="' + aStyle + '" class="carousel-control-prev-icon"></i>');
        $('.carousel-control.right').html('<i id="' + aStyle + '" class="carousel-control-next-icon"></i>');
        $('.carousel-control.left').html('<i id="' + aStyle + '" class="carousel-control-prev-icon"></i>');
    });

    // Clickable grid results
    $('.ihf-grid-result-container').on('click', function() {
        window.location = $(this).find('.ihf-grid-result-price a').attr('href');
    });

    /* Default Featured Property 4-Col Slideshow */


    /* Featured Property Full Cards */
    function scaleFeaturedCards() {
        var offsetImg = false;
        if ($('body.prop-cards-offset-img').length > 0) {
            offsetImg = true;
        }

        var winW = $(window).width();

        if (winW > 768) {
            var m = 2;
        } else {
            var m = 1;
        }

        let isMobile = window.matchMedia("only screen and (max-device-width : 1366px) and (min-device-width : 768px) and (orientation: portrait)").matches;
        if (isMobile) {
            var m = 2;
        }

        $('.ihf-slideshow').each(function() {
            var single = $(this).parents('#single-featured-widget').length;
            var containerW = $(this).width();
            if (single <= 0) {
                $(this).find('.cycle-slide').each(function() {
                    $(this).find('.ihf-results-grid-photo, .blur').css({
                        'min-height': 'calc(' + containerW / m + 'px * 0.5625)'
                    });
                    if (offsetImg == true && winW > 1024 && winW <= 1440) {
                        $(this).find('.well, .blur').css({
                            'height': 'calc(' + containerW / m + 'px + ' + containerW * .075 + 'px)'
                        });
                    } else if (offsetImg == true && winW > 991 && winW <= 1024) {
                        $(this).find('.well, .blur').css({
                            'height': 'calc(' + containerW / m + 'px + ' + containerW * .1 + 'px)'
                        });
                    } else if (offsetImg == true && winW > 768 && winW <= 991) {
                        $(this).find('.well, .blur').css({
                            'height': 'calc(' + containerW / m + 'px + ' + containerW * .20 + 'px)'
                        });
                    } else if (offsetImg == true && winW > 576 && winW <= 768) {
                        $(this).find('.well, .blur').css({
                            'height': 'calc(' + containerW / m + 'px + ' + containerW * .15 + 'px)'
                        });
                    } else if (offsetImg == true && winW <= 576) {
                        $(this).find('.well, .blur').css({
                            'height': 'calc(' + containerW / m + 'px + ' + containerW * .50 + 'px)'
                        });
                    } else if (offsetImg == true && winW > 1440) {
                        $(this).find('.well, .blur').css({
                            'height': 'calc(' + containerW / m + 'px)'
                        });
                    } else {
                        $(this).find('.well, .blur').css({
                            'height': 'calc(' + containerW / m + 'px * 0.5625)'
                        });
                    }
                });
            }
        });

        $('.ihf-listing-search-results').each(function() {
            var containerW = $(this).width();
            $(this).find('.ihf-grid-result').each(function() {
                var photo = $(this).find('.ihf-results-grid-photo, .blur');
                if (offsetImg == true) {
                    photo.css({
                        'min-height': 'calc(' + containerW / m + 'px * 0.5625)'
                    });
                    $(this).find('.well, .blur').css({
                        'height': 'calc(' + containerW / m + 'px - 40px)'
                    });
                }
                if (offsetImg == true && winW > 1024 && winW <= 1440) {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px + ' + containerW * .0001 + 'px)'
                    });
                } else if (offsetImg == true && winW > 991 && winW <= 1024) {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px + ' + containerW * .02 + 'px)'
                    });
                } else if (offsetImg == true && winW > 768 && winW <= 991) {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px + ' + containerW * .08 + 'px)'
                    });
                } else if (offsetImg == true && winW > 576 && winW <= 768) {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px + ' + containerW * .35 + 'px)'
                    });
                } else if (offsetImg == true && winW <= 576) {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px + ' + containerW * .28 + 'px)'
                    });
                } else if (offsetImg == true && winW > 1440) {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px - 80px)'
                    });
                } else {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px * 0.5625)'
                    });
                    photo.css({
                        'min-height': 'calc(' + containerW / m + 'px * 0.5625)'
                    });
                    $(this).find('.well, .blur').css({
                        'height': 'calc(' + containerW / m + 'px * 0.5625)'
                    });
                }
            });
        });

        $('.properties').each(function() {
            var containerW = $(this).width();
            $(this).find('.property-box').each(function() {
                if (offsetImg == true && winW > 1024 && winW <= 1440) {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px + ' + containerW * .0001 + 'px)'
                    });
                } else if (offsetImg == true && winW > 991 && winW <= 1024) {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px + ' + containerW * .02 + 'px)'
                    });
                } else if (offsetImg == true && winW > 768 && winW <= 991) {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px + ' + containerW * .08 + 'px)'
                    });
                } else if (offsetImg == true && winW > 576 && winW <= 768) {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px + ' + containerW * .35 + 'px)'
                    });
                } else if (offsetImg == true && winW <= 576) {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px + ' + containerW * .28 + 'px)'
                    });
                } else if (offsetImg == true && winW > 1440) {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px - 80px)'
                    });
                } else {
                    $(this).css({
                        'height': 'calc(' + containerW / m + 'px * 0.5625)'
                    });
                    $(this).find('.property-box, .blur').css({
                        'height': 'calc(' + containerW / m + 'px * 0.5625)'
                    });
                    $(this).find('.property-img, .blur').css({
                        'min-height': 'calc(' + containerW / m + 'px * 0.5625)'
                    });
                }
            });
        });
    }
    if ($('body').hasClass('prop-cards-overlay') || $('body').hasClass('prop-cards-offset-img')) {
        $(window).resize(scaleFeaturedCards);
        $(window).load(scaleFeaturedCards);
        setTimeout(function() {
            scaleFeaturedCards();
        }, 400);
        $('.tab-container .nav-tabs a').on('click', function() {
            console.log('tab clicked');
            setTimeout(function() {
                scaleFeaturedCards();
            }, 50);
        });
    }


    /* Single Featured Property Fullscreen Slideshow */
    function scaleSingleFeature() {
        var winW = $(window).width();
        if (winW > 768) {
            var m = 2;
        } else {
            var m = 1;
        }
        let isMobile = window.matchMedia("only screen and (max-device-width : 1366px) and (orientation: portrait)").matches;
        if (isMobile) {
            var m = 1;
        }

        $('#single-featured-widget .ihf-slideshow').each(function() {
            var containerW = $(this).width();
            $(this).find('.cycle-slide').each(function() {
                if (m == 1) {
                    $(this).find('.well, .blur').css({
                        'height': 'calc(' + containerW / 1 + 'px * 0.5625)'
                    });
                    $(this).find('.ihf-results-grid-photo, .blur').css({
                        'min-height': 'calc(' + containerW / 1 + 'px * 0.5625)'
                    });
                } else {
                    $(this).find('.well, .blur').css({
                        'height': 'calc(' + containerW / 1 + 'px * 0.5)'
                    });
                    $(this).find('.ihf-results-grid-photo, .blur').css({
                        'min-height': 'calc(' + containerW / 1 + 'px * 0.5)'
                    });
                }
            });
        });
    }

    function singlePropCarousel() {

        $('#single-featured-widget .cycle-slide').each(function() {
            var wrapper = '<div class="row prop-info"><div class="col-xs-12"><div class="inner"></div></div></div></div>';
            var address = $(this).find('.ihf-grid-result-address').detach();
            var basic = $(this).find('.ihf-grid-result-basic-info-container').detach();
            var price = $(this).find('.ihf-grid-result-price').detach();
            var mls = $(this).find('.ihf-grid-result-mlsnum-proptype').detach();

            $(this).find('.ihf-grid-result-container').prepend(wrapper);
            $(this).find('.inner').prepend(mls);
            $(this).find('.inner').prepend(price);
            $(this).find('.inner').prepend(basic);
            $(this).find('.inner').prepend(address);

        });

    }
    if ($('#single-featured-widget').length > 0 && $('body.prop-cards-overlay').length <= 0) {
        $(window).load(singlePropCarousel);
        setTimeout(function() {
            singlePropCarousel();
        }, 400);
    }
    if ($('#single-featured-widget').length > 0) {
        $(window).resize(scaleSingleFeature);
        $(window).load(scaleSingleFeature);
        setTimeout(function() {
            scaleSingleFeature();
        }, 400);
    }

    $('#single-featured-widget .ihf-grid-result-container').bind('click', function() {
        window.location = $(this).find('.ihf-grid-result-price a').attr('href');
    });


    // Detect carousel image size
    function imgSize() {
        $('.prop-cards-overlay.card-blur .ihf-results-grid-photo, .blur .ihf-results-grid-photo').each(function() {
            var thisImg = $(this);
            var src = $(this).css('background-image').replace(/url\(\"|\"\)$/ig, "");

            this.img = $('<img/>', {
                'src': src,
                'class': 'hideImg'
            });
            this.img.appendTo('body');
            this.img.load(function(self) {
                return function() {
                    var width = self.img.width();
                    var height = self.img.height();
                    if (height > width) {
                        $(thisImg).css({
                            'background-size': 'contain'
                        });
                    } else {
                        $(thisImg).css({
                            'background-size': 'contain'
                        });
                    }
                };
            }(this));
            // this.img.remove();
        })
    }
    $('.prop-cards-overlay.card-blur .ihf-grid-result-container').ready(imgSize);

    // Blur gutters
    $('.prop-cards-overlay.card-blur .ihf-results-grid-photo').each(function() {
        var img = $(this).data('ihf-main-source');
        var imgAlt = $(this).data('ihf-alternate-source');
        var html = '<div class="blur" style="background-image: url(' + img + ')"></div>'

        $(this).parent().prepend(html);
    });


    // Login status
    function loginStatus() {
        var loggedIn = $('#content-wrapper div[data-ihf-subscriber-first-name]').length;
        var namePresent = $('#content-wrapper div[data-ihf-subscriber-first-name]').attr('data-ihf-subscriber-first-name');
        var headerPr = $('body.primary').length;
        var headerSe = $('body.secondary').length;
        var headerSli = $('body.slim').length;
        var headerCent = $('body.centernav').length;
        var headerSl = $('body.slideout').length;
        if (loggedIn > 0 && namePresent != '') {
            var name = $('#content-wrapper div[data-ihf-subscriber-first-name]').attr('data-ihf-subscriber-first-name');
            $('#login-account, .login-account').html('My Account');
        } else if (loggedIn != '' || namePresent == '') {
            $('#login-account, .login-account').html('Login');
        }
    }
    $(window).on('load', loginStatus);


    /************************
Market Reports
************************/

    $('#header').ready(function() {
        var marketSuperHeader = $('#super-header').height();
        var marketHeader = $('#header').height();
        let isTextNode = (_, el) => el.nodeType === Node.TEXT_NODE;
        $('#market-report #content-wrapper,#open-home-report #content-wrapper,#listing-report #content-wrapper').css('padding-top', marketSuperHeader + marketHeader);
        $('.market-report #ihf-main-container .ihf-market-report-header-text').contents().filter(isTextNode).remove();

        var reportDesc = $('.ihf-market-report-description .col-sm-12').html();
        $('.ihf-market-report-description').html('<h1>' + reportDesc + '</h1>');
    });


    /************************
    Counters
    ************************/
    var counter = [];

    function counterInit() {
        // if(thC.hasClass('paused'))
        // {
        $('.count-number').each(function() {
            var i = 0,
                th = $(this),
                id = th.attr('id'),
                d = th.data();
            counter[id] = new CountUp(id, d.start, d.end, d.format, d.time, {
                useEasing: false,
                useGrouping: true
            });
            counter[id].reset();
            // setTimeout(function(){ console.log('counter['+i+']'); console.log(counter[i]); counter[i].start(); },d.delay);
            // let demo = new CountUp(th,d.end,{startVal:d.start,decimalPlaces:d.format,duration:(d.time*.001),useEasing:false,useGrouping:true});
            //   var th = $(this), d = th.data(), numberFrom = parseInt(d.start), numberTo = parseInt(d.end),
            //   delta = numberTo - numberFrom, deltaPositive = delta > 0 ? 1 : 0, time = parseInt(d.time), changeTime = 10;
            //   let currentNumber = numberFrom, value = delta*changeTime/time; var interval1;
            // const changeNumber = () => {
            // 	currentNumber += value;
            // 	(deltaPositive && currentNumber >= numberTo) || (!deltaPositive &&currentNumber<= numberTo) ? currentNumber=numberTo : currentNumber;
            // 	var displayNumber = parseInt(currentNumber).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g,','); $(this).text(displayNumber);
            // 	currentNumber == numberTo ? clearInterval(interval1) : currentNumber;
            // }
            // setTimeout(function(){
            // 	interval1 = setInterval(changeNumber,changeTime);
            // },d.delay);
        });
        // }
    }
    if ($('.counters.container').length > 0) {
        $('.counters.container').each(function() {
            counterInit();
        });
    }
    jWindow.on('scroll', function() {
        // console.log('jWindow');
        var pO = window.pageYOffset,
            wH = window.innerHeight,
            vw = (parseInt(pO) + (parseInt(wH) * .95));
        $('.counters.container').each(function() {
            if (vw > $(this).offset().top) {
                if ($(this).hasClass('paused')) {
                    $('.count-number').each(function() {
                        if ($(this).hasClass('active') == false) {
                            var cid = $(this).attr('id'),
                                d = $(this).data(); //console.log(d);
                            setTimeout(function() {
                                counter[cid].start();
                            }, d.delay);
                            $(this).addClass('active');
                        }
                    });
                    $(this).removeClass('paused');
                }
            }
        });
    });


    /************************
    Property Details
    ************************/
    // 2-colum hero
    if ($("body").hasClass("twocolhero") == true) {
        // Move elements
        $(init);

        function init() {

            $('<div class="col-md-4 col-xs-12 detail-information"></div>').appendTo('.ihf-agent-sellers-rep-alt .row');

            var openHome = $('#ihf-main-container .ihf-listing-information-alt .ihf-open-home').detach();
            openHome.appendTo('.ihf-agent-sellers-rep-alt .row .detail-information');

            var detailAddress = $('#ihf-main-container .ihf-listing-information-alt .ihf-address-alt').detach();
            detailAddress.appendTo('.ihf-agent-sellers-rep-alt .row .detail-information');

            var detailSnapshot = $('#ihf-main-container .property-main-detail-item-alt').detach();
            detailSnapshot.appendTo('.ihf-agent-sellers-rep-alt .row .detail-information');

            var detailMLSNumber = $('#ihf-main-container .extra-link-alt.ihf-listing-number-alt').detach();
            detailMLSNumber.appendTo('.ihf-agent-sellers-rep-alt .row .detail-information');

            var detailForm = $('#ihf-main-container .ihf-listing-information-alt .well').detach();
            detailForm.appendTo('.ihf-agent-sellers-rep-alt .row .detail-information');

            var contactButtons = $('#ihf-main-container .ihf-listing-information-alt .ihf-social-share').detach();
            contactButtons.appendTo('.ihf-agent-sellers-rep-alt .row .detail-information');
        }

        $(document).ready(function() {
            $('.header-login #contact-link').attr('data-toggle', '');
            $('.header-login #contact-link').on('click', function() {
                $('#contact-modal').modal('show');
                $('#contact-modal').removeClass('fade');
            });
        });

        // Detect carousel image size
        function imgSize() {
            $('.ihf-main-image .item').each(function() {
                var imgE = $(this).find('img.media-object');
                var img = new Image();
                var imgH;
                var imgW;
                img.src = $(this).find('img.media-object').data('ihf-main-source');

                img.onload = function() {
                    imgH = this.height;
                    imgW = this.width;

                    if (imgH > imgW) {
                        $(imgE).css({
                            'margin-left': 'auto',
                            'margin-right': 'auto',
                            'width': 'auto',
                            'height': '100%'
                        });
                    } else {
                        $(imgE).css({
                            'margin-left': 'auto',
                            'margin-right': 'auto',
                            'width': '100%',
                            'height': 'auto'
                        });
                    }
                };
            });
        }
        $(document).ready(imgSize);

        // Blur gutters
        function blur() {
            $('.ihf-main-image .item').each(function() {
                var img = new Image();
                img.src = $(this).find('img.media-object').data('ihf-main-source');

                var html = '<div class="blur"></div>'
                $(this).prepend(html);
                $(this).find('div.blur').css({
                    'background-image': 'url(' + img.src + ')',
                });
                $(this).find('img.media-object').wrap('<div class="new-bg"></div>')
                $(this).find('.new-bg').css({
                    'background-image': 'url(' + img.src + ')'
                });
                $(this).find('img').hide();
            });
        }
        $(document).ready(blur);


        // Resize carousel
        function sizeCarousel() {
            var winW = $(window).width();
            var winH = $(window).height();
            var headerH = $('#header').height();
            var detailH = $('.ihf-agent-sellers-rep-alt .detail-information').height();
            var formH = $('.ihf-agent-sellers-rep-alt .well').height();

            if (winW > 1024) {
                $('.ihf-agent-sellers-rep-alt .ihf-property-photo').css({
                    'max-height': winH - headerH
                });
            } else {
                $('.ihf-agent-sellers-rep-alt .ihf-property-photo').css({
                    'max-height': winW * .66,
                    'height': winW * .66
                });
            }

            if (winW < 1024 && winW > 768) {
                $('.ihf-agent-sellers-rep-alt .detail-information').css({
                    'min-height': formH
                });
            } else {
                $('.ihf-agent-sellers-rep-alt .detail-information').css({
                    'min-height': 'unset'
                });
            }
        }
        $(document).ready(sizeCarousel);
        $(window).resize(sizeCarousel);

    }

    $('.video-thumb .item-link').off('click');
    $('.video-thumb .item-link').on('click', function(e) {
        e.preventDefault();
        var d = $(this).data();
        $('#' + d.href + ' #active-title span').html(d.ftitle);
        var p = $(this).closest('.youtubeBox');
        var pT = p.offset().top;
        var scroll = pT - $('#header-container').height();
        $('html,body').animate({
            scrollTop: scroll
        }, 500, function() {
            p.find('#player').css({
                'height': 'auto'
            });
            var videoParams = '?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0',
                _autoPlay = '&autoplay=1';
            p.find('iframe#active-video').attr('src', 'https://www.youtube.com/embed/' + d.href + videoParams + _autoPlay);
            p.find('#main-video h2').html(d.ftitle);
            p.find('#main-video p').html(d.fdescr);
        });
        return false;
    });
    $('.youtubeBox ul.nav-pills li.nav-item').off('click');
    $('.youtubeBox ul.nav-pills li.nav-item').on('click', function() {
        var th = $(this),
            p = th.closest('.youtubeBox');
        var tb = th.find('a').attr('href').substring(1);
        $('#' + tb + '.tab-pane div.video-list div.video.item').first().find('a').trigger('click');
    });
    smoothScrollInit();

    if ($('.mega-menu').length > 0) {
        $('.mega-menu').megaMenu({
            // menuBehaviour: "mouseover",
            // stickyHeader:false,
            // caret:true,
            // highlighter:false,
            caretArrows: [{
                // up:"fa fa-angle-up",
                // down:"fa fa-angle-down",
                upUrl: "fa fa-angle-up",
                downUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEX///9ERER6eno+Pj44ODg/Pz81NTUyMjKtra3d3d3v7+/IyMjg4OBaWlr7+/tXV1eQkJBycnJISEguLi6Li4tsbGxPT0/Ly8vu7u6wsLCTk5O+vr4hISFRUVH/OnzXAAADLUlEQVR4nO3ci1LiQBCF4RES0IAooFzc9f1fcy3Lddy1GZMw3T2T+r8nSFcIh9MDhAAAAAAAAAAAAAAAAAAAAAAAAICRzttZKbZnlQk3h2ZehuawUZkwrJc3ZViudQYM4XbhPdu7xa3WgCFs597TvZlv9QYMnfd07zrFCcPR/1FcHjUHDOGxcR6wedIdMGweWtcB2weloIjufG9ic6c9oHNkaAZF5BgZqkERdX6v04VqUERukaEdFNGLz11sXqwGDJt7j8ho79WDIlp7vJ8u1BqF5Nb+UVyaBEVkHhlGQRGdjAe8uTkZTxhWto/iYmU9oHHLaB7tBwzh1S4y2lePAS0XU3qrp7Sz1aO40FmP9jCziYz5zGvA0Nk8ia1Ro5Ac9wYD7s0ahcQgMnyC4pN+yzBtFBL1xZTF6ilNeTFls3pKU20Z5o1ConuW4RgU0Urv09vSoVFI1BZThqunNK3IcA+KaK3z0Wbv1CgkKosp69VTmkLLcGwUktMu+4Q789VTWvbIKCUooswtw7lRiLIef7cP3uMIsrYM/0YhydgySmgUkmwto4hGIcm2mPJcPaWt8nx62xcXFFGWllFMo5DkaBkFNQpJhsgoMyiiq1tGWY1CcmVkFBsUUbe75lFsd8UGRXTV8bfHYfZwV7SMEhuFZHTLKLJRSEYff3sdZg83MjLKD4po1GKqsNVTWjdmMVVDUEQjWkbJjULyNDQy1H9Hkd3AltHee1/wYHfD3mzmhTcKyaDFVKmrp7QBLaOCRiEZsJgqd/WU1vsso7wzir56toxaGoWkV2RUGBRRr99l2P6OIrceLaOmRiH5MTIqDYrop8VUFauntB8WU3WsntKSLaO+RiE5XH6dtgfvi8tiffkmNlUHRXSxZdTZKCQXIqP6oIgufcm2+qCIxMVUbaunNKFl1NwoBN+Pvws/zB7u22KqxtVT2n+RMZ2giJ6/3sX5s/flKPg3MiYUFNGXljGFRiH5jIyJBUX09z+mDP7rycvH8Xc9h9nDvS+mal89pb21jAk1Ckm3m8DqKW31e6JBEf3yvgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwPX+AOpkK+wFenxFAAAAAElFTkSuQmCC"
            }],
            highlightColor: "skyblue",
            animation: true,
            animationClass: "animated fadeIn",
            followingHighlighter: true,
            // textHighlighter: true,
            // textHighlighterColor:"skyblue",
        })
    }


    // Timelines
    if ($('div.timelineBox').hasClass('vertC')) {
        (function() {
            "use strict";
            // define variables
            var items = document.querySelectorAll(".timeline li");
            // check if an element is in viewport
            // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
            function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <=
                    (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function callbackFunc() {
                for (var i = 0; i < items.length; i++) {
                    if (isElementInViewport(items[i])) {
                        items[i].classList.add("in-view");
                    }
                }
            }

            // listen for events
            window.addEventListener("load", callbackFunc);
            window.addEventListener("resize", callbackFunc);
            window.addEventListener("scroll", callbackFunc);
        })();
    }
    if ($('div.timelineBox').hasClass('horiz')) {
        jQuery(document).ready(function($) {
            {
                var timelines = $('.cd-horizontal-timeline'),
                    eventsMinDistance = 60;

                (timelines.length > 0) && initTimeline(timelines);

                function initTimeline(timelines) {
                    timelines.each(function() {
                        var timeline = $(this),
                            timelineComponents = {};
                        //cache timeline components
                        timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
                        timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
                        timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
                        timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
                        timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
                        timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
                        timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
                        timelineComponents['eventsContent'] = timeline.children('.events-content');

                        //assign a left postion to the single events along the timeline
                        setDatePosition(timelineComponents, eventsMinDistance);
                        //assign a width to the timeline
                        var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
                        //the timeline has been initialize - show it
                        timeline.addClass('loaded');

                        //detect click on the next arrow
                        timelineComponents['timelineNavigation'].on('click', '.next', function(event) {
                            event.preventDefault();
                            updateSlide(timelineComponents, timelineTotWidth, 'next');
                        });
                        //detect click on the prev arrow
                        timelineComponents['timelineNavigation'].on('click', '.prev', function(event) {
                            event.preventDefault();
                            updateSlide(timelineComponents, timelineTotWidth, 'prev');
                        });
                        //detect click on the a single event - show new event content
                        timelineComponents['eventsWrapper'].on('click', 'a', function(event) {
                            event.preventDefault();
                            timelineComponents['timelineEvents'].removeClass('selected');
                            $(this).addClass('selected');
                            updateOlderEvents($(this));
                            updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
                            updateVisibleContent($(this), timelineComponents['eventsContent']);
                        });

                        //on swipe, show next/prev event content
                        timelineComponents['eventsContent'].on('swipeleft', function() {
                            var mq = checkMQ();
                            (mq == 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'next');
                        });
                        timelineComponents['eventsContent'].on('swiperight', function() {
                            var mq = checkMQ();
                            (mq == 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'prev');
                        });

                        //keyboard navigation
                        $(document).keyup(function(event) {
                            if (event.which == '37' && elementInViewport(timeline.get(0))) {
                                showNewContent(timelineComponents, timelineTotWidth, 'prev');
                            } else if (event.which == '39' && elementInViewport(timeline.get(0))) {
                                showNewContent(timelineComponents, timelineTotWidth, 'next');
                            }
                        });
                    });
                }

                function updateSlide(timelineComponents, timelineTotWidth, string) {
                    //retrieve translateX value of timelineComponents['eventsWrapper']
                    var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
                        wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
                    //translate the timeline to the left('next')/right('prev')
                    (string == 'next') ?
                    translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth): translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
                }

                function showNewContent(timelineComponents, timelineTotWidth, string) {
                    //go from one event to the next/previous one
                    var visibleContent = timelineComponents['eventsContent'].find('.selected'),
                        newContent = (string == 'next') ? visibleContent.next() : visibleContent.prev();

                    if (newContent.length > 0) { //if there's a next/prev event - show it
                        var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
                            newEvent = (string == 'next') ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');

                        updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
                        updateVisibleContent(newEvent, timelineComponents['eventsContent']);
                        newEvent.addClass('selected');
                        selectedDate.removeClass('selected');
                        updateOlderEvents(newEvent);
                        updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
                    }
                }

                function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
                    //translate timeline to the left/right according to the position of the selected event
                    var eventStyle = window.getComputedStyle(event.get(0), null),
                        eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
                        timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
                        timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
                    var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

                    if ((string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < -timelineTranslate)) {
                        translateTimeline(timelineComponents, -eventLeft + timelineWidth / 2, timelineWidth - timelineTotWidth);
                    }
                }

                function translateTimeline(timelineComponents, value, totWidth) {
                    var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
                    value = (value > 0) ? 0 : value; //only negative translate value
                    value = (!(typeof totWidth === 'undefined') && value < totWidth) ? totWidth : value; //do not translate more than timeline width
                    setTransformValue(eventsWrapper, 'translateX', value + 'px');
                    //update navigation arrows visibility
                    (value == 0) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive'): timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
                    (value == totWidth) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive'): timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
                }

                function updateFilling(selectedEvent, filling, totWidth) {
                    //change .filling-line length according to the selected event
                    var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
                        eventLeft = eventStyle.getPropertyValue("left"),
                        eventWidth = eventStyle.getPropertyValue("width");
                    eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
                    var scaleValue = eventLeft / totWidth;
                    setTransformValue(filling.get(0), 'scaleX', scaleValue);
                }

                function setDatePosition(timelineComponents, min) {
                    for (i = 0; i < timelineComponents['timelineDates'].length; i++) {
                        var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
                            distanceNorm = Math.round(distance / timelineComponents['eventsMinLapse']) + 2;
                        timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm * min + 'px');
                    }
                }

                function setTimelineWidth(timelineComponents, width) {
                    var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length - 1]),
                        timeSpanNorm = timeSpan / timelineComponents['eventsMinLapse'],
                        timeSpanNorm = Math.round(timeSpanNorm) + 4,
                        totalWidth = timeSpanNorm * width;
                    timelineComponents['eventsWrapper'].css('width', totalWidth + 'px');
                    updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);

                    return totalWidth;
                }

                function updateVisibleContent(event, eventsContent) {
                    var eventDate = event.data('date'),
                        visibleContent = eventsContent.find('.selected'),
                        selectedContent = eventsContent.find('[data-date="' + eventDate + '"]'),
                        selectedContentHeight = selectedContent.height();

                    if (selectedContent.index() > visibleContent.index()) {
                        var classEnetering = 'selected enter-right',
                            classLeaving = 'leave-left';
                    } else {
                        var classEnetering = 'selected enter-left',
                            classLeaving = 'leave-right';
                    }

                    selectedContent.attr('class', classEnetering);
                    visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                        visibleContent.removeClass('leave-right leave-left');
                        selectedContent.removeClass('enter-left enter-right');
                    });
                    eventsContent.css('height', selectedContentHeight + 'px');
                }

                function updateOlderEvents(event) {
                    event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
                }

                function getTranslateValue(timeline) {
                    var timelineStyle = window.getComputedStyle(timeline.get(0), null),
                        timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
                        timelineStyle.getPropertyValue("-moz-transform") ||
                        timelineStyle.getPropertyValue("-ms-transform") ||
                        timelineStyle.getPropertyValue("-o-transform") ||
                        timelineStyle.getPropertyValue("transform");

                    if (timelineTranslate.indexOf('(') >= 0) {
                        var timelineTranslate = timelineTranslate.split('(')[1];
                        timelineTranslate = timelineTranslate.split(')')[0];
                        timelineTranslate = timelineTranslate.split(',');
                        var translateValue = timelineTranslate[4];
                    } else {
                        var translateValue = 0;
                    }

                    return Number(translateValue);
                }

                function setTransformValue(element, property, value) {
                    element.style["-webkit-transform"] = property + "(" + value + ")";
                    element.style["-moz-transform"] = property + "(" + value + ")";
                    element.style["-ms-transform"] = property + "(" + value + ")";
                    element.style["-o-transform"] = property + "(" + value + ")";
                    element.style["transform"] = property + "(" + value + ")";
                }

                //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
                function parseDate(events) {
                    var dateArrays = [];
                    events.each(function() {
                        var dateComp = $(this).data('date').split('/'),
                            newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
                        dateArrays.push(newDate);
                    });
                    return dateArrays;
                }

                function parseDate2(events) {
                    var dateArrays = [];
                    events.each(function() {
                        var singleDate = $(this),
                            dateComp = singleDate.data('date').split('T');
                        if (dateComp.length > 1) { //both DD/MM/YEAR and time are provided
                            var dayComp = dateComp[0].split('/'),
                                timeComp = dateComp[1].split(':');
                        } else if (dateComp[0].indexOf(':') >= 0) { //only time is provide
                            var dayComp = ["2000", "0", "0"],
                                timeComp = dateComp[0].split(':');
                        } else { //only DD/MM/YEAR
                            var dayComp = dateComp[0].split('/'),
                                timeComp = ["0", "0"];
                        }
                        var newDate = new Date(dayComp[2], dayComp[1] - 1, dayComp[0], timeComp[0], timeComp[1]);
                        dateArrays.push(newDate);
                    });
                    return dateArrays;
                }

                function daydiff(first, second) {
                    return Math.round((second - first));
                }

                function minLapse(dates) {
                    //determine the minimum distance among events
                    var dateDistances = [];
                    for (i = 1; i < dates.length; i++) {
                        var distance = daydiff(dates[i - 1], dates[i]);
                        dateDistances.push(distance);
                    }
                    return Math.min.apply(null, dateDistances);
                }
                /*
                	How to tell if a DOM element is visible in the current viewport?
                	http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
                */
                function elementInViewport(el) {
                    var top = el.offsetTop;
                    var left = el.offsetLeft;
                    var width = el.offsetWidth;
                    var height = el.offsetHeight;

                    while (el.offsetParent) {
                        el = el.offsetParent;
                        top += el.offsetTop;
                        left += el.offsetLeft;
                    }

                    return (
                        top < (window.pageYOffset + window.innerHeight) &&
                        left < (window.pageXOffset + window.innerWidth) &&
                        (top + height) > window.pageYOffset &&
                        (left + width) > window.pageXOffset
                    );
                }

                function checkMQ() {
                    //check if mobile or desktop device
                    return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
                }
            }
        });
    }
    if ($('div.timelineBox').hasClass('vertR')) {
        var timelineSwiper = new Swiper('.timeline .swiper-container', {
            direction: 'vertical',
            loop: false,
            speed: 1600,
            pagination: '.swiper-pagination',
            paginationBulletRender: function(swiper, index, className) {
                var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
                return '<span class="' + className + '">' + year + '</span>';
            },
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            breakpoints: {
                768: {
                    direction: 'horizontal',
                }
            }
        });
    }

    $(window).on('load', function() {

        var hash, timeout = 0,
            poll = window.setInterval(function() {
                hash = $(window.location.hash);
                if (hash.length) {
                    $('html,body').animate({
                        scrollTop: hash.offset().top
                    });
                    window.clearInterval(poll);
                } else if (timeout++ > 100) {
                    window.clearInterval(poll);
                }
            }, 1500);

        $('.ihf-results-grid-photo').each(function() {
            var photo = $(this);
            var pImg = undefined;
            var mSrc = photo.data('ihf-main-source'),
                aSrc = photo.data('ihf-alternate-source');
            if (mSrc.includes('no-photo.jpg') != 1 && mSrc.length != 0) {
                var pImg = mSrc;
            }
            if (aSrc.includes('no-photo.jpg') != 1 && aSrc.length != 0) {
                var pImg = aSrc;
            }
            if (pImg == undefined && window.noImage != undefined) {
                var noImg = window.noImage;
            }
            if (noImg != undefined && noImg.length > 1 && window.noImage != undefined) {
                photo.css('background-image', 'url(' + noImg + ')');
            }
        });

    });

})(jQuery);
(function($) {
    "use strict";
    var win = $(window);
    win.scroll(function() {
        if (win.width() > 767) {
            var winTop = win.scrollTop();
            var sticky = $('#headerTop').outerHeight();
            if(winTop >= sticky){
                $("#headerTop").addClass("header-top-ch_sticky");
            } else {
                $("#headerTop").removeClass("header-top-ch_sticky");
            }
        } 
    });
    $('.section-testimonials--carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 6000,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.gallery-item').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', 
        gallery:{
            enabled:true
        },
        zoom: {
            enabled: true, 
            duration: 100,
            easing: 'ease-in-out'
        }
    });
    /* SUBSCRIBE FORM */
    var $contactForm = $('#contactform3');
    $(".result-error").hide();
    $(".result-success").hide();
    /* adding rules for validation fields */
    $contactForm.validate({
        errorClass: 'section-contacts-form-field-error',
        rules: {
            form_name: {
                required: true
            },
            form_email: {
                required: true,
                email: true
            },
            form_message: {
                required: true
            }
        },
        /* adding error message text for validation fields */
        messages: {
            form_name: {
                required: "This field is required"
            },
            form_email: {
                required: "This field is required",
                email: "Please enter a valid email"
            },
            form_message: {
                required: "This field is required"
            }
        },
        /* ajax request properties */
        submitHandler: function() {
            /* get values from form fields */
            var form_data = {
                'Name': $('#form_name').val(),
                'Email': $('#form_email').val(),
                'Phone': $('#form_phone').val(),
                'Message': $('#form_message').val()
            }
            for (var key in form_data) {
                var value = form_data[key];
                form_data[value.name] = value.value;
            }
            $.ajax({
                type: 'POST',
                url: 'sendmail.php',
                data: form_data,
                dataType: "json",
            }).done(function(data) {
                if (data.type == "error") {
                    $(".result-error").show();
                    $(".result-error").html(data.text);
                }
                if (data.type == "done") {
                    $(".result-success").show();
                    $(".result-success").html(data.text);
                    $(".result-error").hide();
                }
            });
            $('.result-error').hide();
        }
    });

    var $contactForm = $('#contactform2');
    $(".result-error").hide();
    $(".result-success").hide();
    /* adding rules for validation fields */
    $contactForm.validate({
        errorClass: 'footer-top__sub-form-field-error',
        rules: {
            form_email: {
                required: true,
                email: true
            }
        },
        /* adding error message text for validation fields */
        messages: {
            form_email: {
                required: "This field is required",
                email: "Please enter a valid email"
            }
        },
        /* ajax request properties */
        submitHandler: function() {
            /* get values from form fields */
            var form_data = {
                'Email': $('#form_email').val()
            }
            for (var key in form_data) {
                var value = form_data[key];
                form_data[value.name] = value.value;
            }
            $.ajax({
                type: 'POST',
                url: 'sendmail.php',
                data: form_data,
                dataType: "json",
            }).done(function(data) {
                if (data.type == "error") {
                    $(".result-error").show();
                    $(".result-error").html(data.text);
                }
                if (data.type == "done") {
                    $(".result-success").show();
                    $(".result-success").html(data.text);
                    $(".result-error").hide();
                }
            });
            $('.result-error').hide();
        }
    });


    /* CONTACT FORM POPUP */
    /* declare contactForm */
    var $contactForm = $('#popup_contactform');
    $(".result-error").hide();
    $(".result-success").hide();
    /* adding rules for validation fields */
    $contactForm.validate({
        errorClass: 'section_popup__form-field-error',
        rules: {
            popup_form_name: {
                required: true
            },
            popup_form_phone: {
                required: true
            }
        },
        /* adding error message text for validation fields */
        messages: {
            popup_form_name: {
                required: "This field is required"
            },
            popup_form_phone: {
                required: "This field is required"
            }
        },
        /* ajax request properties */
        submitHandler: function() {
            /* get values from form fields */
            var form_data = {
                'Name': $('#popup_form_name').val(),
                'Phone': $('#popup_form_phone').val()
            }
            for (var key in form_data) {
                var value = form_data[key];
                form_data[value.name] = value.value;
            }
            $.ajax({
                type: 'POST',
                url: 'sendmail.php',
                data: form_data,
                dataType: "json",
            }).done(function(data) {
                if (data.type == "error") {
                    $(".result-error").show();
                    $(".result-error").html(data.text);
                }
                if (data.type == "done") {
                    $(".result-success").show();
                    $(".result-success").html(data.text);
                    $(".result-error").hide();
                }
            });
            $('.result-error').hide();
        }
    });
    /* SMOOTH SCROLL */
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('[class="anchor"]')
        .not('[href*="#v-tabs-item"]') // for bootstrap tabs
        .not('[href*="#collapse"]') // for bootstrap accordion
        .on('click' , function(event) {
            if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
                var trigger = this;
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200, function() {
                        window.location.href = trigger.href;
                    });
                }
            }
        });
    $('.to-top').on('click', function(e) {
        $('html,body').animate({
            scrollTop: 0
        }, 1100);
        e.preventDefault();
    });
    /* MENU DROPDOWN */
    // $('.navbar-nav .dropdown  > a').on('click hover', function(e) {
    //     if ((win.width() <= 1039) && (win.width() >= 768)) {
    //         e.preventDefault();
    //         window.location = this.href;
    //     }
    // });
    // $('.navbar-nav .dropdown  > a').on('click hover', function(e) {
    //     if ((win.width() > 1039)) {
    //         e.preventDefault();
    //         window.location = this.href;
    //     }
    // });
    $('.navbar-nav .dropdown  > .dropdown-toggle').on('click', function(e) {
        if ((win.width() <= 767)) {
            e.preventDefault();
            $(this).parent().find('.dropdown-menu').toggleClass('show');
            $(this).toggleClass('dropdown-toggle-opened');
        }
    });
    $('.section-video__btn[data-button=popup_video]').click(function(e) {
        e.preventDefault();
        $('.section_popup[data-name=popup_show]').fadeIn();
        $('body').css('overflow', 'hidden');
    });
    $('.section_popup__close').click(function() {
        $('body').css('overflow', 'visible');
        $('.section_popup[data-name=popup_show]').fadeOut();
    });
     /* popup form */
     $('.btn_popup').click(function() {
        var name = $(this).data('name');
        $('.section_popup[data-name=popup_subscribe]').fadeIn();
        $('body').css('overflow', 'hidden');
    });
    $('.section_popup__close').click(function() {
        $('body').css('overflow', 'visible');
        $('.section_popup').fadeOut();
    });
    /* PRELOADER */
    setTimeout(function() {
        $('.loader').fadeOut();
        $('.page-load').fadeOut();
    }, 2000);
    win.scroll(function() {
        if (win.scrollTop() > 200) {
            $('.to-top').addClass('to-top-visible');
        } else {
            $('.to-top').removeClass('to-top-visible');
        }
    });
})(jQuery);
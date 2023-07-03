(function($) {

    function wpJS() {}

    // function scrollTo(el,hdrPad,tar)
    function scrollTo(th) {
        if (window.formScrolling == false) {
            window.formScrolling = true;
            var el = tar = tarTop = hdrPad = undefined,
                form = th.closest('form');
            if ($('#header').hasClass('scrolled') || $('#header-sticky').hasClass('header-sticky')) {
                var hdrID = 'sticky';
            } else {
                var hdrID = 'container';
            }
            var hdrPad = $('#header-' + hdrID).height() + 75;
            if ($('html').hasClass('mobile')) {
                hdrPad = hdrPad - 50;
            }
            scrollTo($('html,body'), hdrPad, $('div.error.active'));
            if (th.parents('.modal').length) {
                var mdl = th.parents('.modal');
                var mdlB = mdl.find('.modal-body');
                var mdlD = mdl.find('.modal-dialog'),
                    mdlE = mdl.find('div.error.active').first();
                hdrPad = 0;
                var el = mdlD;
                if (mdlE.length > 0) {
                    var tar = mdlE;
                } else {
                    var tar = form;
                }
                var tarTop = tar.offset().top - mdlB.offset().top;
                tar = undefined;
            } else {
                if ($('#header').hasClass('scrolled') || $('#header-sticky').hasClass('header-sticky')) {
                    var hdrID = 'sticky';
                } else {
                    var hdrID = 'container';
                }
                var hdrPad = $('#header-' + hdrID).height() + 75;
                if ($('html').hasClass('mobile')) {
                    hdrPad = hdrPad - 50;
                }
                var el = $('html,body');
            }
            if (tar == undefined) {
                var tar = th.closest('form').find('fieldset.active');
            }
            if (tar != undefined && tar.length > 0 && tarTop == undefined) {
                var tarTop = tar.offset().top;
                if (el != undefined && tar != undefined && hdrPad != undefined) {
                    el.animate({
                        scrollTop: tarTop - hdrPad
                    }, 1000, function() {
                        window.formScrolling = false;
                    });
                }
            }
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function loadModal(th) {
        var contentID = th.data('content');
        $('.modal-wrapper').animate({
            'top': '50%'
        }, 500);
        // $('.modal-content-wrapper').load('/wp-content/themes/agenta/inc/mod/modal/modal.php #' + contentID);
        $.ajax({
                cache: false,
                method: 'POST',
                url: wpAJX.ajaxurl,
                data: {
                    'action': 'modal',
                    'c': contentID
                }
            })
            .done(function(c) {
                $('.modal-content-wrapper').html(c);
            });
    }
    $('a[data-toggle*="modal"]').off('click');
    $('a[data-toggle*="modal"]').on('click', function() {
        loadModal($(this));
    });

    function agentaAjaxFormValidation(th) {
        console.log('agentaAjaxFormValidation start');
        var form = th.closest('fieldset');
        form.find('error').removeClass('active');
        var formErr = 0;
        form.find('input[type="text"],input[type="tel"],input[type="radio"],input[type="checkbox"],input[type="hidden"],select,textarea').each(function() {
            var f = $(this),
                n = f.attr('name');
            if (f.is('input[type="text"],input[type="tel"],input[type="hidden"],textarea:not(.g-recaptcha-response),select')) {
                if (f.hasClass('req')) {
                    if (f.val().length == 0) {
                        f.closest('.form-field').find('.error').addClass('active');
                        formErr++;
                    } else {
                        f.closest('.form-field').find('.error').removeClass('active');
                    }
                }
            } else if (f.is('input[type="radio"],input[type="checkbox"]')) {
                if (f.closest('.form-field').hasClass('req')) {
                    if ($('input[name="' + n + '"]:checked').length == 0) {
                        f.closest('.form-field').find('.error').addClass('active');
                        formErr++;
                    } else {
                        f.closest('.form-field').find('.error').removeClass('active');
                    }
                }
            }
            if (f.hasClass('phone-field') && f.hasClass('req')) {
                if (f.val().length < 14) {
                    f.closest('.form-field').find('.error').addClass('active');
                    formErr++;
                } else {
                    f.closest('.form-field').find('.error').removeClass('active');
                }
            }
            if (n.indexOf('emailAddress') > 0) {
                if (f.data('nb') != undefined && f.data('nb-r') != undefined) {
                    // console.log(f);
                    _nb.api.getValidatePublic(f.val(),
                        function(r) {
                            // Returns a Result object
                            f.closest('.form-field').find('.error').removeClass('active');
                            if (r.response.result == 'invalid') {
                                console.log(r);
                                var errMsg = 'Invalid Email Address';
                                f.data('nb-r', false);
                                f.closest('.form-field').find('.error').html(errMsg).addClass('active');
                                formErr++;
                            }
                        },
                        function(err) {
                            console.log('NeverBounce error');
                            console.log(err);
                            // Returns error message as string
                            //f.closest('.form-field').find('.error').addClass('active'); formErr++;
                        }
                    )
                    if (f.data('nb-r') == true) {
                        // console.log('nb-r true');
                        f.closest('.form-field').find('.error').removeClass('active');
                    } else if (f.data('nb-r') == false) {
                        // console.log('nb-r false');
                        f.closest('.form-field').find('.error').addClass('active');
                        formErr++;
                    }
                }
                if (f.hasClass('req')) {
                    if (validateEmail(f.val())) {
                        // console.log('validateEmail true');console.log(f.val());console.log(validateEmail(f.val()));
                        f.closest('.form-field').find('.error').removeClass('active');
                    } else {
                        // console.log('validateEmail false');console.log(f.val());console.log(validateEmail(f.val()));
                        f.closest('.form-field').find('.error').addClass('active');
                        formErr++;
                    }
                }
            }
            // console.log('formErr: '+formErr);
            // console.log('agentaAjaxFormValidation end');
        });
        // if(formErr > 0) {
        // 	var hdrPad = 0; if($('html').hasClass('mobile')) { hdrPad = hdrPad - 15; } else { hdrPad = $('#header-container').outerHeight(); }
        // 	if(th.parents('.modal').length) {
        // 		var mdl = th.parents('.modal'); var mdlB = mdl.find('.modal-body');
        // 		var mdlD = mdl.find('.modal-dialog'), mdlE = mdl.find('div.error.active').first();
        // 		mdlD.animate({ scrollTop: mdlE.offset().top - mdlB.offset().top + hdrPad }, 1000);
        // 	} else {
        // 		if($('#header').hasClass('scrolled') || $('#header-sticky').hasClass('header-sticky')) { var hdrID = 'sticky'; } else { var hdrID = 'container'; }
        // 		var hdrPad = $('#header-'+hdrID).height() + 75; if($('html').hasClass('mobile')) { hdrPad = hdrPad - 50; }
        // 		$('html,body').animate({ scrollTop: $('div.error.active').offset().top - hdrPad - 50 }, 1000);
        // 	}
        // }
        // console.log('formErr: '+formErr);
        window.formErr = formErr;
        if (formErr > 0) {
            scrollTo(th);
        }
        return formErr;
    }
    window.agentaAjaxFormValidation = agentaAjaxFormValidation;

    $('input[type="text"],input[type="tel"],input[type="radio"],input[type="checkbox"],input[type="hidden"],select,textarea').off('keyup change');
    $('input[type="text"],input[type="tel"],input[type="radio"],input[type="checkbox"],input[type="hidden"],select,textarea').on('keyup change', function(e) {
        if (e.keyCode != 9) {
            if ($(this).data('cls') != undefined) {
                var th = $(this),
                    cls = th.data('cls');
                if (th.data('cls').length > 0) {
                    var cls = th.data('cls');
                    if (th.data('typ') == 'eq') {
                        if (th.is('input[type="checkbox"]')) //	This validation includes ALL checkboxes
                        {
                            var chkV = [];
                            th.closest('.form-field').find('input[type="checkbox"]:checked').each(function() {
                                chkV.push($(this).val());
                            });
                            chkV = chkV.join('|');
                            if (th.prop('checked') == true && th.data('act') == 'shw' && chkV == th.data('eq')) {
                                $('.' + cls).removeClass('hide');
                            } else if (th.prop('checked') == true && th.data('act') == 'shw' && chkV != th.data('eq')) {
                                $('.' + cls).addClass('hide');
                            } else if (th.prop('checked') == false && th.data('act') == 'shw' && chkV == th.data('eq')) {
                                $('.' + cls).removeClass('hide');
                            } else if (th.prop('checked') == false && th.data('act') == 'shw' && chkV != th.data('eq')) {
                                $('.' + cls).addClass('hide');
                            } else if (th.prop('checked') == true && th.data('act') == 'hid' && chkV == th.data('eq')) {
                                $('.' + cls).addClass('hide');
                            } else if (th.prop('checked') == true && th.data('act') == 'hid' && chkV != th.data('eq')) {
                                $('.' + cls).removeClass('hide');
                            } else if (th.prop('checked') == false && th.data('act') == 'hid' && chkV == th.data('eq')) {
                                $('.' + cls).addClass('hide');
                            } else if (th.prop('checked') == false && th.data('act') == 'hid' && chkV != th.data('eq')) {
                                $('.' + cls).removeClass('hide');
                            }
                            chkV = undefined;
                        } else {
                            if (th.data('act') == 'shw' && th.val() == th.data('eq')) {
                                $('.' + cls).removeClass('hide');
                            } else if (th.data('act') == 'shw' && th.val() != th.data('eq')) {
                                $('.' + cls).addClass('hide');
                            }
                            if (th.data('act') == 'hid' && th.val() == th.data('eq')) {
                                $('.' + cls).addClass('hide');
                            } else if (th.data('act') == 'hid' && th.val() != th.data('eq')) {
                                $('.' + cls).removeClass('hide');
                            }
                        }
                    } else if (th.data('typ') == 'inc') {
                        if (th.is('input[type="checkbox"]')) {
                            // console.log('checked: '+th.is(':checked')); console.log('act: '+th.data('act'));console.log('eq: '+th.data('eq'));
                            if (th.is(':checked') == true && th.data('act') == 'shw' && th.val().includes(th.data('eq')) == true) {
                                $('.' + cls).removeClass('hide');
                            } else if (th.is(':checked') == false && th.data('act') == 'shw' && th.val().includes(th.data('eq')) == true) {
                                $('.' + cls).addClass('hide');
                            }
                            // else if(th.is(':checked')==true && th.data('act')=='shw' && th.val().includes(th.data('eq'))==false)	{ $('.'+cls).addClass('hide'); }
                            // else if(th.is(':checked')==false && th.data('act')=='shw' && th.val().includes(th.data('eq'))==false)	{ $('.'+cls).removeClass('hide'); }

                            if (th.is(':checked') == true && th.data('act') == 'hid' && th.val().includes(th.data('eq')) == true) {
                                $('.' + cls).addClass('hide');
                            } else if (th.is(':checked') == false && th.data('act') == 'hid' && th.val().includes(th.data('eq')) == true) {
                                $('.' + cls).removeClass('hide');
                            }
                            // else if(th.is(':checked')==true && th.data('act')=='hid' && th.val().includes(th.data('eq'))==true)		{ $('.'+cls).addClass('hide'); } 
                            // else if(th.is(':checked')==false && th.data('act')=='hid' && th.val().includes(th.data('eq'))==false)	{ $('.'+cls).removeClass('hide'); }
                        } else {
                            if (th.data('act') == 'shw' && th.val().includes(th.data('eq')) == true) {
                                $('.' + cls).removeClass('hide');
                            } else if (th.data('act') == 'shw' && th.val().includes(th.data('eq')) == false) {
                                $('.' + cls).addClass('hide');
                            }
                            if (th.data('act') == 'hid' && th.val().includes(th.data('eq')) == true) {
                                $('.' + cls).addClass('hide');
                            } else if (th.data('act') == 'hid' && th.val().includes(th.data('eq')) == false) {
                                $('.' + cls).removeClass('hide');
                            }
                        }
                    }
                }
            }
            if (e.keyCode != 8) {
                var f = $(this),
                    n = f.attr('name');
                if (f.is('input[type="text"],input[type="tel"],input[type="hidden"],textarea:not(.g-recaptcha-response),select')) {
                    if (f.hasClass('req')) {
                        if (f.val().length != 0) {
                            f.closest('.form-field').find('.error').removeClass('active');
                        }
                    }
                    if (f.is('select')) {
                        $(this).removeClass('placeholder');
                        $(this).removeClass('selectable-option');
                        $(this).addClass($(this).find(':selected').attr('class'));
                    }
                } else if (f.is('input[type="radio"],input[type="checkbox"]')) {
                    if (f.closest('.form-field').hasClass('req')) {
                        if ($('input[name="' + n + '"]:checked').length != 0) {
                            f.closest('.form-field').find('.error').removeClass('active');
                        }
                    }
                }
                if (f.is('input[type="tel"]')) {
                    var num = $(this).val().replace(/\D/g, '');
                    if (num.substring(0, 1) == '1') {
                        $(this).val(num.substring(0, 1) + ' (' + num.substring(1, 4) + ') ' + num.substring(4, 7) + '-' + num.substring(7, 11));
                    } else {
                        $(this).val('(' + num.substring(0, 3) + ') ' + num.substring(3, 6) + '-' + num.substring(6, 10));
                    }
                    //$(this).val(num.substring(0,1)+'('+num.substring(1,4)+') '+num.substring(4,7)+'-'+num.substring(7,11));	
                }
            }
        }
    });


    function agentaAjaxFormInit(form) {
        form.find('input[type="text"],input[type="tel"],input[type="radio"],input[type="checkbox"],input[type="hidden"],select,textarea').each(function(i) {
            if ($(this).data() && $.isEmptyObject($(this).data()) == false) {
                var th = $(this),
                    cls = th.data('cls');
                if (cls != undefined && cls.length > 0) {
                    if ($('.' + cls).length > 0 ||
                        $('.' + cls + ' input[type="radio"]').length > 0 ||
                        $('.' + cls + ' select').length > 0
                    ) {
                        // if(th.data('act')=='shw' && th.val() == th.data('eq')) { $('.'+cls).removeClass('hide'); } 
                        // else if(th.data('act')=='shw' && th.val() != th.data('eq')) { $('.'+cls).addClass('hide'); }
                        // if(th.data('act')=='hid' && th.val() == th.data('eq')) { $('.'+cls).addClass('hide'); } 
                        // else if(th.data('act')=='hid' && th.val() != th.data('eq')) { $('.'+cls).removeClass('hide'); }
                    }
                }
            }
        });

        $.each(['utm_landing'], function(i, v) {
            if (Cookies.get(v) != undefined) {
                form.prepend('<input type="hidden" id="' + v + '" class="form-cookies" name="cookies[' + v + ']" value="' + Cookies.get(v) + '">');
            }
        });
        form.find('input[type="hidden"].form-cookies').each(function(i) {
            var f = $(this).attr('id');
            var v = Cookies.get(f);
            if (v != undefined && v.length > 0) {
                $(this).val(Cookies.get(f));
            }
        });

        form.find('fieldset .fieldset-previous, fieldset .fieldset-next').off('click');
        form.find('fieldset .fieldset-previous, fieldset .fieldset-next').on('click', function() {
            var th = $(this),
                d = th.data();
            var formErr = agentaAjaxFormValidation(th);
            window.formErr = formErr;
            var hdrPad = 0;
            if ($('html').hasClass('mobile')) {
                hdrPad = hdrPad - 15;
            } else {
                hdrPad = $('#header-container').outerHeight();
            }
            if (th.hasClass('fieldset-next') && window.formErr == 0 || th.hasClass('fieldset-previous')) {
                var form = th.closest('form'),
                    dur = 250;
                form.find('fieldset.active').removeClass('active', dur).addClass('inactive', 0);
                form.find('fieldset#fieldset-' + d.ts).removeClass('inactive', 0).addClass('active', dur);
                setTimeout(function() {
                    scrollTo(th);
                }, dur + dur);
                // 	if(th.parents('.modal').length) {
                // 		var mdl = th.parents('.modal'); var mdlB = mdl.find('.modal-body'), mdlD = mdl.find('.modal-dialog');
                // 		mdlD.animate({ scrollTop: form.offset().top - mdlB.offset().top + hdrPad }, 1000);
                // 	} else {
                // 		// console.log('hdrPad: '+hdrPad);console.log('form.offset().top: '+form.offset().top);
                // 		$('html,body').animate({ scrollTop: form.offset().top - hdrPad - 50 }, 1000);					
                // 	}
                // } else {
                // 	if($('#header').hasClass('scrolled') || $('#header-sticky').hasClass('header-sticky')) { var hdrID = 'sticky'; } else { var hdrID = 'container'; }
                // 	var hdrPad = $('#header-'+hdrID).height() + 75; if($('html').hasClass('mobile')) { hdrPad = hdrPad - 50; }
                // 	$('html,body').animate({ scrollTop: $('div.error.active').offset().top - hdrPad }, 1000);
            }
        });
    }
    window.agentaAjaxFormInit = agentaAjaxFormInit;

    function agentaAjaxFormSubmit(th) {
        console.log('agentaAjaxFormSubmit start');
        // console.log(th);
        var formData = undefined;
        var rd = 1,
            dur = 1500;
        formData = th.data();
        formData.action = 'formBox';
        var f = $('form#' + formData.uid);
        if (formData.r != undefined) {
            var r = formData.r;
            formData.r = undefined;
        }
        if (formData.rd != undefined) {
            rd = formData.rd;
            formData.rd = undefined;
        }
        if (formData.rt != undefined) {
            rt = formData.rt;
            formData.rt = undefined;
        } else {
            rt = '_self';
        }
        // console.log('window.formErr: '+window.formErr);console.log('formData');console.log(formData);
        if (window.formErr == 0) {
            f.find('input.form-submit').attr('disabled', 'disabled');
            f.find('input[type="text"],input[type="tel"],input[type="email"],input[type="hidden"],input[type="radio"]:checked,input[type="checkbox"]:checked,select,textarea').each(function() {
                var t = $(this);
                var v = t.val().trim();
                var k = t.attr('name');
                if (v.length > 0 && k.indexOf('[]') >= 0) {
                    var an = k.substring(0, k.length - 2);
                    if (typeof formData[an] == 'undefined' || !(formData[an] instanceof Array)) {
                        formData[an] = [];
                    }
                    formData[an].push(v);
                } else {
                    formData[k] = v;
                }
            });
            console.log('agentaAjaxFormSubmit pre-send');
            $.ajax({
                'url': wpAJX.ajaxurl,
                'method': 'post',
                'dataType': 'json',
                'data': formData
            }).done(function(j) {
                console.log('agentaAjaxFormSubmit j');
                console.log(j);
                if (j.success == false) {
                    f.parent().find('.mail-success').hide();
                    f.parent().find('.mail-fail').html(j.message).show();
                    form.trigger('submitFail');
                } else if (j.success == true) {
                    var form = th.closest('form');
                    form.find('.mail-fail').hide();
                    form.find('.mail-success').html(j.message).show();
                    form.find('input[type="text"],input[type="tel"],input[type="hidden"],select,textarea').val('');
                    form.find('input[type=radio],input[type=checkbox]').prop('checked', false);
                    fieldsets = form.find('fieldset');
                    if (fieldsets.length > 0) {
                        form.find('fieldset.active').removeClass('active', dur).addClass('inactive', 0);
                        fieldsets.first().removeClass('inactive', 0).addClass('active', dur);
                    }
                    if (form.closest('.modal').hasClass('show')) {
                        setTimeout(function() {
                            form.closest('.modal').modal('hide');
                            $('.modal-backdrop').each(function() {
                                $(this).remove();
                            });
                            //form.closest('.modal').find('span.icon-close').trigger('click');
                        }, 2000);
                    }
                    console.log('agentaAjaxFormSubmit submitSuccess');
                    form.trigger('submitSuccess');
                    if (window[formData.uid + '_pushEvent'] != undefined) {
                        window.dataLayer.push({
                            'event': window[formData.uid + '_pushEvent']
                        });
                        console.log('Event: ' + window[formData.uid + '_pushEvent']);
                    }
                    if (window[formData.uid + '_resetAdTrack'] != undefined && window[formData.uid + '_resetAdTrack'] == true) {
                        Cookies.set('ad-gate', 'false', {
                            expires: 30
                        });
                        Cookies.set('ad-goal-passed', 'true', {
                            expires: 30
                        });
                        Cookies.set('ad-track', false, {
                            expires: 30
                        });
                        console.log('Ad Tracking Reset');
                    }
                }
                if (j.success == true && r != undefined && r.length > 0) {
                    if (rt != undefined) {
                        setTimeout(function() {
                            window.open(r, rt);
                        }, rd);
                    } else {
                        setTimeout(function() {
                            window.location = r;
                        }, rd);
                    }
                }
                f.find('input.form-submit').removeAttr('disabled');
            });
        }
    }
    window.agentaAjaxFormSubmit = agentaAjaxFormSubmit;

    window.formScrolling = false;

})(jQuery);
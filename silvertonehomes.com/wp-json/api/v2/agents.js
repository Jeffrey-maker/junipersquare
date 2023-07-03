(function($) {

    jQuery.expr[':'].contains = function(a, i, m) {
        return jQuery(a).text().toUpperCase()
            .indexOf(m[3].toUpperCase()) >= 0;
    };

    function agentsInit() {
        $('*').off('changedClass');
        $('*').on('changedClass', function() {
            $(this).addClass('rectangle');
        });

        function agentURLupdate(f, v) {
            if ($('.agents-directory').hasClass('url-hash')) {
                if (f != '' && v != '') {
                    var nURL = window.location.origin + window.location.pathname + '?' + f + '=' + v;
                    window.history.replaceState('', document.title, nURL);
                } else {
                    var nURL = window.location.origin + window.location.pathname;
                    window.history.replaceState('', document.title, nURL);
                }
            }
        }

        function agentsReset(ad) {
            var ppp = ad.data('ppp');
            ad.find('.agentsBox').addClass('force-hidden');
            ad.find('.agentsBox').each(function(i, o) {
                if (i < ppp) {
                    $(this).removeClass('force-hidden');
                }
            });
            ad.find('.agents__page-numbers').removeClass('force-hidden');
            agentURLupdate('', '');
        }

        function agentLettersReset(ad) {
            ad.find('.agents__sort-letters a').removeClass('current');
            ad.find('.agents__sort-letters a#all').addClass('current');
        }
        $('.agents__sort-letters a').off('click');
        $('.agents__sort-letters a').on('click', function() {
            var th = $(this);
            ad = th.closest('div.agents-directory'),
                as = th.closest('div.agents__sort-letters');
            agentTextSearchReset(ad);
            as.find('a').removeClass('current');
            th.addClass('current');
            ad.find('.agentsBox').addClass('force-hidden');
            ad.find('.agents__filter-groups select').val('');
            if (th.attr('id') == 'all') {
                agentsReset(ad);
            } else if (th.data('filter') != undefined) {
                var v = th.data('filter').toLowerCase();
                ad.find('.agentsBox.alpha-' + v).removeClass('force-hidden');
                hidePagination(ad);
                agentURLupdate('letter', v);
            } else {
                agentsReset(ad);
            }
            return false;
        });

        $('.agents__search button').off('click');
        $('.agents__search button').on('click', function() {
            var ad = $(this).closest('div.agents-directory');
            agentLettersReset(ad);
            ad.find('.agentsBox').addClass('force-hidden');
            ad.find('.agents__page-numbers').addClass('force-hidden');
        });

        function agentTextSearchReset(ad) {
            ad.find('input#search-agent-text').val('');
        }

        function agentTextSearchResults(ad, v) {
            console.log('agentTextSearchResults');
            var dur = 500;
            hidePagination(ad);
            var ab = ad.find('.agents__boxes');
            ab.addClass('loading');
            setTimeout(function() {
                ad.find('.agentsBox').addClass('force-hidden');
                ad.find('.agentsBox .search-me:contains("' + v + '")').each(function() {
                    $(this).closest('.agentsBox').removeClass('force-hidden');
                });
            }, dur);
            setTimeout(function() {
                ab.removeClass('loading');
            }, dur + 1);
        }
        if ($('#search-agent-text.autocomplete').length > 0) {
            $(document).ready(function() {
                $('#search-agent-text').each(function() {
                    var ad = $(this).closest('div.agents-directory'),
                        id = ad.attr('id').replace('-', '');
                    $(this).autocomplete({
                        'minLength': 1,
                        'source': window.autoComp[id],
                        'select': function(e, ui) {
                            console.log('searching...' + id);
                            agentTextSearchResults(ad, ui.item.value);
                        }
                    });
                });
            });
        }
        $('input#search-agent-text').off('keyup');
        $('input#search-agent-text').on('keyup', function(e) {
            var ad = $(this).closest('div.agents-directory');
            agentFilterReset(ad);
            agentLettersReset(ad);
            if (e.keyCode == 13) {
                $(this).closest('div.agents-directory').find('.agents__search button').trigger('click');
            } else {
                var v = $(this).val();
                var id = ad.attr('id');
                agentTextSearchResults(ad, v);
            }
        });

        function agentFilterReset(ad) {
            ad.find('.agents__filter-groups select').val('');
        }
        $('.agents__filter-groups select').off('change');
        $('.agents__filter-groups select').on('change', function() {
            var ad = $(this).closest('div.agents-directory'),
                v = $(this).val();
            agentTextSearchReset(ad);
            agentLettersReset(ad);
            hidePagination(ad);
            if (v != '') {
                ad.find('.agentsBox').addClass('force-hidden');
                ad.find('.agentsBox.grp-' + v).removeClass('force-hidden');
                ad.find('.agentsBox.grp-' + v).removeClass('force-hidden');
                agentURLupdate('group', v);
            } else {
                agentsReset(ad);
            }
        });

        var run;

        function agentsBxsScroll(ab, hdr) {
            // console.log('agentsBxsScroll');
            if (run != undefined && run['agentsBxsScroll'] == undefined) {
                $('html').animate({
                    scrollTop: ab.offset().top - hdr - 1,
                }, 500, function() {
                    $('html').animate({
                        scrollTop: ab.offset().top - hdr,
                        duration: 500,
                    });
                });
                // console.log('agentsBxsScroll finished');
                run['agentsBxsScroll'] = true;
                return true;
            }
        }

        function agentsBxsScrollDone() {
            // console.log('agentsBxsScrollDone');
            if (run != undefined && run['agentsBxsScrollDone'] == undefined) {
                // console.log('agentsBxsScrollDone finished');
                run['agentsBxsScrollDone'] = true;
                return true;
            }
        }

        function agentsBxsFadeOut(ab) {
            // console.log('agentsBxsFadeOut');
            if (run != undefined && run['agentsBxsFadeOut'] == undefined) {
                ab.addClass('loading');
                // console.log('agentsBxsFadeOut finished');
                run['agentsBxsFadeOut'] = true;
                return true;
            }
        }

        function agentsPgnSet(th, apn) {
            // console.log('agentsPgnSet');
            if (run != undefined && run['agentsPgnSet'] == undefined) {
                // console.log('curPg: '+apn.find('.curPg').text());
                // console.log('pgT: '+apn.find('.pgT').text());
                var dir = th.find('a').data('dir');
                var pgT = parseInt(apn.find('.pgT').text());
                var curPg = parseInt(apn.find('.curPg').text());
                th.data('dir', dir);
                th.data('curPg', curPg);
                th.data('pgT', pgT);
                //var a = th.data('pgn'); apn.find('a').removeClass('current'); th.addClass('current');
                // console.log('agentsPgnSet finished');
                setTimeout(function() {
                    run['agentsPgnSet'] = true;
                    return true;
                }, 10);
            }
            return true;
        }

        function agentsChange(th, ad) {
            // console.log('agentsChange');
            if (run != undefined && run['agentsChange'] == undefined) {
                var d = th.data(); //console.log(th.data());
                d.curPg = parseInt(d.curPg);
                d.pgT = parseInt(d.pgT);
                if (d.dir == '+' && d.curPg + 1 <= d.pgT) {
                    var a = d.curPg + 1;
                } else if (d.dir == '-' && d.curPg - 1 > 0) {
                    var a = d.curPg - 1;
                }
                $('.agents__page-numbers li span.curPg').html(a);
                //var a = parseInt(th.data('pgn')); //a = 1;
                ad.find('.agentsBox').addClass('force-hidden');
                ad.find('.agentsBox.pgn-' + a).removeClass('force-hidden');
                // console.log('agentsChange finished');
                setTimeout(function() {
                    run['agentsChange'] = true;
                    return true;
                }, 10);
            }
            return true;
        }

        function agentsBxsFadeIn(ab) {
            // console.log('agentsBxsFadeIn');
            if (run != undefined && run['agentsBxsFadeIn'] == undefined) {
                ab.removeClass('loading');
                // console.log('agentsBxsFadeIn finished');
                run['agentsBxsFadeIn'] = true;
                return true;
            }
        }
        /*
        function agentsPgnClickFinish(ab,hdr) {
        	console.log('agentsPgnClickFinish');
        	if(run != undefined && run['agentsPgnClickFinish'] == undefined) { 
        		var y = ab.offset().top - hdr;
        		console.log('y-1: '+(y-1));console.log('y: '+(y));
        		window.scrollTo(y-1,0);window.scrollTo(y,0);
        		console.log('click finished');
        		run['agentsPgnClickFinish'] = true; return true;
        	}
        }
        $('.agents__page-numbers a').off('click');
        $('.agents__page-numbers a').on('click',function(){
        	// console.log('click');
        	var hdr = $('header').outerHeight(); var th = $(this), 
        	apn = th.closest('div.agents__page-numbers'),
        	ad = th.closest('div.agents-directory'),
        	ab = ad.find('div.agents__boxes'); run = [];
        	$.when( agentsBxsScroll(hdr) ).done(function() {
        		setTimeout(function(){
        			$.when( agentsBxsFadeOut(ab) ).done(function() {						
        				setTimeout(function(){
        					$.when( agentsPgnSet(th,apn) ).done(function() {
        						$.when( agentsChange(th,ad) ).done(function() {
        							$.when( agentsBxsFadeIn(ab) ).done(function() {
        								setTimeout(function(){
        									agentsPgnClickFinish();
        								},501);
        							});
        						});
        					});
        				},600);
        			});
        		},501);
        	});
        	return false;
        });
        */
        function hidePagination(ad) {
            ad.find('.agents__page-numbers').addClass('force-hidden');
        }
        $('.agents__page-numbers li.pgDir').off('click');
        $('.agents__page-numbers li.pgDir').on('click', function() {
            // console.log('click');
            var hdr = $('header').outerHeight();
            var th = $(this),
                apn = th.closest('ul.agents__page-numbers'),
                ad = th.closest('div.agents-directory'),
                ab = ad.find('div.agents__boxes');
            run = [];
            if (th.hasClass('loading') == false) {
                th.addClass('loading');
                setTimeout(function() {
                    $.when(agentsBxsFadeOut(ab)).done(function() {
                        setTimeout(function() {
                            $.when(agentsPgnSet(th, apn)).done(function() {
                                $.when(agentsChange(th, ad)).done(function() {
                                    $.when(agentsBxsFadeIn(ab)).done(function() {
                                        setTimeout(function() {
                                            agentsBxsScroll(ab, hdr);
                                            th.removeClass('loading');
                                        }, 501);
                                    });
                                });
                            });
                        }, 600);
                    });
                }, 0);
            }
            return false;
        });

        if ($('.agents-directory').hasClass('url-hash')) {
            if (window.location.search.length > 1) {
                var paramsString = (new URL(document.location)).searchParams;
                var searchParams = new URLSearchParams(paramsString);
                if (searchParams.has('group')) {
                    var v = searchParams.get('group');
                    $('.agents__filter-groups select').val(v).trigger('change');
                } else if (searchParams.has('letter')) {
                    var v = searchParams.get('letter').toUpperCase();
                    $('.agents__sort-letters a[data-filter=' + v + ']').trigger('click');
                }
                // $('input#search-agent-text').val(v);
            }
        }
    }
    setTimeout(agentsInit, 0);


})(jQuery);
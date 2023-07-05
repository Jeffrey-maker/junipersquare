$(function() {

    var ids = [];
    var player, css, videoId, player_id, playerOrigin = '*';

    function Vimeo() {}

    function vimeoPlayer(c, v, u) {
        videoId = v;
        player = $('#' + c + ' iframe');
        ids.push(c); // console.log('vimeoPlayer: '+c);console.log('u: '+u);
        // player.attr('src','https://player.vimeo.com/video/'+v+'?api=1&player_id='+u+'&background=1&autoplay=1&loop=1&muted=1&controls=0');
        player.attr('src', 'https://player.vimeo.com/video/' + v + '?api=1&player_id=' + u + '&background=1&autopause=0');
        if (window.addEventListener) {
            window.addEventListener('message', onMessageReceived, false);
        } else {
            window.attachEvent('onmessage', onMessageReceived, false);
        }
    }

    function getThumbnail(c, v, u) {
        $.getJSON('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' + v, {
            'format': 'json',
            'width': '1280'
        }, function(j) {
            $('#' + c + ' .vimeo-thumb').css({
                'background-image': 'url(' + j.thumbnail_url + ')'
            });
            vimeoPlayer(c, v, u); //console.log('j.thumbnail_url: '+j.thumbnail_url);
        });
    }

    function onMessageReceived(event) {
        // console.log('onMessageReceived');
        // console.log('event',event);console.log('player',player);
        if (!(/^https?:\/\/player.vimeo.com/).test(event.origin)) {
            return false;
        }
        if (playerOrigin === '*') {
            playerOrigin = event.origin;
        }
        if (typeof event.data === 'object') {
            var data = event.data;
        } else {
            var data = JSON.parse(event.data);
        }
        // console.log('ids');console.log(ids);
        if (data.event == 'ready') {
            // console.log('ready'); //onReady(); 
            // thumbFadeOut(data.player_id);
            // if($('html').hasClass('mobile')==false) {
            thumbFadeOut(player.attr('id'));
            // }
        }
        // if(data.value=='playProgress') {
        // 	console.log('playProgress');
        // 	onPlayProgress();
        // }
        /*
        switch (data.event) {
        	case 'ready': 
        		console.log('ready');
        		onReady();
        		break;
        	case 'playProgress':
        		console.log('playProgress');
        		onPlayProgress();
        		break;
        }
        */
    }

    function post(action, value) {
        var data = {
            method: action
        };
        if (value) {
            data.value = value;
        }
        // console.log('data');console.log(data);
        var message = JSON.stringify(data);
        // console.log('message');console.log(message);
        player[0].contentWindow.postMessage(message, playerOrigin);
    }

    function thumbFadeOut(pid) {
        // cssId = ids[]
        // console.log('videoId: '+videoId);
        // if($('#'+cssId+' .vimeo-thumb').hasClass('fade-out')==false)
        if ($('.vimeo-thumb[data-pid="' + pid + '"]').hasClass('fade-out') == false) {
            setTimeout(function() {
                // $('#'+cssId+' .vimeo-thumb').addClass('fade-out');
                $('.vimeo-thumb[data-pid="' + pid + '"]').addClass('fade-out');
            }, 250);
        }
    }

    // function onReady() {
    // 	post('play'); post('addEventListener', 'playProgress'); //thumbFadeOut();
    // }
    // 
    // function onPlayProgress() { thumbFadeOut(); }

    window.Vimeo = Vimeo;
    Vimeo.prototype.vimeoPlayer = vimeoPlayer;
    Vimeo.prototype.getThumbnail = getThumbnail;
    window.vimeo = new Vimeo();

});
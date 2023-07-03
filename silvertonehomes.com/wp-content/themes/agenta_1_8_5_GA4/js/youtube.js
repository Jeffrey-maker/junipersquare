(function($) {

    var tag = document.createElement('script');
    tag.id = "youtube-api";
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    var players = [];

    function onYouTubeIframeAPIReady(id) {
        console.log('onYouTubeIframeAPIReady: ' + id);
        var player = new YT.Player(id, {
            events: {
                // 'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        players.push(player);
    }

    function onPlayerStateChange(event) {
        console.log('onPlayerStateChange event.target');
        console.log(event.target.i);
        if (event.data == YT.PlayerState.PLAYING) {
            var id = $(event.target.i).attr('id');
            stopVideo(id);
        }
    }

    function stopVideo(player_id) {
        for (var i = 0; i < players.length; i++) {
            if (player_id != $(players[i].i).attr('id')) {
                players[i].pauseVideo();
            }
        }
    }

    $(document).ready(function() {
        setTimeout(function() {
            $('iframe.youtube-iframe').each(function(i) {
                var id = $(this).attr('id');
                onYouTubeIframeAPIReady(id);
            });
        }, 500);
    });

})(jQuery);
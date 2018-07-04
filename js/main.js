var tag = document.createElement('script');

var vid = document.getElementById("player"); 
var audio = document.querySelector("audio");
audio.volume = 1;

audio.play();

$('input[type="range"]').on('input', function() {
    audio.volume = $(this).val();
    
    if($(this).val() == 0) {
		$("li.volume").attr("src", "images/volume_off.png");		
        audio.muted = true;
    } else {
        $("li.volume").attr("src", "images/volume.png");	
        audio.muted = false;
    }
});

$('li.pause').click(function() {
    if(audio.paused) {
        audio.play();
        vid.play();
        $('li.pause img').attr("src", "images/pause.png");
        $('#player').css({
        });
    } else {
        audio.pause();
        vid.pause();
        $('li.pause img').attr("src", "images/play.png");
        $('#player').css({
        });
    }
});

$('li.volume').click(function() {
    if(audio.muted) {
        audio.muted = false;
        audio.volume = 0.05;
        $('input[type="range"]').val(0.05);
        $('li.volume img').attr("src", "images/volume.png");
    } else {
        audio.muted = true;
        $('input[type="range"]').val(0);
        $('li.volume img').attr("src", "images/volume_off.png");
    }
});

function audioStart() {
	var custom_switch = document.getElementById('custom_switch'),
			custom_audio = document.getElementById('custom_audio'),
			time = document.getElementById('time'),
			currentTime = 0,
			duration = 0,
			playing = false;

	custom_switch.onclick = function(){
		if(playing){
			custom_audio.pause();
			playing = !playing;
			custom_switch.innerHTML = "播放";
			return;
		}
		custom_audio.play();
		playing = !playing;
		custom_switch.innerHTML = "暂停";
		function timeGo(){
			currentTime = custom_audio.currentTime;
			duration = custom_audio.duration;
			timeStart(duration,currentTime);
		}
		timeGo();
		var loop = setInterval(function(){
			timeGo();
		},1000)
	}

	function timeStart(duration,currentTime){
		var hours = Math.floor((duration - currentTime)/3600);
		var minutes = Math.floor((duration - currentTime)/60%60);
		var seconds = Math.floor((duration - currentTime)%60);
		time.innerHTML = hours + ":" + minutes + ":" + seconds;
	}

}

audioStart();

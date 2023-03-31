var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	var vid = document.querySelector("#player1");
	vid.autoplay = false;
	vid.loop = false;
	vid.load();

});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video = document.querySelector("#player1")
	video.play()
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%"
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video = document.querySelector("#player1")
	video.pause()
});

document.querySelector("#slider").addEventListener("change", function () {
	console.log("Volume Adjust")
	console.log(this)
	console.log(this.value)
	vol = (this.value)/100
	video = document.querySelector("#player1")
	video.volume = vol*1
	document.querySelector("#volume").innerHTML = this.value + "%"
});

document.querySelector("#mute").addEventListener("click", function () {
	console.log("Mute Video");
	video = document.querySelector("#player1")
	if(video.muted == true) {
		video.muted=false
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else if(video.muted == false) {
		video.muted=true
		document.querySelector("#mute").innerHTML = "Unmute"
	};
});

document.querySelector("#slower").addEventListener("click", function () {
	video = document.querySelector("#player1")
	console.log("Video slow down")
	video.playbackRate -= 0.1
	rate = video.playbackRate
	console.log("New speed is " + rate)
});

document.querySelector("#faster").addEventListener("click", function () {
	video = document.querySelector("#player1")
	console.log("Video speed up")
	video.playbackRate += 0.1
	rate = video.playbackRate
	console.log("New speed is " + rate)
});

document.querySelector("#skip").addEventListener("click", function () {
	video = document.querySelector("#player1")
	console.log("Skip ahead")
	video.currentTime += 15
	if (video.ended == true) {
		video.currentTime = 0
	}
	time = video.currentTime
	console.log("Current time is " + time)
});


document.querySelector("#vintage").addEventListener("click", function () {
	console.log("Old School Styling")
	video = document.querySelector("#player1")
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function () {
	console.log("Original Styling")
	video = document.querySelector("#player1")
	video.classList.remove("oldSchool")
});
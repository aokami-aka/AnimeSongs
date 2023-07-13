function ChangeSrc(Newsrc) {
	var video = document.getElementById('video1');
	var checkbox = document.getElementById('switch')

	if(document.getElementById('video1').style.display == 'none') {
		document.getElementById('video1').style.display = 'block', 
		checkbox.checked = !checkbox.checked;
	}
	
	if(Newsrc == video.src && !video.paused) {
		video.pause();
	} else {
		video.play();
	}

	if(Newsrc != video.src) {
		video.src = Newsrc;
	}
}

function ShowHidden() {
	var video = document.getElementById('video1');

	if(document.getElementById('video1').style.display == 'block')
		document.getElementById('video1').style.display = 'none';
	else
		document.getElementById('video1').style.display = 'block';
}

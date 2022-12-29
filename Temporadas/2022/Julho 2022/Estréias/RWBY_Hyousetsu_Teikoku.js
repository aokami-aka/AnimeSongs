function ShowHiddenop1() {
	const video1 = document.getElementById('video1');
	const video2 = document.getElementById('video2');
	const video3 = document.getElementById('video3');

	if(document.getElementById('op1').style.display == 'block')
		document.getElementById('op1').style.display = 'none', 
		document.getElementById('ed1').style.display = 'none',
		document.getElementById('ed2').style.display = 'none',
		video1.pause(),
		video2.pause(),
		video3.pause();
	else
		document.getElementById('op1').style.display = 'block',
		document.getElementById('ed1').style.display = 'none',
		document.getElementById('ed2').style.display = 'none',
		video1.pause(),
		video2.pause(),
		video3.pause();
}

function ShowHiddened1() {
	const video1 = document.getElementById('video1');
	const video2 = document.getElementById('video2');
	const video3 = document.getElementById('video3');

	if(document.getElementById('ed1').style.display == 'block')
		document.getElementById('op1').style.display = 'none', 
		document.getElementById('ed1').style.display = 'none',
		document.getElementById('ed2').style.display = 'none',
		video1.pause(),
		video2.pause(),
		video3.pause();
	else
		document.getElementById('op1').style.display = 'none',
		document.getElementById('ed1').style.display = 'block',
		document.getElementById('ed2').style.display = 'none',
		video1.pause(),
		video2.pause(),
		video3.pause();
}

function ShowHiddened2() {
	const video1 = document.getElementById('video1');
	const video2 = document.getElementById('video2');
	const video3 = document.getElementById('video3');

	if(document.getElementById('ed2').style.display == 'block')
		document.getElementById('op1').style.display = 'none', 
		document.getElementById('ed1').style.display = 'none',
		document.getElementById('ed2').style.display = 'none',
		video1.pause(),
		video2.pause(),
		video3.pause();
	else
		document.getElementById('op1').style.display = 'none',
		document.getElementById('ed1').style.display = 'none',
		document.getElementById('ed2').style.display = 'block',
		video1.pause(),
		video2.pause(),
		video3.pause();
}
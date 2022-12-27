function ShowHiddenop1() {
	const video1 = document.getElementById('video1');

	if(document.getElementById('op1').style.display == 'block')
		document.getElementById('op1').style.display = 'none', 
		video1.pause();
	else
		document.getElementById('op1').style.display = 'block',
		video1.pause();
}
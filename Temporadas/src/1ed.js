function ShowHiddened1() {
	const video1 = document.getElementById('video1');

	if(document.getElementById('ed1').style.display == 'block')
		document.getElementById('ed1').style.display = 'none', 
		video1.pause();
	else
		document.getElementById('ed1').style.display = 'block',
		video1.pause();
}
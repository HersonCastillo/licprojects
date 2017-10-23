window.onload = function(){
	document.querySelector('.b').addEventListener('click', function(){
		document.querySelector('.conta').classList.toggle('in');
		this.classList.toggle('mif-chevron-right');
	});
}

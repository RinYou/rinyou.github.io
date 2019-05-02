addEventListener("load", function () {
	setTimeout(hideURLbar, 0);
}, false);
function hideURLbar() {
	window.scrollTo(0, 1);
}
$(function(){
function id(v){return document.getElementById(v); }
function loadbar() {
	var ovrl = id("overlay"),
		prog = id("progress"),
		stat = id("progstat"),
		img = document.images,
		c = 0;
		tot = img.length;
	function imgLoaded(){
		$('body').css('overflow','hidden');
		c += 1;
		var perc = ((100/tot*c) << 0) +"%";
		prog.style.width = perc;
		stat.innerHTML = "Loading "+ perc;
		if(c===tot) return doneLoading();
	}
	function doneLoading(){
		ovrl.style.opacity = 0;
		setTimeout(function(){ 
			ovrl.style.display = "none";
		}, 1200);
		$('body').css('overflow','auto');
	}
	if(tot===0) {
		$('body').css('overflow','hidden');
		var perc = "100%";
		prog.style.width = perc;
		stat.innerHTML = "Loading "+ perc;
		return doneLoading();
	}else{
		for(var i=0; i<tot; i++) {
			var tImg     = new Image();
			tImg.onload  = imgLoaded;
			tImg.onerror = imgLoaded;
			tImg.src     = img[i].src;
		}
	}
}
document.addEventListener('DOMContentLoaded', loadbar, false);
}());
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function() {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
});

var tablinks = document.getElementsByClassName("tab__links");
var tabcontents = document.getElementsByClassName("tab__contents");

function opentab(tabname) {
	for (tablink of tablinks) {
		tablink.classList.remove("active__link");
	}
	for (tabcontent of tabcontents) {
		tabcontent.classList.remove("active__tab");
	}
	event.currentTarget.classList.add("active__link")
	document.getElementById(tabname).classList.add("active__tab")
}

/*== Projects Swiper ==*/
let swiper = new Swiper('.projects__container', {
	cssMode: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

/*== Videos ==*/
document.getElementById('chess_project').addEventListener('click', function() {
	// Show video container
	document.getElementById('videoContainer').style.display = 'block';

	// Play the video
	document.getElementById('demoVideo').play();
});

document.getElementById('lfa_project').addEventListener('click', function() {
	// Show video container
	document.getElementById('videoContainer').style.display = 'block';

	// Play the video
	document.getElementById('demoVideo').play();
});
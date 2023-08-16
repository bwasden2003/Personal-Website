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
document.addEventListener('DOMContentLoaded', function() {
	const videoButtons = document.querySelectorAll('.demo__button');
	const videoContainer = document.querySelector('.video__container'); // Global video container
	const videoPlayer = videoContainer.querySelector('video');

	videoButtons.forEach(btn => {
		btn.addEventListener('click', function() {
			// Get video path from the data attribute of the clicked button
			const videoSrc = btn.getAttribute('data-video-src');

			// Update the video source, load it, display the overlay, and play the video
			videoPlayer.querySelector('source').src = videoSrc;
			videoPlayer.load();
			videoContainer.style.display = 'flex';
			videoPlayer.play();
		});
	});

	document.querySelectorAll('.video__container').forEach(container => {
		container.addEventListener('click', function(e) {
			const videoPlayer = container.querySelector('video');
			
			if (!videoPlayer.contains(e.target)) {
				console.log("closing video")
				container.style.display = 'none';
				header
				videoPlayer.pause();
			}
		});

		container.querySelector('video').addEventListener('click', function(e) {
			e.stopPropagation();
		});
	});
});


// document.getElementById('lfa__project__button').addEventListener('click', function() {
//     const videoOverlay = document.getElementById('lfa__video__container');
//     const videoPlayer = document.getElementById('lfa__video__player');

//     videoOverlay.style.display = 'flex';
//     videoPlayer.play();
// });

// document.getElementById('lfa__video__container').addEventListener('click', function(e) {
//     if(e.target === this) {
//         const videoPlayer = document.getElementById('lfa__video__player');
//         this.style.display = 'none';
//         videoPlayer.pause();
//     }
// });

// document.getElementById('chess__project__button').addEventListener('click', function() {
//     const videoOverlay = document.getElementById('chess__video__container');
//     const videoPlayer = document.getElementById('chess__video__player');

//     videoOverlay.style.display = 'flex';
//     videoPlayer.play();
// });

// document.getElementById('chess__video__container').addEventListener('click', function(e) {
//     if(e.target === this) {
//         const videoPlayer = document.getElementById('chess__video__player');
//         this.style.display = 'none';
//         videoPlayer.pause();
//     }
// });
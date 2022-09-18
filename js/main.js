// Global variables

const menuToggleIcon = document.getElementById("menu-toggle-icon");
const navMobile = document.getElementById("nav");
const headerElement = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-mobile .list-link");


// Toggle navigation

const toggleMenu = () => {
	navMobile.classList.toggle("active");
	headerElement.classList.toggle("active");
}

menuToggleIcon.addEventListener("click",  toggleMenu); 

//Add/remove header border bottom on scroll

const headerScrollEvent = () => {

	if(this.scrollY >= 30) {
		
		headerElement.classList.add("active-scroll");

	} else {
		headerElement.classList.remove("active-scroll");
	}
}

window.addEventListener("scroll", headerScrollEvent);

// Add selected link styles to the link clicked and close navigation when clic

navLinks.forEach(function(item) {
	item.addEventListener("click", function() {
		navMobile.classList.remove('active');
		headerElement.classList.remove('active');

		let current = document.getElementsByClassName("current");
		current[0].className = current[0].className.replace("current", "");
		item.className += " current";


	});
});


// Scroll Reveal

const sr = ScrollReveal({

	distance: "25px",
	duration: 2500
});

sr.reveal(`.image-left, .popular-destinations-data, .plan-trip-data`, {
	origin:'left'
});

sr.reveal(".image-center", {
	origin: "bottom"
})

sr.reveal(`.image-right, .show-case-data`, {
	origin: "right"
})

sr.reveal('.beach-data-wrapper', {
	origin: "bottom",
	interval: 250
})


sr.reveal('.news-letter-container', {
	origin: "top"

})


sr.reveal(`.footer-container-inner, .footer-separator, .copyright`, {
	origin: "bottom",
    interval: 250

})


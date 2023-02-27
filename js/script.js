


// Show and Hide Navbar Menu
const burgerMenu = document.querySelector(".hamburger");
const navbarMenu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("is-active");
	navbarMenu.classList.toggle("active");

	if (navbarMenu.classList.contains("active")) {
		navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
	} else {
		navbarMenu.removeAttribute("style");
	}
});


$('.menu-link').click(function () {
	if (navbarMenu.style.maxHeight !== '0px') {

		burgerMenu.classList.remove("is-active");
		navbarMenu.removeAttribute("style");
		navbarMenu.classList.remove("active");

	}
})

// Initialize Sticky Reveal Navbar Menu
let latestScroll = 0;
window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;

	if (currentScroll <= 0) {
		document.body.classList.remove("scroll-up");
		return;
	}

	// Set the currentScroll Condition
	if (currentScroll > latestScroll && !document.body.classList.contains("scroll-down")) {

		document.body.classList.remove("scroll-up");
		document.body.classList.add("scroll-down");

	} else if (currentScroll < latestScroll && document.body.classList.contains("scroll-down")) {

		document.body.classList.remove("scroll-down");
		document.body.classList.add("scroll-up");

	}

	latestScroll = currentScroll;
});
// For search bar and icon 
$(document).ready(function () {

	$(".fa-search").click(function () {
		$(".wrap, .input").toggleClass("active");
		$("input[type='text']").focus();
	});

});

//Navbar close when click outside

jQuery("body").bind("click", function (e) {

	if (jQuery(e.target).closest(".navigation_bar").length == 0) {

		if (navbarMenu.style.maxHeight !== '0px') {

			burgerMenu.classList.remove("is-active");
			// navbarMenu.style.maxHeight = "0px";
			navbarMenu.removeAttribute("style");
			navbarMenu.classList.remove("active");

		}

	}
});
document.addEventListener('click', function (event) {
	var clickover = event.target;
	var _opened = document.querySelector(".menu").classList.contains("active");
	if (_opened === true && !clickover.closest('.navbar')) {
		document.querySelector(".navbar-toggler").click();
	}
});

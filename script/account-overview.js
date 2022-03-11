// Open and close dropdown
function toggleDropdown(element) {
	// console.log();
	// element.classList.add("open-sub-menu");
	if (element.nextElementSibling.classList.contains("h-0")) {
		element.nextElementSibling.classList.remove("h-0");
		element.nextElementSibling.classList.add("pt-4");
		element.nextElementSibling.classList.add("h-[100%]");
		element.nextElementSibling.classList.remove("invisible");
		element.nextElementSibling.classList.remove("opacity-0");
		element.children[1].children[0].classList.add("rotate-180");

		return;
	}
	element.nextElementSibling.classList.add("invisible");
	element.nextElementSibling.classList.remove("pt-4");
	element.nextElementSibling.classList.add("h-0");
	element.nextElementSibling.classList.remove("h-[100%]");
	element.nextElementSibling.classList.add("opacity-100");
	element.children[1].children[0].classList.remove("rotate-180");
}

// Navigation
document.querySelector(".hamburger").addEventListener("click", () => {
	document.querySelector(".navigation-menu").classList.toggle("hidden");
});
document.querySelector(".close-nav").addEventListener("click", () => {
	document.querySelector(".navigation-menu").classList.toggle("hidden");
});

// Active link logic

const links = document.querySelectorAll(".dashboard-links");
links.forEach((link) => {
	if (link.attributes.href.value == location.pathname) {
		link.children[0].classList.remove("text-slate-600");
		link.children[0].classList.add("text-blue-700", "bg-blue-100");
		console.log(
			(link.children[0].children[0].attributes.fill.value = "#1D4ED8")
		);
	}
});

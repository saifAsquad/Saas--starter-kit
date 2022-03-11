let notification = document.getElementById("notification");
let flag = true;
const dropdownHandler = () => {
	if (flag) {
		notification.classList.remove("hidden");
		flag = false;
	} else {
		flag = true;
		notification.classList.add("hidden");
	}
};
// Progress bar
// Delivered
var i = 0;
if (i == 0) {
	i = 1;
	let elem = document.getElementById("delivered");

	let text = document.getElementById("percentageDelivered");
	var width = 0;
	var id = setInterval(frame, 30);
	function frame() {
		if (width >= 50) {
			i = 0;
		} else {
			width++;
			elem.style.width = width + "%";
			text.innerHTML = width + "%";
		}
	}
}
var a = 0;
if (a == 0) {
	a = 1;
	let elem = document.getElementById("reported");

	let text = document.getElementById("percentageReported");
	var width = 0;
	var id = setInterval(frame, 30);
	function frame() {
		if (width >= 50) {
			a = 0;
		} else {
			width++;
			elem.style.width = width + "%";
			text.innerHTML = width + "%";
		}
	}
}
// Ordered
var b = 0;
if (b == 0) {
	b = 1;
	var elem = document.getElementById("Ordered");
	let text = document.getElementById("percentageOrdered");
	var width = 0;
	var id = setInterval(frameTwo, 30);
	function frameTwo() {
		if (width >= 43) {
			b = 0;
		} else {
			width++;
			elem.style.width = width + "%";
			text.innerHTML = width + "%";
		}
	}
}

const myBarChart = new Chart(document.getElementById("chartjs-1"), {
	type: "bar",
	data: {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [
			{
				label: "Project 1",
				barThickness: 9,
				borderRadius: 25,
				fill: false,
				backgroundColor: "#3B82F6",
				data: [60, 70, 80, 40, 60, 80, 70, 6, 50],
			},
			{
				label: "Project 2",
				barThickness: 9,
				borderRadius: 25,
				fill: false,
				backgroundColor: "#BFDBFE",
				fillColor: "red",
				data: [80, 90, 100, 60, 80, 90, 95, 100, 85],
			},
			{
				label: "Project 3",
				barThickness: 9,
				borderRadius: 25,
				fill: false,
				backgroundColor: "#1D4ED8",
				data: [50, 60, 70, 60, 40, 70, 60, 50, 40],
			},
		],
	},
	options: {
		// responsive: true,
		// mantainAspectRatio: true,
		plugins: {
			tooltip: {
				padding: 7,
				backgroundColor: "#ffffff",
				displayColors: false,
				usePointStyle: true,
				caretSize: 5,
				caretPadding: 12,
				boxWidth: 10,
				titleColor: "#000000",
				bodyColor: "#000000",
				titleFontStyle: "bold",
				borderColor: "#d1d5db",
				borderWidth: 1,
				titleFont: "bold",
				callbacks: {
					labelPointStyle: function () {
						return {
							pointStyle: "circle",
							padding: 0,
						};
					},
					label: function (tooltipItem, data) {
						return "product 2";
					},
					title: function (tooltipItem, data) {
						return "$ 470";
					},
					body: function (tooltipItem, data) {
						return " ";
					},
				},
			},

			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				ticks: {
					callback: function (value, index, values) {
						return value + "%";
					},
					// forces step size to be 50 units
					color: "#171717",

					font: {
						size: 14,
						lineHeight: 2,
					},

					stepSize: 20,
				},
				grid: {
					display: false,
				},
			},
			x: {
				ticks: {
					color: "#171717",
					font: {
						size: 14,
						lineHeight: 2,
					},
				},
				grid: {
					display: false,
				},
			},
		},
		legend: {
			position: false,
		},
	},
});

function tableInteract(e) {
	if (e.checked == true) {
		e.parentElement.parentElement.parentElement.classList.add("bg-[#EFF6FF]");
		return;
	}
	e.parentElement.parentElement.parentElement.classList.remove("bg-[#EFF6FF]");
}

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

// Table checkbox
const ele = document.querySelectorAll(".check-func");
document.querySelector(".check-main").addEventListener("change", (e) => {
	if (e.target.checked == true) {
		ele.forEach((e) => {
			e.checked = true;
		});
		return;
	}
	ele.forEach((e) => {
		e.checked = false;
	});
});

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

//Interaction on Table

const allInter = document.querySelectorAll(".interactions");

allInter.forEach((e) => {
	if (!e.classList.contains("hidden")) {
		e.classList.add("hidden");
	}
});

function openTableMenu(element) {
	element.parentElement.children[0].classList.toggle("hidden");
}

function closeAll() {
	document.querySelectorAll(".dropdown").forEach((e) => {
		if (e.classList.contains("hidden")) {
			return;
		}
		e.classList.add("hidden");
	});
}

// Sub Nav Menus
const sub = document.querySelector(".sub-ecommerce");
function openSubEcommerce() {
	if (sub.classList.contains("h-0")) {
		sub.classList.remove("h-0");
		sub.classList.add("h-30");
		sub.classList.remove("opacity-0");
		sub.classList.remove("pt-[-20px]");
		sub.classList.add("pt-2");
		sub.classList.remove("pointer-events-none");
		sub.classList.remove("scale-y-0");
		sub.classList.add("scale-y-100");
		return;
	}
	sub.classList.add("pointer-events-none");
	sub.classList.remove("h-30");
	sub.classList.remove("pt-2");
	sub.classList.add("h-0");
	sub.classList.add("opacity-0");
	sub.classList.add("pt-[-20px]");
	sub.classList.remove("scale-y-100");
	sub.classList.add("scale-y-0");
}

const sub_catalogue = document.querySelector(".sub-catalogue");
function openSubCatalogue() {
	if (sub_catalogue.classList.contains("h-0")) {
		sub_catalogue.classList.remove("h-0");
		sub_catalogue.classList.add("h-30");
		sub_catalogue.classList.remove("opacity-0");
		sub_catalogue.classList.remove("pt-[-20px]");
		sub_catalogue.classList.add("pt-2");
		sub_catalogue.classList.remove("pointer-events-none");
		sub_catalogue.classList.remove("scale-y-0");
		sub_catalogue.classList.add("scale-y-100");

		return;
	}
	sub_catalogue.classList.remove("h-30");
	sub_catalogue.classList.remove("pt-2");
	sub_catalogue.classList.add("h-0");
	sub_catalogue.classList.add("opacity-0");
	sub_catalogue.classList.add("pt-[-20px]");
	sub_catalogue.classList.add("pointer-events-none");
	sub_catalogue.classList.remove("scale-y-100");
	sub_catalogue.classList.add("scale-y-0");
}

const sub_order = document.querySelector(".sub-order");
function openSubOrder() {
	if (sub_order.classList.contains("h-0")) {
		sub_order.classList.remove("h-0");
		sub_order.classList.add("h-30");
		sub_order.classList.remove("opacity-0");
		sub_order.classList.remove("pt-[-20px]");
		sub_order.classList.add("pt-2");
		sub_order.classList.remove("pointer-events-none");
		sub_order.classList.remove("scale-y-0");
		sub_order.classList.add("scale-y-100");
		return;
	}
	sub_order.classList.remove("h-30");
	sub_order.classList.remove("pt-2");
	sub_order.classList.add("h-0");
	sub_order.classList.add("opacity-0");
	sub_order.classList.add("pt-[-20px]");
	sub_order.classList.add("pointer-events-none");
	sub_order.classList.remove("scale-y-100");
	sub_order.classList.add("scale-y-0");
}

const sub_overview = document.querySelector(".sub-overview");
function openSubOverview() {
	if (sub_overview.classList.contains("h-0")) {
		sub_overview.classList.remove("h-0");
		sub_overview.classList.add("h-30");
		sub_overview.classList.remove("opacity-0");
		sub_overview.classList.remove("pt-[-20px]");
		sub_overview.classList.add("pt-2");
		sub_overview.classList.remove("pointer-events-none");
		sub_overview.classList.remove("scale-y-0");
		sub_overview.classList.add("scale-y-100");
		return;
	}
	sub_overview.classList.remove("h-30");
	sub_overview.classList.remove("pt-2");
	sub_overview.classList.add("h-0");
	sub_overview.classList.add("opacity-0");
	sub_overview.classList.add("pt-[-20px]");
	sub_overview.classList.add("pointer-events-none");
	sub_overview.classList.remove("scale-y-100");
	sub_overview.classList.add("scale-y-0");
}

const sub_customers = document.querySelector(".sub-customers");
function openSubCustomer() {
	if (sub_customers.classList.contains("h-0")) {
		sub_customers.classList.remove("h-0");
		sub_customers.classList.add("h-30");
		sub_customers.classList.remove("opacity-0");
		sub_customers.classList.remove("pt-[-20px]");
		sub_customers.classList.add("pt-2");
		sub_customers.classList.remove("pointer-events-none");
		sub_customers.classList.remove("scale-y-0");
		sub_customers.classList.add("scale-y-100");
		return;
	}
	sub_customers.classList.remove("h-30");
	sub_customers.classList.remove("pt-2");
	sub_customers.classList.add("h-0");
	sub_customers.classList.add("opacity-0");
	sub_customers.classList.add("pt-[-20px]");
	sub_customers.classList.add("pointer-events-none");
	sub_customers.classList.remove("scale-y-100");
	sub_customers.classList.add("scale-y-0");
}

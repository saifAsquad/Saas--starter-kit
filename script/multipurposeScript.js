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

// Chart Script
var ctx = document.getElementById("myChart").getContext("2d");
var gradient5 = ctx.createLinearGradient(0, 0, 0, 450);

gradient5.addColorStop(0.1, "rgba(29, 78, 216, 0.24)");
gradient5.addColorStop(0.5, "rgba(29, 78, 216, 0) ");
var myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: ["", "", "", "", ""],
		datasets: [
			{
				data: [20, 70, 45, 30, 50, 60, 70, 80, 90, 100],
				backgroundColor: gradient5,
				borderColor: "#1D4ED8",
				borderWidth: 2,
				pointBackgroundColor: "#ffffff",
				fill: true,
				strokeColor: "#6366F1",
				tension: 0.5,
			},
		],
	},
	options: {
		plugins: {
			tooltip: {
				mode: "index",
				intersect: false,
				titleFont: {
					size: 8,
				},
				bodyFont: {
					size: 12,
				},

				displayColors: false,

				padding: 10,
				backgroundColor: "#ffffff",
				pointRadius: "0",
				caretSize: 0,
				caretPadding: 12,
				borderColor: "#d1d5db",
				borderWidth: 0.5,
				boxWidth: 12,
				titleFont: 20,
				bodyFont: 16,
				bodyColor: "#1E293B",
				titleColor: "#475569",
				callbacks: {
					title: function (tooltipItem, data) {
						return "july";
					},
					label: function (tooltipItem, data) {
						return "$ 2500";
					},
					labelPointStyle: function () {
						return {
							pointStyle: "circle",
							pointRadius: "0",
							padding: 0,
						};
					},
				},
			},
			legend: {
				display: false,
				align: "end",
				labels: {
					display: false,
					usePointStyle: true,
					pointStyle: "circle",
				},
			},
		},
		elements: {
			point: {
				radius: 4,
			},
		},
		generateLabels: {
			hidden: true,
		},
		legend: {
			display: false,
		},
		scales: {
			y: {
				grid: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false,
				},
				beginAtZero: true,
				ticks: {
					display: false,
				},
			},
			x: {
				grid: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false,
				},
			},
		},
	},
});

document.getElementById("members-button").addEventListener("click", () => {
	document.getElementById("members-interaction").classList.toggle("hidden");
});

document.getElementById("focused").focus();

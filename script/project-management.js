console.log("project-management.js");
function getDoughnut() {
	const labels = ["red", "blue", "yellow", "green", "purple", "orange"];

	//Cofig Bloack
	var config = {
		type: "doughnut",
		data: {
			datasets: [
				{
					borderWidth: 0,
					data: [76, 24],
					backgroundColor: ["#16A34A", "rgba(243, 244, 246, 1)"],
					borderRadius: 50,
				},
				{
					weight: 0.6,
				},
				{
					borderWidth: 0,
					data: [50, 50],
					backgroundColor: ["#1D4ED8", "rgba(243, 244, 246, 1)"],
					borderRadius: 50,
				},
				{
					weight: 0.6,
				},
				{
					borderWidth: 0,
					data: [70, 30],
					backgroundColor: ["#EAB308", "rgba(243, 244, 246, 1)"],
					borderRadius: 50,
				},
				{
					weight: 0.6,
				},
				{
					borderWidth: 0,
					data: [33, 67],
					backgroundColor: ["#DC2626", "rgba(243, 244, 246, 1)"],
					borderRadius: 50,

					label: "Doughnut 2",
				},
			],
		},
		options: {
			responsive: true,
			legend: {
				display: false,
			},

			animation: {
				animateScale: true,
				animateRotate: true,
			},
		},
	};

	// Render Block
	const myChart = new Chart(document.getElementById("myChartDough"), config);
}

getDoughnut();

// Main chart
function mainChart() {
	//Data block
	const data = {
		labels: [
			"        Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
		],
		datasets: [
			{
				display: false,
				label: "online",
				data: [60, 58, 68, 68, 68, 68, 68, 68, 60, 50],
				fill: true,
				borderColor: "#1D4ED8",
				backgroundColor: "#EFF6FF",
				borderCapStyle: "round",
				tension: 0.3,
				pointRadius: 0,
				pointHoverRadius: 8,
				pointHitRadius: 10,
				pointBackgroundColor: "#ffffff",
			},
			{
				label: "sales",
				data: [80, 78, 88, 88, 84, 88, 86, 80, 80, 70],
				fill: true,
				borderColor: "#DC2626",
				backgroundColor: "#FEE2E2",
				tension: 0.4,
				pointRadius: 0,
				pointHoverRadius: 8,
				pointHitRadius: 10,
				pointBackgroundColor: "#ffffff",
			},
		],
	};
	//options
	const options = {
		mantainAspectRatio: true,
		responsive: true,
		plugins: {
			tooltip: {
				mode: "index",
				intersect: false,
				titleFont: {
					size: 16,
				},
				bodyFont: {
					size: 20,
				},

				displayColors: false,

				padding: 8,
				backgroundColor: "#ffffff",
				pointRadius: "0",
				caretSize: 0,
				caretPadding: 12,
				borderColor: "#d1d5db",
				borderWidth: 0.5,
				boxWidth: 40,
				titleColor: "#475569",
				bodyColor: "#475569",
				callbacks: {
					title: function (tooltipItem, data) {
						return "23 July";
					},
					label: function (tooltipItem, data) {
						if (tooltipItem.datasetIndex === 0) {
							return "49k Users";
						}
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
					padding: 30,
				},
			},
		},
		legend: {
			display: true,
		},
		layout: {
			padding: 20,
		},
		// bezierCurve: true,
		scales: {
			y: {
				suggestedMin: 50,
				suggestedMax: 100,
				grid: {
					display: false,
				},
				beginAtZero: true,
				min: 50,
				max: 100,
				ticks: {
					// forces step size to be 50 units
					color: "#64748B",
					stepSize: 10,
					font: {
						size: 14,
					},
					callback: function (value, index, values) {
						if (index === 0) {
							return value;
						} else {
							return value;
						}
					},
				},
			},
			x: {
				grid: {
					display: false,
				},
				ticks: {
					font: {
						size: 14,
					},
					color: "#64748B",
				},
			},
		},
		elements: {
			point: {
				radius: 0,
			},
		},
	};

	// Config Block
	const config = {
		type: "line",
		data: data,
		options: options,
	};

	// Render Block
	const myChart = new Chart(document.getElementById("myChart"), config);
}

mainChart();
// Main chart

function showNewMemberInteraction() {
	document.getElementById("newMemberInteraction").classList.toggle("hidden");
}

const els = document.querySelector(".actions-intereaction");
function handleActionsInteraction(el) {
	// els.array.forEach((element) => {
	//   element.children[1].style.display = "none";
	// });
	el.children[1].classList.toggle("hidden");
	// document.getElementsByClassName("actions-intereaction").style.display =
	//   "flex";
	// const showDiv =
	// console.log(showDiv);
	// showDiv.classList.toggle("hidden");
}

const target = document.getElementById("add-target");
function toggleAddTarget() {
	target.classList.toggle("hidden");
}

function moreoptionmodal(el) {
	el.parentElement.children[1].classList.toggle("hidden");
}

const user = document.getElementById("add-user");
function toggleAddUser() {
	user.classList.toggle("hidden");
}

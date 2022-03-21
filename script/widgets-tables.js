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

function tableInteract(e) {
	if (e.checked == true) {
		e.parentElement.parentElement.parentElement.classList.add("bg-[#EFF6FF]");
		return;
	}
	e.parentElement.parentElement.parentElement.classList.remove("bg-[#EFF6FF]");
}

// Table interaction
function showDiv() {
	const val = document.getElementById("handleClick").style.display;
	console.log(val);
	if (val === "block") {
		document.getElementById("handleClick").style.display = "none";
		return;
	}
	document.getElementById("handleClick").style.display = "block";
}

function toggleDropdown2(e) {
	document.getElementById("handleClick2").classList.toggle("hidden");
}

function show() {
	document.getElementById("plans").style.display = "block";
}
function hide() {
	document.getElementById("plans").style.display = "none";
}

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
// const ele = document.querySelectorAll(".check-func");
// document.querySelector(".check-main").addEventListener("change", (e) => {
// 	if (e.target.checked == true) {
// 		ele.forEach((e) => {
// 			e.checked = true;
// 		});
// 		return;
// 	}
// 	ele.forEach((e) => {
// 		e.checked = false;
// 	});
// });

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
function showFilterDropDown(id) {
  document.getElementById(id).classList.toggle("hidden");
  document.querySelectorAll(`#${id} a`).forEach((a) => {
    a.style.cursor = "pointer";
    a.style.display = "block";

    a.addEventListener("click", function (e) {
      console.log(e.target.textContent);
      document.getElementById("setfilterText1").innerText =
        e.target.textContent;
      document.getElementById(id).classList.add("hidden");
    });
  });
}
const tableMore = document.querySelectorAll(".tableSvgInt");
tableMore.forEach((e) => {
  e.addEventListener("click", (y) => {
    e.classList.toggle("hidden");
    e.classList.toggle("active");
  });
});
const tooltip = document.querySelectorAll(".tooltipDiv");
tooltip.forEach((e) => {
  e.addEventListener("click", (y) => {
    e.classList.toggle("active");
    e.classList.toggle("hidden");
  });
});
function openTableMenuD(element) {
  tooltip.forEach((e) => {
    // console.log(element.parentElement.children[1]);
    if (
      e.classList.contains("active") &&
      e != element.parentElement.children[0]
    ) {
      e.classList.toggle("hidden");
      e.classList.toggle("active");
    }
  });

  element.parentElement.children[0].classList.toggle("hidden");
  element.parentElement.children[0].classList.toggle("active");
  // console.log(element.parentElement.children[0]);
}
function tableInteraction(el) {
  tableMore.forEach((e) => {
    if (e.classList.contains("active")) {
      e.classList.toggle("active");
      e.classList.toggle("hidden");
    }
  });
  el.parentElement.children[1].classList.toggle("hidden");
  el.parentElement.children[1].classList.toggle("active");
}
function showFilteroptionInteraction() {
  console.log("in status");
  document.getElementById("dropdownDivider").classList.toggle("hidden");
}
document.querySelector("body").addEventListener("click", () => {
  tooltip.forEach((e) => {
    // console.log(element.parentElement.children[1]);
    if (e.classList.contains("active")) {
      e.classList.add("hidden");
      e.classList.remove("active");
    }
  });
});
setTimeout(() => {
  document.getElementById("focused").focus();
}, 1000);

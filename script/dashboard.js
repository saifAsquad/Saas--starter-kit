function showFilterOptions(c) {
  const val = document.getElementById(c);
  console.log(val);
  val.classList.toggle("hidden");
  val.classList.toggle("z-10");
}
const user = document.getElementById("add-user");
const tooltip = document.querySelectorAll(".tooltipDiv");
function toggleAddUser() {
  user.classList.toggle("hidden");
}
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
document.querySelector("body").addEventListener("click", () => {
  tooltip.forEach((e) => {
    // console.log(element.parentElement.children[1]);
    if (e.classList.contains("active")) {
      e.classList.add("hidden");
      e.classList.remove("active");
    }
  });
});

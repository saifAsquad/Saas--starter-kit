document
  .querySelector("body")
  .addEventListener("click", activeComponentChecker);
function activeComponentChecker(el) {
  const el1 = document.querySelector(".catalogueDropDown");
  const tableMore = document.querySelectorAll(".tableSvgInt");
  if (el1 && el1 != el) {
    if (!el1.classList.contains("hidden")) {
      el1.classList.toggle("hidden");
      el1.classList.toggle("z-10");
      console.log("function call el1");
    }
  }
  tableMore.forEach((e) => {
    if (e.classList.contains("active") && e != el) {
      e.classList.toggle("hidden");
      e.classList.toggle("active");
    }
  });
}
const tableMore = document.querySelectorAll(".tableSvgInt");
tableMore.forEach((e) => {
  e.addEventListener("click", (y) => {
    e.classList.toggle("hidden");
    e.classList.toggle("active");
  });
});
function tableInteraction(el) {
  tableMore.forEach((e) => {
    if (e.classList.contains("active") && e != el.parentElement.children[1]) {
      e.classList.toggle("active");
      e.classList.toggle("hidden");
    }
  });
  activeComponentChecker(el);
  el.parentElement.children[1].classList.toggle("hidden");
  el.parentElement.children[1].classList.toggle("active");
}
//Status Drop down
function showDropDownMenu(el) {
  activeComponentChecker(el);
  el.parentElement.children[1].classList.toggle("hidden");
}

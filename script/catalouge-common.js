document
  .querySelector("body")
  .addEventListener("click", activeComponentChecker);
function activeComponentChecker(el) {
  const el1 = document.querySelector(".catalogueDropDown");

  if (el1 && el1 != el) {
    if (!el1.classList.contains("hidden")) {
      el1.classList.toggle("hidden");
      el1.classList.toggle("z-10");
      console.log("function call el1");
    }
  }
}

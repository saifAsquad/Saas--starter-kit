const productCheckBox = document.querySelector(".allCheckProduct");
const tick = document.querySelector(".allSvgTick");
const allCheckBox = document.querySelectorAll("tbody tr td input");
const allCheckBoxArr = [...allCheckBox];
const allSvgTicks = document.querySelectorAll(".svgTick");
const classestoToggle = [
  "appearance-none",
  "bg-blue-700",
  "border-transparent",
  "active",
  "accent-white",
  "accent-blue-700",
];
window.onload = function () {
  console.log(productCheckBox.checked);
  if (productCheckBox.checked) {
    console.log("in first time");
    classestoToggle.forEach((c) => {
      productCheckBox.classList.toggle(c);
    });
    tick.classList.toggle("-z-10");
  }
  allCheckBox.forEach((e) => {
    if (e.checked) {
      classestoToggle.forEach((c) => {
        e.classList.toggle(c);
      });
      e.nextElementSibling.classList.toggle("-z-10");
      e.nextElementSibling.classList.toggle("active");
      e.parentElement.parentElement.className = "bg-blue-50";
    }
  });
};

productCheckBox.addEventListener("click", (e) => {
  const isChecked = e.target.checked;
  tick.classList.add("active");
  if (isChecked) {
    classestoToggle.forEach((c) => {
      productCheckBox.classList.toggle(c);
    });
    allCheckBox.forEach((ac) => {
      if (!ac.checked) {
        classestoToggle.forEach((c) => {
          ac.classList.toggle(c);
        });
        ac.checked = true;
        ac.parentElement.parentElement.className = "bg-blue-50";
        ac.nextElementSibling.classList.toggle("-z-10");
        tick.classList.remove("-z-10");
      }
    });
  } else {
    allCheckBox.forEach((ac) => {
      ac.checked = false;
      ac.parentElement.parentElement.className = "";
    });
  }
});
tick.addEventListener("click", (t) => {
  tick.classList.toggle("-z-10");
  tick.classList.toggle("active");
  productCheckBox.checked = false;
  classestoToggle.forEach((c) => {
    productCheckBox.classList.toggle(c);
  });
  allSvgTicks.forEach((at) => {
    classestoToggle.forEach((c) => {
      at.previousElementSibling.classList.toggle(c);
    });
    at.classList.toggle("-z-10");

    at.previousElementSibling.checked = false;

    at.parentElement.parentElement.className = "";
  });
});
allCheckBox.forEach((e) => {
  e.addEventListener("click", (y) => {
    classestoToggle.forEach((c) => {
      y.target.classList.toggle(c);
    });

    if (y.target.checked) {
      e.nextElementSibling.classList.toggle("-z-10");
      e.nextElementSibling.classList.toggle("active");
      e.parentElement.parentElement.className = "bg-blue-50";
      console.log(e.parentElement.parentElement);
    } else {
      e.parentElement.parentElement.className = "";
    }
    if (allCheckBoxArr.every((aca) => aca.checked)) {
      console.log("in every");
      classestoToggle.forEach((c) => {
        productCheckBox.classList.toggle(c);
      });
      tick.classList.toggle("-z-10");
    }
  });
});
allSvgTicks.forEach((e) => {
  e.addEventListener("click", (y) => {
    classestoToggle.forEach((c) => {
      e.previousElementSibling.classList.toggle(c);
    });
    e.classList.toggle("-z-10");
    e.classList.toggle("active");

    e.previousElementSibling.checked = false;

    e.parentElement.parentElement.className = "";
    if (!allCheckBoxArr.every((aca) => aca.checked)) {
      console.log("in every");
      productCheckBox.checked = false;
      classestoToggle.forEach((c) => {
        productCheckBox.classList.toggle(c);
      });
      tick.classList.toggle("-z-10");
    }
  });
});



const allCheckBoxStat = document.querySelectorAll(".checkStat");
const allSvgTicksStat = document.querySelectorAll('.svgTickStats');
const classestoToggle = ['bg-blue-700', 'border-transparent', 'active', 'accent-white', 'accent-blue-700'];

allCheckBoxStat.forEach(e => {
    e.addEventListener("click", (y) => {
        classestoToggle.forEach(c => {
            y.target.classList.toggle(c);

        })

        if (y.target.checked) {
            e.nextElementSibling.classList.toggle("-z-10");
            e.nextElementSibling.classList.toggle("active");

        } else {



        }
    })
})
allSvgTicksStat.forEach(e => {
    e.addEventListener('click', y => {
        classestoToggle.forEach(c => {
            e.previousElementSibling.classList.toggle(c);
        })
        e.classList.toggle('-z-10');
        e.classList.toggle('active');
        e.previousElementSibling.checked = false;
    })
})

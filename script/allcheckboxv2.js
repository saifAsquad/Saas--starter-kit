const productCheckBox = document.querySelector(".allCheckProduct");
const tick = document.querySelector(".allSvgTick");
const allCheckBox = document.querySelectorAll("tbody tr td input");
const allSvgTicks = document.querySelectorAll('.svgTick');
const classestoToggle = ['bg-blue-700', 'border-transparent', 'active', 'accent-white', 'accent-blue-700'];

productCheckBox.addEventListener("click", (e) => {
    const isChecked = e.target.checked;
    tick.classList.add('active');
    if (isChecked) {
        classestoToggle.forEach(c => {
            productCheckBox.classList.toggle(c);

        })
        allCheckBox.forEach((ac) => {
            if (!ac.checked && !ac.classList.contains('checkStat')) {
                classestoToggle.forEach(c => {
                    ac.classList.toggle(c);


                })
                ac.checked = true;

                ac.nextElementSibling.classList.toggle("-z-10");
                tick.classList.remove('-z-10');
            }

        });
    } else {
        allCheckBox.forEach((ac) => {
            ac.checked = false

        }
        );
    }
});
tick.addEventListener('click', t => {
    tick.classList.toggle('-z-10');
    tick.classList.toggle('active')
    productCheckBox.checked = false;
    classestoToggle.forEach(c => {
        productCheckBox.classList.toggle(c);
    })
    allSvgTicks.forEach(at => {

        classestoToggle.forEach(c => {
            at.previousElementSibling.classList.toggle(c);
        })
        at.classList.toggle('-z-10');

        at.previousElementSibling.checked = false;

    })

})
allCheckBox.forEach(e => {
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
allSvgTicks.forEach(e => {
    e.addEventListener('click', y => {
        classestoToggle.forEach(c => {
            e.previousElementSibling.classList.toggle(c);
        })
        e.classList.toggle('-z-10');
        e.classList.toggle('active');

        e.previousElementSibling.checked = false;


        if (tick.classList.contains('active')) {

            tick.classList.add('-z-10');
            tick.classList.remove('active')
            productCheckBox.checked = false;
            classestoToggle.forEach(c => {

                productCheckBox.classList.toggle(c);

            })
        }

    })
})
// const temperatureSlider = document.getElementById('temperatureSlider');

// const oxygeneSlider = document.getElementById('oxygeneSlider');

// const pressureSlider = document.getElementById('pressureSlider');
// const gravitySlider = document.getElementById('gravitySlider');

//poprawne odpowiedzi do zagadek

const displayValue = (display, slider) => {
    const sliderPosition = (slider.value - slider.min) / (slider.max - slider.min);
    display.textContent = slider.value;
    display.style.transform = `translateX(${sliderPosition*(slider.offsetWidth - display.offsetWidth)}px)`
}

const sliders = document.querySelectorAll('input');
const puzzleTrigger = (element) => {
    if (element.value !== element.dataset.correct) {
        return;
    }

    let result = true;
    for (let i = 0; i < sliders.length; i++) {
        let currentSlider = sliders[i];

        if (currentSlider.value !== currentSlider.dataset.correct) {
            result = false;
            break;
        }
    }

    if (result === true) {
        const button = document.querySelector('button');
        const heart = document.querySelector('.heart');
        console.log("zadanie wykonane");
        // alert("Zadanie wykonane");
        // button.style.display = "block";
        heart.classList.add('solved');

    }
}

sliders.forEach(currentSlider => {
    currentSlider.addEventListener('change', function (e) {
        puzzleTrigger(e.target);
    });
    currentSlider.addEventListener('input', function () {
        displayValue(currentSlider.previousElementSibling, currentSlider);
    });
})
const temperatureSlider = document.getElementById('temperatureSlider');
const temperatureDisplay = document.getElementById('temperatureDisplay');
const oxygeneSlider = document.getElementById('oxygeneSlider');
const oxygeneDisplay = document.getElementById('oxygeneDisplay');
const pressureSlider = document.getElementById('pressureSlider');
const pressureDisplay = document.getElementById('pressureDisplay');
const gravitySlider = document.getElementById('gravitySlider');
const gravityDisplay = document.getElementById('gravityDisplay');
//poprawne odpowiedzi do zagadek
const correctTemperatureValue = 9;
const correctOxygeneValue = 24;
const correctPressureValue = 1002;
const correctGravityValue = 0.8;
//ręczne ustawienie elementu po odpaleniu strony
// const placeElements = () => {
//     temperatureDisplay.style.transform = `translateX(${(temperatureSlider.value - temperatureSlider.min)/(temperatureSlider.max-temperatureSlider.min)*(temperatureSlider.offsetWidth - temperatureDisplay.offsetWidth)}px)`;
// }
// setTimeout(placeElements, 0);
// Nieudana próba napisania jednej funckji dla wszystkich suwaków 
// const displayValue = (m, s) => {
//     const sliderPosition = (s.value - s.min) / (s.max - s.min);
//     console.log(sliderPosition);
//     m.textContent = s.value;
//     m.style.transform = `translateX(${sliderPosition*(s.offsetWidth - m.offsetWidth)}px)`
// }
// suwakTemperatury.addEventListener('input', displayValue(valueTemperatury, suwakTemperatury))
const displayTemperatureValue = (temperatureDisplayP, temperatureSliderP) => {
    const marker = temperatureDisplayP;
    const slider = temperatureSliderP;
    const sliderPosition = (slider.value - slider.min) / (slider.max - slider.min);
    console.log(sliderPosition);
    marker.textContent = slider.value;
    marker.style.transform = `translateX(${sliderPosition*(slider.offsetWidth - marker.offsetWidth)}px)`
}

temperatureSlider.addEventListener('input', function () {
    displayTemperatureValue(temperatureDisplay, temperatureSlider);
});

oxygeneSlider.addEventListener('input', function () {
    displayTemperatureValue(oxygeneDisplay, oxygeneSlider);
});

pressureSlider.addEventListener('input', function () {
    displayTemperatureValue(pressureDisplay, pressureSlider);
});

gravitySlider.addEventListener('input', function () {
    displayTemperatureValue(gravityDisplay, gravitySlider);
});

// oxygeneSlider.addEventListener('input', displayTlenValue);
// gravitySlider.addEventListener('input', displayGrawitacjaValue);
//Pobranie wszystkich suwaków
const suwaki = document.querySelectorAll('input');
//Funkcja wyświetlająca button kończący grę
const puzzleTrigger = () => {
    const button = document.querySelector('button');
    if ((temperatureSlider.value == correctTemperatureValue) && (oxygeneSlider.value == correctOxygeneValue) && (pressureSlider.value == correctPressureValue) && (gravitySlider.value == correctGravityValue)) {
        console.log("zadanie wykonane");
        button.style.display = "block";
    }
}
//Nasłuchiwanie wszystkich suwaków 
suwaki.forEach(suwak => {
    suwak.addEventListener('change', puzzleTrigger)
})
// suwaki.forEach addEventListener('change', () => {
//     if ((suwakTemperatury.value == correctTemperatureValue) && (suwakTlenu.value == correctOxygeneValue) && (suwakCisnienia.value == correctPressureValue) && (suwakGrawitacji.value == correctGravityValue)) {
//         console.log("zadanie wykonane");
//     }
// })
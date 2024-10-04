import "./styles.css";

const celsiusInput = document.querySelector(".celsius");
const fahrenheitInput = document.querySelector(".fahrenheit");
const temperatureInputs = document.querySelector(".input-container");

temperatureInputs.addEventListener("input", (event) => {
    if (event.target.className === "celsius") {
        // console.log(event.target.value)
        const fahrenheit = celsiusToFahrenheit(event.target.value);
        fahrenheitInput.value = fahrenheit;
    }

    if (event.target.className === "fahrenheit") {
        const celsius = fahrenheitToCelsius(event.target.value);
        celsiusInput.value = celsius;
    }
});

const celsiusToFahrenheit = (celsius) => {
    const celsiusNumber = Number(celsius);
    if (!celsiusNumber) {
        return 0;
    }
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
};

const fahrenheitToCelsius = (fahrenheit) => {
    const fahrenheitNumber = Number(fahrenheit);
    if (!fahrenheitNumber && fahrenheitNumber !== 0) {
        return 0;
    }
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius;
};

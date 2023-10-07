
function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const conversionDirection = document.getElementById("conversionDirection").value;
    let result = "";

    if (isNaN(temperatureInput)) {
        result = "Please enter a valid temperature!";
        document.getElementById("result").textContent = result;
        document.getElementById("result").style.color = "red";
    } else {
        switch (conversionDirection) {
            case "celsiusToFahrenheit":
                const celsiusToFahrenheit = (temperatureInput * 9/5) + 32;
                result = `${temperatureInput}°C = ${celsiusToFahrenheit.toFixed(2)}°F`;
                break;
            case "fahrenheitToCelsius":
                const fahrenheitToCelsius = (temperatureInput - 32) * 5/9;
                result = `${temperatureInput}°F = ${fahrenheitToCelsius.toFixed(2)}°C`;
                break;
            case "kelvinToCelsius":
                const kelvinToCelsius = temperatureInput - 273.15;
                result = `${temperatureInput}K = ${kelvinToCelsius.toFixed(2)}°C`;
                break;
            case "celsiusToKelvin":
                const celsiusToKelvin = temperatureInput + 273.15;
                result = `${temperatureInput}°C = ${celsiusToKelvin.toFixed(2)}K`;
                break;
            case "kelvinToFahrenheit":
                const kelvinToFahrenheit = (temperatureInput - 273.15) * 9/5 + 32;
                result = `${temperatureInput}K = ${kelvinToFahrenheit.toFixed(2)}°F`;
                break;
            case "fahrenheitToKelvin":
                const fahrenheitToKelvin = (temperatureInput - 32) * 5/9 + 273.15;
                result = `${temperatureInput}°F = ${fahrenheitToKelvin.toFixed(2)}K`;
                break;
            default:
            result = "Invalid conversion selection";
        }
        document.getElementById("result").textContent = result;
        document.getElementById("result").style.color = "black";
    }
    
}
document.getElementById("temperatureInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        convertTemperature();
    }
});     
function clearInput() {
    document.getElementById("temperatureInput").value = "";
    document.getElementById("result").textContent = "";
}
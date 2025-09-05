function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (city === "") {
    document.getElementById("result").textContent = "Please enter a city!";
  } else {
    // Demo ke liye fake weather
    document.getElementById("result").textContent = 
      `Weather in ${city}: Sunny, 30°C ☀️`;
  }
}

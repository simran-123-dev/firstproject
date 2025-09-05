async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (city === "") {
    document.getElementById("result").textContent = "Please enter a city!";
  } else {
    const apiKey = "6181a134f6a89be4b452906e3540c91b"; // tumhari API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      const temp = data.main.temp;
      const condition = data.weather[0].description;

      document.getElementById("result").textContent =
        `Weather in ${city}: ${condition}, ${temp}°C 🌤️`;
    } catch (error) {
      document.getElementById("result").textContent =
        "❌ Invalid city name or API issue";
    }
  }
}

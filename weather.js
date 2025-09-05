async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "6181a134f6a89be4b452906e3540c91b"; // tumhara API key

  if (city === "") {
    document.getElementById("result").textContent = "Please enter a city!";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    if (data.cod === 200) {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      document.getElementById("result").textContent =
        `Weather in ${city}: ${desc}, ${temp}°C`;
    } else {
      document.getElementById("result").textContent = "City not found!";
    }
  } catch (error) {
    document.getElementById("result").textContent = "Error fetching data!";
  }
}

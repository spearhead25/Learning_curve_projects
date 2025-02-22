const apiKey = "ce28486bb805eb638ebf9ec7d42f76be"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

async function fetchWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        alert("City not found! Try again.");
    } else {
        const data = await response.json();

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temperature").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector(".details").innerHTML = `
            <div>Humidity: ${data.main.humidity}%</div>
            <div>Wind: ${data.wind.speed} km/h</div>
        `;

        
        const weatherCondition = data.weather[0].main.toLowerCase();
        updateWeatherIcon(weatherCondition);
    }
}


function updateWeatherIcon(condition) {
    const iconMap = {
        clear: "clear.png",
        clouds: "clouds.png",
        rain: "rain.png",
        drizzle: "drizzle.png",
        thunderstorm: "thunderstorm.png",
        snow: "snow.png",
        mist: "mist.png"
    };

    weatherIcon.src = `images/${iconMap[condition] || "default.png"}`;
}


searchButton.addEventListener("click", () => {
    fetchWeather(searchBox.value);
});


searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        fetchWeather(searchBox.value);
    }
});
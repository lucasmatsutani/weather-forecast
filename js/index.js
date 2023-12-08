const cityInput = document.querySelector(".input-city");
const searchBtn = document.querySelector(".search-btn");
const cityName = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");
const weatherStatus = document.querySelector(".weather-status");
const humidity = document.querySelector(".humidity");
const weatherImage = document.querySelector(".weather-img")

const key = "b058c282ffca6969ffceb0781850f2f6"

async function searchWeather(city) {
    const url = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`);
    const response = await url.json();
    showData(response);
};

const showData = (response) => {
    console.log(response);
    cityName.innerText = `Tempo em ${response.name}`;
    temperature.innerText = `${Math.floor(response.main.temp)}°C`;
    weatherStatus.innerHTML = `${response.weather[0].description}`;
    humidity.innerHTML = `Umidade: ${response.main.humidity}%`;
    weatherImage.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`
}

const handleSearch = () => {
    if (cityInput.value.trim() === ""){
        return;
    };
    const city = cityInput.value
    searchWeather(city);
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleSearch();
});

cityInput.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        e.preventDefault();
        handleSearch();
    }
})


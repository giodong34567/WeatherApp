const fetchAPI = (url) => {
    const result = fetch(url)
        .then(respone => respone.json())
        .then(data => {
            return data;
        });
    return result;
}

const apiHead = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiFoot = "&appid=a8059a3f9fc411cadf0b4d2ff2eaf39d";
var listWeatherPicture = ["./images/clear.png", "./images/clouds.png", "./images/drizzle.png", "./images/mist.png", "./images/rain.png", "./images/snow.png"];
var weather = document.querySelector(".weather");
var btn = document.querySelector(".btn");
var temp = document.getElementById("temp");
var cityName = document.querySelector(".cityname");
var humidityPercent = document.querySelector(".humidity-percent");
var windSpeed = document.querySelector(".wind-speed-number");
var weatherImg = document.getElementsByClassName("weather-img");
btn.addEventListener("click", () => {
    var text = document.getElementById("text").value;
    var api = apiHead + text + apiFoot;
    cityName.innerHTML = text;
    fetchAPI(api)
        .then(data => {
            // xu li nhiet do
            var typeOfWeather = data.weather[0].main;
            console.log(typeOfWeather);
            switch (typeOfWeather) {
                case "Clear":
                    weatherImg[0].setAttribute("src", `./images/clear.png`);
                    break;
                case "Clouds":
                    weatherImg[0].setAttribute("src", `./images/clouds.png`);
                    break;
                case "Drizzle":
                    weatherImg[0].setAttribute("src", `./images/drizzle.png`);
                    break;
                case "Mist":
                    weatherImg[0].setAttribute("src", `./images/mist.png`);
                    break;
                case "Rain":
                    weatherImg[0].setAttribute("src", `./images/rain.png`);
                    break;
                case "Snow":
                    weatherImg[0].setAttribute("src", `./images/snow.png`);
                    break;
            }
            var tempInCelcius = data.main.temp - 273;
            var roundedTemp = tempInCelcius.toFixed(2) + "°C";
            temp.innerHTML = roundedTemp;

            // xu li ten
            cityName.innerHTML = text;

            // xu li do am
            var humidity = data.main.humidity;
            humidityPercent.innerHTML = humidity + "%";

            // xu li toc do gio
            var speed = data.wind.speed + "km/h";
            windSpeed.innerHTML = speed;
        })
})


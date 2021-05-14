// handle to form
const cityForm = document.querySelector(".change-location");
// Handle to card
const card = document.querySelector(".card");
// Handle to details
const details = document.querySelector(".details");
// Update city function
const updateCity = async (city) => {
    console.log(city);
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);
    // return {cityDetails: cityDetails, weather: weather};
    // Below is the object short hand notation
    return {cityDetails, weather};
};
const updateUI = (data) => {
    const CityDets = data.cityDetails;
    const weather = data.weather;
    details.innerHTML = 
      `<h5>${CityDets.EnglishName}</h5>
      <div>${weather.WeatherText}</div>
      <div class="w3-padding-large">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
      </div>`;

    // w3-hide
    if (card.classList.contains("w3-hide")) {
        card.classList.remove("w3-hide");
    }

};
cityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city)
      .then((data) => {updateUI(data);})
      .catch();
});
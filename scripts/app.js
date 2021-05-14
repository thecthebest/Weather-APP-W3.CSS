// handle to form
const cityForm = document.querySelector(".change-location");
// Handle to card
const card = document.querySelector(".card");
// Handle for weather information
const details = document.querySelector(".details");
// Handle to the image
const time = document.querySelector("img.time");
// Handle to Icon image
const icon = document.querySelector(".icon");
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
    // Destructure properties of the object
    // const CityDets = data.cityDetails;
    // const weather = data.weather;
    const { cityDetails, weather } = data;
    // Update html
    details.innerHTML = 
      `<h5>${cityDetails.EnglishName}</h5>
      <div>${weather.WeatherText}</div>
      <div class="w3-padding-large">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
      </div>`;

      // Update the night / Day & icon images
      const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
      icon.firstElementChild.src = iconSrc;
      // Change image according to day /night
      let timeSrc = null;
      if (weather.IsDayTime) {
          timeSrc = "img/day.svg";
      }
      else {
          timeSrc = "img/night.svg";
      }
      time.src = timeSrc;
    // Remove w3-hide class
    if (card.classList.contains("w3-hide")) {
        card.classList.remove("w3-hide");
    }

};
// Actively listening to user submission
cityForm.addEventListener("submit", (e) => {
    // Prevent Browser default action when submitting
    e.preventDefault();
    // Handle to form input field & remove spaces
    const city = cityForm.city.value.trim();
    // Form clear
    cityForm.reset();
    // Update city and get weather infromation
    updateCity(city)
      .then((data) => {updateUI(data);})
      .catch();
    // Set local storage
    localStorage.setItem("city", city);
});
// handle to form
const cityForm = document.querySelector(".change-location");
// Handle to card
const card = document.querySelector(".card");
// Update city function
const updateCity = async (city) => {
    console.log(city);
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);
    // return {cityDetails: cityDetails, weather: weather};
    // Below is the object short hand notation
    return {cityDetails, weather};
};
cityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city)
      .then((data) => {console.log(data)})
      .catch();
});
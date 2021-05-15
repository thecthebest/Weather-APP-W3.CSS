class Forecast {
    constructor() {
        this.key = "3vMt2nSqDWipJWKDE58xBDIlAVq8ou03";
        this.cityBaseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
        this.cityWeatherUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    }
    async updateCity (city) {
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
        // return {cityDetails: cityDetails, weather: weather};
        // Below is the object short hand notation
        return {cityDetails, weather};
    }
    async getCity (city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityBaseUrl + query);
        const data = await response.json();
        return data[0];
    }
    async getWeather (id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.cityWeatherUrl + query);
        const data = await response.json();
        return data[0];
    }  
}



// const getCity = async (city) => {
//     const query = `?apikey=${key}&q=${city}`;
//     const response = await fetch(base + query);
//     const data = await response.json();
//     return data[0];
// }

// const getWeather = async (id) => {
//     const query = `${id}?apikey=${key}`;
//     const response = await fetch(base + query);
//     const data = await response.json();
//     return data[0];
// }

// getCity("zurich")
//   .then((rs) => {
//       console.log("The city id rece", rs);
//       return getWeather(rs.Key);
//   }).then(info => console.log(info))
//   .catch();



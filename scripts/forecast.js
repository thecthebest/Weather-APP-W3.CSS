const key = "3vMt2nSqDWipJWKDE58xBDIlAVq8ou03";


const getCity = async (city) => {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

const getWeather = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

// getCity("zurich")
//   .then((rs) => {
//       console.log("The city id rece", rs);
//       return getWeather(rs.Key);
//   }).then(info => console.log(info))
//   .catch();



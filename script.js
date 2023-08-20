
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '11ef4961a8mshff52d86335f309ap1a32f9jsn7c085e183876',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const getWeather = (city) => {
        cityName.innerHTML = city
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)

        .then(response => response.json())
        .then((result) => {
            console.log(result);

            // cloud_pct.innerHTML = result.cloud_pct
            temp.innerHTML = result.temp
            temp2.innerHTML = result.temp
            feels_like.innerHTML = result.feels_like
            humidity.innerHTML = result.humidity
            humidity2.innerHTML = result.humidity
            min_temp.innerHTML = result.min_temp
            max_temp.innerHTML = result.max_temp
            wind_speed.innerHTML = result.wind_speed
            wind_speed2.innerHTML = result.wind_speed
            wind_degrees.innerHTML = result.wind_degrees
            sunrise.innerHTML = result.sunrise
            sunset.innerHTML = result.sunset
        })
        .catch(err = console.error(err));
    }
    
    
    submit.addEventListener("click", (e)=>{
        e.preventDefault()     //this will not reload the page
        const cityInput = city.value.trim(); // Remove leading and trailing whitespace

        if (cityInput === "") {
            alert("Enter a city first");
        } else {
            getWeather(cityInput);
        }
    })
    

    getWeather("Delhi")


// //Weather update for specific cities
// const getLondonWeather = () => {
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)

//     .then(response => response.json())
//     .then((result) => {
//         console.log(result);

//         // cloud_pct.innerHTML = result.cloud_pct
//         londonTemp.innerHTML = result.temp
//         londonHumidity.innerHTML = result.humidity
//         londonMinTemp.innerHTML = result.min_temp
//         londonMaxTemp.innerHTML = result.max_temp
//         londonSunrise.innerHTML = result.sunrise
//         londonSunset.innerHTML = result.sunset
//     })
//     .catch(err = console.error(err));
//   };

//   getLondonWeather();

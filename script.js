function getWeather(){
    const apiKey = '541ff514fce04ac02977528535484cd6';
    const city = document.getElementById('city').value;

    if (!city){
        alert('Please enter city');
        return;
    }
    const currentWeartherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeartherUrl)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error =>{
        console.error('Error fetching current weather data:', error);
        alert('Error fetching current weather data. Please try again.');
    });

    fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        displayHourlyForecast(data.list);
    })
    .catch(error =>{
        console.error('Error fetching hourly forecast data:', error);
        alert('Error fetching current weather data. Please try again.');
    });
}   

function displayWeather(data){
    const tempDivInfo = document.getElementById('temp-dix');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === '404'){
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    }else{
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    
        const temperatureHTML=`
            <p>${temperature}°C</p>
        `;
        const weatherHTML = `
            <p>${cityName}</p>
            <p>${description}</p>
        `
        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;
        showImage();

    }

}
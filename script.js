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
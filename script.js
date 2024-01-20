function getWeather(){
    const apiKey = '541ff514fce04ac02977528535484cd6';
    const city = document.getElementById('city').value;

    if (!city){
        alert('Please enter city');
        return;
    }
    const currentWeartherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
}   
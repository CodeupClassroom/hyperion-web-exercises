// All of the code used to make AJAX requests and manipulate data
$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHERMAP_KEY,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    console.log(data);
    // Assign the pretty Date String to #weather-date
    var date = new Date( data.dt * 1000);
    $('#weather-date').html(date.toDateString());
    console.log(date.toDateString());

    // Assign the High/Low temperature to
    let lowTemp = data.main.temp_min;
    let highTemp = data.main.temp_max;
    $('#high-low-temp').html(lowTemp + '°F / ' + highTemp + '°F');
    // feels_like: 91.36
    console.log("Feels Like: " + data.main.feels_like);
    // humidity: 49
    console.log("Humidity: " + data.main.humidity);
    // pressure: 1014
    // temp: 91.67​​
    // temp_max: 93​
    // temp_min: 91
});

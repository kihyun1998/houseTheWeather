function background(status){
    switch(status){
        case "Clear":
            return "rgb(193, 232, 255)";
            break;
        case "Clouds":
            return "rgb(157, 160, 163)";
            break;
        case "Rain":
            return "rgb(30, 163, 240)";
            break;
        case "Snow":
            return "rgb(235, 248, 255)";
            break;
        case "Thunderstorm":
            return "rgb(216, 168, 238)";
            break;
        case "Drizzle":
            return "rgb(187, 247, 202)";
            break;
        case "Atmosphere":
            return "rgb(131, 154, 173)";
            break;
    }
}

const API_KEY ="5711ab3e8bcded1dd3e2a22ecce09053"
function onGeoYes(position){
    const lat= position.coords.latitude;
    const lon= position.coords.longitude;

    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(urlWeather)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const weatherName = data.weather[0].main
        weather.innerText = `${data.weather[0].description} / ${data.main.temp}°C`;
        
        const color = background(weatherName)
        document.body.style.backgroundColor=`${color}`;

        //const url2= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${API_KEY}&units=metric`
    })
    const urlLoc = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    fetch(urlLoc)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather span:last-child");
        city.innerText = `Your location is ${data.locality}`;
    })

}
function onGeoNo(){
    alert("I'm sorry! We can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoYes,onGeoNo);

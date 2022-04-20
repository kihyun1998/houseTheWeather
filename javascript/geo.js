//날씨에 따른 배경색 지정 함수
function background(status){
    switch(status){
        case "Clear":
            return "rgb(193, 232, 255)";
            break;
        case "Clouds":
            return "rgb(216, 218, 219)";
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

//좌표값 입력으로 작동되는 함수
function onGeoYes(position){
    const lat= position.coords.latitude;
    const lon= position.coords.longitude;

    //날씨 API
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(urlWeather)
    .then(response => response.json())
    .then(data => {
        //온도지정
        const temp = document.querySelector(".temp");
        const weatherName = data.weather[0].main
        temp.innerText = `${data.main.temp}°C`;
        
        //날씨 설명
        const weather = document.querySelector(".weather");
        weather.innerText = `${data.weather[0].description}`

        //날씨에 따른 배경색 지정
        const color = background(weatherName)
        document.body.style.backgroundColor=`${color}`;

        //const url2= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${API_KEY}&units=metric`
    })

    //지역이름 API
    const urlLoc = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    fetch(urlLoc)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector(".location");
        city.innerText = `${data.locality}`;
    })
}
//좌표값 오류 시 보내는 메시지
function onGeoNo(){
    alert("I'm sorry! We can't find you.");
}

//현재 위치 좌표값 가져오기
navigator.geolocation.getCurrentPosition(onGeoYes,onGeoNo);

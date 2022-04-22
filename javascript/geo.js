//날씨에 따른 배경색 지정 함수
function background(status){
    switch(status){
        case "Clear":
            return "rgb(193, 232, 255)";
            break;
        case "Clouds":
            return "rgb(203, 219, 230)";
            break;
        case "Rain":
            return "rgb(181, 188, 192)";
            break;
        case "Snow":
            return "rgb(255, 255, 255)";
            break;
        case "Thunderstorm":
            return "rgb(207, 187, 212)";
            break;
        case "Drizzle":
            return "rgb(187, 247, 202)";
            break;
        case "Mist":
            return "rgb(190, 209, 216)";
            break;
        case "Smoke":
            return "rgb(246, 219, 185)";
            break;
        case "Haze":
            return "rgb(208, 197, 169)";
            break;
        case "Dust":
            return "rgb(228, 200, 129)";
            break;
        case "Fog":
            return "rgb(190, 209, 216)";
            break;
        case "Sand":
            return "rgb(242, 185, 79)";
            break;
        case "Ash":
            return "rgb(254, 93, 93)";
            break;
        case "Squall":
            return "rgb(165, 147, 181)";
            break;
        case "Tornado":
            return "rgb(150, 174, 187)";
            break;
        
    }
}

//UTC > KST 변환
function timeSet(time){
    const date = new Date(time*1000);
    let day = date.getHours()+":"+date.getMinutes();
    return day;
}

//날씨별 Icon
function getIcon(weather){
    if(weather=="Mist" || weather=="Fog"){
        return "./image/fog.png";
    }
    else if(weather=="Clear"){
        return "./image/sunny.png";
    }
    else if(weather=="Clouds"){
        return "./image/cloudy.png";
    }
    else if(weather=="Rain"){
        return "./image/rainy.png";
    }
    else if(weather=="Snow"){
        return "./image/snow.png";
    }
    else if(weather=="Drizzle"){
        return "./image/drop.png";
    }

}



const API_KEY ="5711ab3e8bcded1dd3e2a22ecce09053"

//좌표값 입력으로 작동되는 함수
function onGeoYes(position){
    const lat= position.coords.latitude;
    const lon= position.coords.longitude;

    //날씨 API
    const urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(urlWeather)
    .then(response => response.json())
    .then(data => {
        //온도지정
        const temp = document.querySelector(".temp");
        temp.innerText = `${data.current.temp}°C`;
        
        //날씨 설명
        const weather = document.querySelector(".weatherName");
        weather.innerText = `${data.current.weather[0].main}`

        //날씨에 따른 배경색 지정
        const weatherName = data.current.weather[0].main
        const color = background(weatherName)
        document.body.style.backgroundColor=`${color}`;

        //일출
        const rise=document.querySelector(".rise");
        let dayRise = timeSet(data.current.sunrise);
        rise.innerText = `${dayRise}`;

        //일몰
        const set=document.querySelector(".set");
        let daySet = timeSet(data.current.sunset);
        set.innerText = `${daySet}`

        //날씨 아이콘
        const weatherIcon = document.querySelector(".weatherIcon");
        icon = getIcon(weatherName);
        weatherIcon.src = `${icon}`;
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

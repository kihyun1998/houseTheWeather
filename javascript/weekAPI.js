function apiWeek(lat,lon){

    const API_KEY ="5711ab3e8bcded1dd3e2a22ecce09053";
    //날씨 API
    const urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(urlWeather)
    .then(response => response.json())
    .then(data => {
        //온도지정
        const temp = document.getElementsByClassName("temp")[0];
        temp.innerText = `${data.current.temp}°`;

        //날씨 설명
        const weatherName = data.hourly[0].weather[0].main;
        const weather = document.getElementsByClassName("weatherName")[0];
        weather.innerText = weatherName;

        //날씨에 따른 배경색 지정
        const color = background(weatherName);

        document.getElementById("FRAME").style.backgroundColor=`${color}`;

        //날씨 아이콘
        const weatherIcon = document.getElementsByClassName('weatherIcon')[0];
        let icon = getIcon(weatherName);
        weatherIcon.src = icon;

        //날씨 최대
        const maxTemp = document.getElementsByClassName('maxT')[0]
        maxTemp.innerText = `${data.daily[0].temp.max}° / `;

        //날씨 최소
        const minTemp = document.getElementsByClassName('minT')[0]
        minTemp.innerText = `\u00A0${data.daily[0].temp.min}°`;

        //체감온도
        const feelsLike = document.getElementsByClassName('fl')[0]
        feelsLike.innerText = `feels like ${data.current.feels_like}°`

        ///////////////////////////////Head area//////////////////////////////////////

        //일출
        const rise=document.getElementsByClassName("rise")[0];
        let dayRise = timeSet(data.current.sunrise);
        rise.innerText = dayRise;

        //일몰
        const set=document.getElementsByClassName("set")[0];
        let daySet = timeSet(data.current.sunset);
        set.innerText = daySet;

        //배경 이미지 선택
        let time = timeCheck();
        let riseTime = sunTime(data.current.sunrise);
        let setTime = sunTime(data.current.sunset);
        let a = bImg(time, riseTime, setTime);
        document.body.style.backgroundImage = `${a}`;


        //자외선
        const uv=document.getElementsByClassName('uv')[0];
        let uvState = uvLevel(data.daily[0].uvi);
        uv.innerText = uvState;

        //풍속
        const wind=document.getElementsByClassName('wind')[0];
        wind.innerText = `${data.hourly[0].wind_speed} m/s`;

        //습도
        const humidity=document.getElementsByClassName('humidity')[0];
        humidity.innerText = `${data.hourly[0].humidity} %`;
    })
}
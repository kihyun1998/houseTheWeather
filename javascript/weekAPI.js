function apiWeek(lat,lon,i){

    const API_KEY ="5711ab3e8bcded1dd3e2a22ecce09053";
    //날씨 API
    const urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(urlWeather)
    .then(response => response.json())
    .then(data => {
        //온도지정
        const maxTemp = document.getElementsByClassName("max-temp")[0];
        maxTemp.innerText = `${data.daily[i].temp.max}°`;

        const minTemp = document.getElementsByClassName("min-temp")[0];
        minTemp.innerText = `${data.daily[i].temp.min}°`;

        //날씨 설명
        const weatherName = data.daily[i].weather[0].main;
        const weatherDes = data.daily[i].weather[0].description;
        const weather = document.getElementsByClassName("weatherName")[0];
        weather.innerText = weatherDes;

        //날씨에 따른 배경색 지정
        const colorB = background(weatherName);
        document.getElementById("FRAME").style.backgroundColor=`${colorB}`;

        //날씨에 따른 프레임 색 지정
        const colorF = frameColor(weatherName);
        let frameI = document.getElementsByClassName("FrameI");
        for(var j=0;frameI.length>j;j++){
            frameI[j].style.backgroundColor=`${colorF}`;
        };

        //날씨 아이콘
        const weatherIcon = document.getElementsByClassName('weatherIcon')[0];
        let icon = getIcon(weatherName);
        weatherIcon.src = icon;

        ///////////////////////////////Head area//////////////////////////////////////

        //일출
        const rise=document.getElementsByClassName("rise")[0];
        let dayRise = timeSet(data.daily[i].sunrise);
        rise.innerText = dayRise;

        //일몰
        const set=document.getElementsByClassName("set")[0];
        let daySet = timeSet(data.daily[i].sunset);
        set.innerText = daySet;

        //배경 이미지 선택
        let time = timeCheck();
        let riseTime = sunTime(data.daily[i].sunrise);
        let setTime = sunTime(data.daily[i].sunset);
        let a = bImg(time, riseTime, setTime);
        document.body.style.backgroundImage = `${a}`;


        //자외선
        const uv=document.getElementsByClassName('uv')[0];
        let uvState = uvLevel(data.daily[i].uvi);
        uv.innerText = uvState;

        //풍속
        const wind=document.getElementsByClassName('wind')[0];
        wind.innerText = `${data.daily[i].wind_speed} m/s`;

        //습도
        const humidity=document.getElementsByClassName('humidity')[0];
        humidity.innerText = `${data.daily[i].humidity} %`;

        //강우량
        const rainF = document.getElementById("rainF");
        let rainV = data.daily[i].rain
        if(rainV == undefined){
            rainV = 0;
        }
        rainF.innerText = `${rainV} mm`;

        //강설량
        const snowF = document.getElementById("snowF");
        let snowV = data.daily[i].snow;
        if(snowV == undefined){
            snowV = 0;
        }
        snowF.innerText = `${snowV} mm`;
    })
}
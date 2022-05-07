function apispRpt(lat,lon){
    const API_KEY ="5711ab3e8bcded1dd3e2a22ecce09053";
    //날씨 API
    const urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(urlWeather)
    .then(response => response.json())
    .then(data => {
        //온도지정
        const temp = document.getElementsByClassName("temp")[0];
        temp.innerText = `${data.current.temp}°C`;

        //날씨 설명
        const weather = document.getElementsByClassName("weatherName")[0];
        weather.innerText = `${data.current.weather[0].main}`;

        //날씨에 따른 배경색 지정
        const weatherName = data.current.weather[0].main;
        const color = background(weatherName);
        document.body.style.backgroundColor=`${color}`;

        //날씨 아이콘
        const weatherIcon = document.getElementsByClassName('weatherIcon')[0];
        let icon = getIcon(weatherName);
        weatherIcon.src = icon;

        /////////////////////////////////////////////////////////////////////
    
    })
}

function bImg(time,rise,set){
    if(time>=set+1000 || time<rise){
        return 'url(./image/night.jpg)';
    }else if(time>=rise && time<rise+1200){
        return 'url(./image/sunrise.jpg)';
    }else if(time>=rise+1200 && time<set){
        return 'url(./image/defualt.jpg)';
    }else if(time>=set && time<set+1000){
        return 'url(./image/sunset.jpg)';
    }
}

function apiBack(lat,lon){
    const API_KEY ="5711ab3e8bcded1dd3e2a22ecce09053";
    //날씨 API
    const urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(urlWeather)
    .then(response => response.json())
    .then(data => {
        //배경 이미지 선택
        let time = timeCheck();
        let riseTime = sunTime(data.current.sunrise);
        let setTime = sunTime(data.current.sunset);
        let a = bImg(time, riseTime, setTime);
        document.body.style.backgroundImage = `${a}`;
    });
}

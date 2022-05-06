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

//UTC > KST 변환(날짜)
function timeSet(time){
    const date = new Date(time*1000);
    let day = date.getHours()+":"+date.getMinutes();
    return day;
}
//UTC > KST 변환(시간)
function timeChange(time){
    let date = new Date(time*1000);
    let hour = date.getHours();

    return hour+":00";
}

//날씨별 Icon
function getIcon(weather){
    if(weather=="Clear"){
        return "./image/sunny.png";
    }
    else if(weather=="Clouds"||weather=="Mist" || weather=="Fog"){
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

//자외선 함수
function uvLevel(uv){
    if(uv<=2){
        return `Row [${uv}]`;
    }
    else if(uv>=3 && uv<=5 ){
        return `Moderate [${uv}]`;
    }
    else if(uv>=6 && uv<=7){
        return `High [${uv}]`;
    }
    else if(uv>=8 && uv<=10){
        return `Very High [${uv}]`;
    }
    else if(uv>=11){
        return `danger [${uv}]`;
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
        const temp = document.getElementsByClassName("temp")[0];
        temp.innerText = `${data.current.temp}°C`;
        
        //날씨 설명
        const weather = document.getElementsByClassName("weatherName")[0];
        weather.innerText = `${data.current.weather[0].main}`;

        //날씨에 따른 배경색 지정
        const weatherName = data.current.weather[0].main;
        const color = background(weatherName);
        document.body.style.backgroundColor=`${color}`;

        //일출
        const rise=document.getElementsByClassName("rise")[0];
        let dayRise = timeSet(data.current.sunrise);
        rise.innerText = dayRise;

        //일몰
        const set=document.getElementsByClassName("set")[0];
        let daySet = timeSet(data.current.sunset);
        set.innerText = daySet;

        //자외선
        const uv=document.getElementsByClassName('uv')[0];
        let uvState = uvLevel(data.current.uvi);
        uv.innerText = uvState;

        //풍속
        const wind=document.getElementsByClassName('wind')[0];
        wind.innerText = `${data.current.wind_speed} m/s`;

        //습도
        const humidity=document.getElementsByClassName('humidity')[0];
        humidity.innerText = `${data.current.humidity} %`;

        //날씨 아이콘
        const weatherIcon = document.getElementsByClassName("weatherIcon")[0];
        icon = getIcon(weatherName);
        weatherIcon.src = `${icon}`;

         //시간 배열 선언
        timeHour = [];
        for(var i=0; i<25; i++){
            timeHour[i]=timeChange(data.hourly[i].dt);
        }
        chartTemp=[];
        for(var i=0; i<25; i++){
            chartTemp[i]=data.hourly[i].temp;
        }

    //chart JS 영역
    let chartArea = document.getElementById('myChart').getContext('2d');
    // 차트를 생성한다. 
    let myChart = new Chart(chartArea, {
        // ①차트의 종류(String)
        type: 'line',
        // ②차트의 데이터(Object)
        data: {
            // ③x축에 들어갈 이름들(Array)
            labels: ['current',`${timeHour[0]}`,`${timeHour[1]}`,`${timeHour[2]}`,`${timeHour[3]}`,`${timeHour[4]}`,`${timeHour[5]}`,`${timeHour[6]}`,`${timeHour[7]}`,`${timeHour[8]}`,`${timeHour[9]}`
            ,`${timeHour[10]}`,`${timeHour[11]}`,`${timeHour[12]}`,`${timeHour[13]}`,`${timeHour[14]}`,`${timeHour[15]}`,`${timeHour[16]}`,`${timeHour[17]}`,`${timeHour[18]}`,`${timeHour[19]}`
            ,`${timeHour[20]}`,`${timeHour[21]}`,`${timeHour[22]}`,`${timeHour[23]}`,'future'],
            // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
            datasets: [{
                // ⑤dataset의 이름(String)
                // ⑥dataset값(Array)
                data: [`${chartTemp[0]}`,`${chartTemp[0]}`,`${chartTemp[1]}`,`${chartTemp[2]}`,`${chartTemp[3]}`,`${chartTemp[4]}`,`${chartTemp[5]}`,`${chartTemp[6]}`,`${chartTemp[7]}`,`${chartTemp[8]}`,`${chartTemp[9]}`
                ,`${chartTemp[10]}`,`${chartTemp[11]}`,`${chartTemp[12]}`,`${chartTemp[13]}`,`${chartTemp[14]}`,`${chartTemp[15]}`,`${chartTemp[16]}`,`${chartTemp[17]}`,`${chartTemp[18]}`,`${chartTemp[19]}`
                ,`${chartTemp[20]}`,`${chartTemp[21]}`,`${chartTemp[22]}`,`${chartTemp[23]}`,`${chartTemp[23]}`],
                // ⑧dataset의 선 색(rgba값을 String으로 표현)
                borderColor: '#C4B0E3',
                // ⑨dataset의 선 두께(Number)
                borderWidth: 3,
                //값 표현
                datalabels:{
                    color:'rgb(85, 81, 81)',
                    font:{size:20,weight:'bold'},
                }
            }]
        },
        //chartDataLabels 플러그인
        plugins: [ChartDataLabels],
        // ⑩차트의 설정(Object)
        options: {
            responsive:false,
            plugins:{
                datalabels:{
                    align:'top',
                    formatter:function(value,context){
                        let idx=context.dataIndex;
                        if(idx==0 || idx==25){
                            return '';
                        }
                        return chartTemp[idx-1]+"°C";
                    }
                },
                legend: {
                    display:false
                }
            },
            scales:{
                xAxis: {
                    grid:{
                        display:false
                    }
                },
                yAxis: {
                    grid:{
                        display:false,
                    },
                    ticks:{
                        display:false,
                    },
                    max:data.daily[0].temp.max+10
                }
            }
        }
    });

    })

    //지역이름 API
    const urlLoc = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=ko`
    fetch(urlLoc)
    .then(response => response.json())
    .then(data => {
        const city = document.getElementsByClassName("location")[0];
        city.innerText = `${data.locality}`;
    })
}
//좌표값 오류 시 보내는 메시지
function onGeoNo(){
    alert("I'm sorry! We can't find you.");
}

//현재 위치 좌표값 가져오기
navigator.geolocation.getCurrentPosition(onGeoYes,onGeoNo);

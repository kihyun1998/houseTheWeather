function apiHome(lat,lon){

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
        const weatherName = data.current.weather[0].main;
        const weather = document.getElementsByClassName("weatherName")[0];
        weather.innerText = weatherName;

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

        //온도 chart JS 영역
        //차트 상 시간 배열 선언 및 값 입력
        timeHour = [];
        for(var i=0; i<25; i++){
            timeHour[i]=timeChange(data.hourly[i].dt);
        }
        //차트 상 온도 배열 선언 및 값 입력
        chartTemp=[];
        for(var i=0; i<25; i++){
            chartTemp[i]=data.hourly[i].temp;
        }

        //차트 지역 연동
        let tempChart = document.getElementById('myChart').getContext('2d');
        // 차트를 생성한다. 
        let myChart = new Chart(tempChart, {
            // line 차트 선언
            type: 'line',
            // 차트의 데이터
            data: {
                // 차트 x축 값 (시간)
                labels: ['current',`${timeHour[0]}`,`${timeHour[1]}`,`${timeHour[2]}`,`${timeHour[3]}`,`${timeHour[4]}`,`${timeHour[5]}`,`${timeHour[6]}`,`${timeHour[7]}`,`${timeHour[8]}`,`${timeHour[9]}`
                ,`${timeHour[10]}`,`${timeHour[11]}`,`${timeHour[12]}`,`${timeHour[13]}`,`${timeHour[14]}`,`${timeHour[15]}`,`${timeHour[16]}`,`${timeHour[17]}`,`${timeHour[18]}`,`${timeHour[19]}`
                ,`${timeHour[20]}`,`${timeHour[21]}`,`${timeHour[22]}`,`${timeHour[23]}`,'future'],
                // 차트 내에 표시될 데이터들
                datasets: [{
                    //label 이름
                    label:'temp',
                    // y축 값 (온도)
                    data: [`${chartTemp[0]}`,`${chartTemp[0]}`,`${chartTemp[1]}`,`${chartTemp[2]}`,`${chartTemp[3]}`,`${chartTemp[4]}`,`${chartTemp[5]}`,`${chartTemp[6]}`,`${chartTemp[7]}`,`${chartTemp[8]}`,`${chartTemp[9]}`
                    ,`${chartTemp[10]}`,`${chartTemp[11]}`,`${chartTemp[12]}`,`${chartTemp[13]}`,`${chartTemp[14]}`,`${chartTemp[15]}`,`${chartTemp[16]}`,`${chartTemp[17]}`,`${chartTemp[18]}`,`${chartTemp[19]}`
                    ,`${chartTemp[20]}`,`${chartTemp[21]}`,`${chartTemp[22]}`,`${chartTemp[23]}`,`${chartTemp[23]}`],
                    //line 색
                    borderColor: 'rgb(230, 111, 111)',
                    backgroundColor: 'rgb(230, 111, 111)',
                    //line 두깨
                    borderWidth: 3,
                    //값 표현
                    datalabels:{
                        color:'rgb(85, 81, 81)',
                        font:{size:18,weight:'bold'},
                    }
                }]
            },
            //chartDataLabels 플러그인
            plugins: [ChartDataLabels],
            // 차트 옵션
            options: {
                //차트 고정
                responsive:false,
                plugins:{
                    //차트 상 값 표시
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
                    // 라벨 위치
                    legend: {
                        position:'left'
                    }
                },
                scales:{
                    //x축 
                    xAxis: {
                        //눈금 제거
                        grid:{
                            display:false
                        }
                    },
                    //y축 
                    yAxis: {
                        //눈금 제거
                        grid:{
                            display:false,
                        },
                        ticks:{
                            display:false,
                        },
                        //y축 최대값 설정
                        max:data.daily[0].temp.max+5
                    }
                }
            }
        });
    })
}
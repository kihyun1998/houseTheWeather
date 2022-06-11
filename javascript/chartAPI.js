function apiGraph(lat,lon){

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
        maxTemp.innerText = ` ${data.daily[0].temp.max}°`;

        //날씨 최소
        const minTemp = document.getElementsByClassName('minT')[0]
        minTemp.innerText = ` ${data.daily[0].temp.min}°`;

        //체감온도
        const feelsLike = document.getElementsByClassName('fl')[0]
        feelsLike.innerText = `feels like ${data.current.feels_like}°`

        //배경 이미지 선택
        let time = timeCheck();
        let riseTime = sunTime(data.current.sunrise);
        let setTime = sunTime(data.current.sunset);
        let a = bImg(time, riseTime, setTime);
        document.body.style.backgroundImage = `${a}`;

        ///////////////////////////////Head area//////////////////////////////////////

        //온도 chart JS 영역
        //차트 상 시간 배열 선언 및 값 입력
        let timeHour = [];
        for(var i=0; i<25; i++){
            timeHour[i]=timeChange(data.hourly[i].dt);
        }
        timeHour.push('future');
        timeHour.unshift('current')
        //차트 상 온도 배열 선언 및 값 입력
        let chartTemp=[];
        for(var i=0; i<25; i++){
            chartTemp[i]=data.hourly[i].temp;
        }
        chartTemp.push(data.hourly[24].temp);
        chartTemp.unshift(data.hourly[0].temp)
        const maxTempVal = Math.max.apply(null,chartTemp);

        //차트 지역 연동
        let tempChart = document.getElementById('myChart').getContext('2d');
        // 차트를 생성한다. 
        let myChart = new Chart(tempChart, {
            // line 차트 선언
            type: 'line',
            // 차트의 데이터
            data: {
                // 차트 x축 값 (시간)
                labels: timeHour,
                // 차트 내에 표시될 데이터들
                datasets: [{
                    //label 이름
                    label:'temp',
                    // y축 값 (온도)
                    data: chartTemp,
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
                            if(idx==0 || idx==26){
                                return '';
                            }
                            return chartTemp[idx]+"°C";
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
                        max:maxTempVal+3
                    }
                }
            }
        });

        let timeWeek = [];
        for(var i=0; i<8; i++){
            timeWeek[i]=weekTime(data.daily[i].dt);
        }
        timeWeek.push('future');
        timeWeek.unshift('current')

        //차트 상 온도 배열 선언 및 값 입력
        let chartTempMax=[];
        for(var i=0; i<8; i++){
            chartTempMax[i]=data.daily[i].temp.max;
        }
        chartTempMax.push(data.daily[7].temp.max);
        chartTempMax.unshift(data.daily[0].temp.max);
        let chartTempMin=[];
        for(var i=0; i<8; i++){
            chartTempMin[i]=data.daily[i].temp.min;
        }
        chartTempMin.push(data.daily[7].temp.min);
        chartTempMin.unshift(data.daily[0].temp.min);
        const maxMax = Math.max.apply(null,chartTempMax);

        //차트 지역 연동
        let tempMaxMin = document.getElementById('myChart5').getContext('2d');
        // 차트를 생성한다. 
        let myChart5 = new Chart(tempMaxMin, {
            // line 차트 선언
            type: 'line',
            // 차트의 데이터
            data: {
                // 차트 x축 값 (시간)
                labels: timeWeek,
                // 차트 내에 표시될 데이터들
                datasets: [{
                    //label 이름
                    label:'max',
                    // y축 값 (온도)
                    data: chartTempMax,
                    //채우기
                    fill: 'end',
                    //line 색
                    borderColor: 'rgb(230, 111, 111)',
                    backgroundColor: 'rgba(228, 173, 173,0.4)',
                    //line 두깨
                    borderWidth: 3,
                    //값 표현
                    datalabels:{
                        color:'rgb(85, 81, 81)',
                        font:{size:18,weight:'bold'},
                        align:'top',
                        formatter:function(value,context){
                            let idx=context.dataIndex;
                            if(idx==0 || idx==9){
                                return '';
                            }
                            return chartTempMax[idx]+"°C";
                        }
                    },
                },{
                    //label 이름
                    label:'min',
                    // y축 값 (온도)
                    data: chartTempMin,
                    //채우기
                    fill: 'start',
                    //line 색
                    borderColor: 'rgb(40, 40, 250)',
                    backgroundColor: 'rgba(118, 118, 255,0.4)',
                    //line 두깨
                    borderWidth: 3,
                    //값 표현
                    datalabels:{
                        align:'top',
                        formatter:function(value,context){
                            let idx=context.dataIndex;
                            if(idx==0 || idx==9){
                                return '';
                            }
                            return chartTempMin[idx]+"°C";
                        },
                        color:'rgb(85, 81, 81)',
                        font:{size:18,weight:'bold'},
                    },
                }]
            },
            //chartDataLabels 플러그인
            plugins: [ChartDataLabels],
            // 차트 옵션
            options: {
                //차트 고정
                responsive:false,
                plugins:{
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
                        max:maxMax+3
                    }
                }
            }
        });

        //강우 chart JS 영역
        chartRain= new Array(25).fill(0);
        for(var i=0; i<26; i++){
            try{
                let rainVal = data.hourly[i].rain['1h'];
                insertRain(i,rainVal);
            } catch(e){
                
            }
        }
        chartRain.push(chartRain[24]);
        chartRain.unshift(chartRain[0]);


        //차트 지역 연동
        let rainChart = document.getElementById('myChart2').getContext('2d');
        // 차트를 생성한다. 
        let myChart2 = new Chart(rainChart, {
            // line 차트 선언
            type: 'line',
            // 차트의 데이터
            data: {
                // 차트 x축 값 (시간)
                labels: timeHour,
                // 차트 내에 표시될 데이터들
                datasets: [{
                    //label 이름
                    label:'rain',
                    // y축 값 (강수량)
                    data: chartRain,
                    //line 색
                    borderColor: 'rgb(83, 79, 79)',
                    backgroundColor: 'rgb(83, 79, 79)',
                    //line 두깨
                    borderWidth: 3,
                    //값 표현
                    datalabels:{
                        color:'rgb(85, 81, 81)',
                        font:{size:17,weight:'bold'},
                    },
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
                            if(idx==0 || idx==26){
                                return '';
                            }
                            return chartRain[idx]+"mm";
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
                    }
                }
            }
        });

        //강설 chart JS 영역
        chartSnow=new Array(25).fill(0);
        for(var i=0; i<26; i++){
            try{
                let snowVal = data.hourly[i].snow['1h'];
                insertSnow(i,snowVal);
            } catch(e){
                
            }
        }
        chartSnow.push(chartSnow[24]);
        chartSnow.unshift(chartSnow[0]);



        //차트 지역 연동
        let snowChart = document.getElementById('myChart3').getContext('2d');
        // 차트를 생성한다. 
        let myChart3 = new Chart(snowChart, {
            // line 차트 선언
            type: 'line',
            // 차트의 데이터
            data: {
                // 차트 x축 값 (시간)
                labels: timeHour,
                // 차트 내에 표시될 데이터들
                datasets: [{
                    //label 이름
                    label:'snow',
                    // y축 값 (강수량)
                    data: chartSnow,
                    //line 색
                    borderColor: 'rgb(0, 136, 255)',
                    backgroundColor: 'rgb(0, 136, 255)',
                    //line 두깨
                    borderWidth: 3,
                    //값 표현
                    datalabels:{
                        color:'rgb(85, 81, 81)',
                        font:{size:17,weight:'bold'},
                    },
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
                            if(idx==0 || idx==26){
                                return '';
                            }
                            return chartSnow[idx]+"mm";
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
                    }
                }
            }
        });

    })
}

function insertRain(i,v){
    chartRain[i] = v;
}
function insertSnow(i,v){
    chartSnow[i] = v;
}


function apiairChart(lat,lon){
    const API_KEY ="5711ab3e8bcded1dd3e2a22ecce09053";
    const urlAir = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(urlAir)
    .then(response => response.json())
    .then(data => {

        //차트 상 시간 배열 선언 및 값 입력
        let timeHour = [];
        for(var i=0; i<25; i++){
            timeHour[i]=timeChange(data.list[i].dt);
        }
        timeHour.push('future');
        timeHour.unshift('current')

        //강설 chart JS 영역
        let chartAirP=[];
        for(var i=0; i<25; i++){
            chartAirP[i]=data.list[i].components.pm10;
        }
        chartAirP.push(data.list[24].components.pm10);
        chartAirP.unshift(data.list[0].components.pm10);


        let chartAirUP=[];
        for(var i=0; i<25; i++){
            chartAirUP[i]=data.list[i].components.pm2_5;
        }
        chartAirUP.push(data.list[24].components.pm2_5);
        chartAirUP.unshift(data.list[0].components.pm2_5);


        const findMax = chartAirP.concat(chartAirUP);
        const maxV = Math.max.apply(null,findMax);
        
        //차트 지역 연동
        let airPChart = document.getElementById('myChart4').getContext('2d');
        // 차트를 생성한다. 
        let myChart4 = new Chart(airPChart, {
            // line 차트 선언
            type: 'line',
            // 차트의 데이터
            data: {
                // 차트 x축 값 (시간)
                labels: timeHour,
                // 차트 내에 표시될 데이터들
                datasets: [{
                    //label 이름
                    label:'fine dust',
                    // y축 값 (강수량)
                    data: chartAirP,
                    fill:'end',
                    //line 색
                    borderColor: 'rgb(255, 204, 62)',
                    backgroundColor: 'rgba(240, 214, 142,0.4)',
                    //line 두깨
                    borderWidth: 3,
                    //값 표현
                    datalabels:{
                        align:'top',
                        formatter:function(value,context){
                            let idx=context.dataIndex;
                            if(idx==0 || idx==26){
                                return '';
                            }
                            return chartAirP[idx]+"mm";
                        },
                        color:'rgb(85, 81, 81)',
                        font:{size:17,weight:'bold'},
                        fill:true,
                    },
                },
                {
                    //label 이름
                    label:'ultra fine dust',
                    // y축 값 (강수량)
                    data: chartAirUP,
                    fill:'start',
                    //line 색
                    borderColor: 'rgb(104, 255, 58)',
                    backgroundColor: 'rgba(181, 252, 159,0.4)',
                    //line 두깨
                    borderWidth: 3,
                    //값 표현
                    datalabels:{
                        align:'top',
                        formatter:function(value,context){
                            let idx=context.dataIndex;
                            if(idx==0 || idx==26){
                                return '';
                            }
                            return chartAirUP[idx]+"mm";
                        },
                        color:'rgb(85, 81, 81)',
                        font:{size:15,weight:'bold'},
                    },
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
                        max:maxV+2
                    }
                }
            }
        });
    })
}
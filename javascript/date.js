//header 날짜
function setDate(cName){
        //날짜 데이터 받아오기
        const now = new Date();
        const year = now.getFullYear();
        const mon = now.getMonth();
        const date = now.getDate();
        const day = now.getDay();
        //월 표시 데이터 가공
        let monEn;
        const monarr = new Array("Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec.");
        for(var i =0; i<monarr.length; i++){
            if(mon==i){
                monEn = monarr[i];
            }
        }
        //요일 표시 데이터 가공
        let dayEn;
        const dayarr = new Array("Sun.","Mon.","The.","Wed.","Thu.","Fri.","Sat.");
        for(var j=0; j<dayarr.length; j++){
            if(day==j){
                dayEn = dayarr[j]
            }
        }
    
        const date2 = document.getElementsByClassName(cName)[0];
        date2.innerText = `${dayEn} ${monEn} ${date} ${year}`;
}


//배경 사진을 위한 시간
function timeCheck(){
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    let newTime = hour*1000 + minutes;
    return newTime;
}
//UTC > KST 변환(날짜)
function timeSet(time){
    const date = new Date(time*1000);
    const day = date.getHours()+":"+date.getMinutes();
    return day;
}
//UTC > KST 변환(시간)
function timeChange(time){
    let date = new Date(time*1000);
    let hour = date.getHours();
    if(hour < 10){
        hour = '0'+hour
    }

    return hour+":00";
}

//차트에서 사용하는 시간
function weekTime(time){
    let date = new Date(time*1000);
    let mon = date.getMonth()+1;
    let day = date.getDate();
    if(mon < 10){
        mon = '0'+mon
    }
    if(day < 10){
        day = '0'+day
    }

    return `${mon}-${day}`;
}

//일출 일몰 시간값 출력
function sunTime(time){
    const date = new Date(time*1000);
    const hour = date.getHours();
    const minutes = date.getMinutes();

    let newTime = hour*1000 + minutes;
    return newTime;
}


//week 날짜
function setWeek(cName,i){
    //날짜 데이터 받아오기
    let now = new Date();
    now.setSeconds(now.getSeconds()+i);
    const year = now.getFullYear();
    const mon = now.getMonth();
    const date = now.getDate();
    const day = now.getDay();
    //월 표시 데이터 가공
    let monEn;
    const monarr = new Array("Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec.");
    for(var i =0; i<monarr.length; i++){
        if(mon==i){
            monEn = monarr[i];
        }
    }
    //요일 표시 데이터 가공
    let dayEn;
    const dayarr = new Array("Sun.","Mon.","The.","Wed.","Thu.","Fri.","Sat.");
    for(var j=0; j<dayarr.length; j++){
        if(day==j){
            dayEn = dayarr[j]
        }
    }

    const date2 = document.getElementsByClassName(cName)[0];
    date2.innerText = `${dayEn} ${monEn} ${date} ${year}`;
}
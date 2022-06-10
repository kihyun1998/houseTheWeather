function apiAir(lat,lon){
    const API_KEY ="5711ab3e8bcded1dd3e2a22ecce09053";
    const urlAir = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(urlAir)
    .then(response => response.json())
    .then(data => {
        //미세먼지
        const fDust = document.getElementsByClassName("fDust")[0];
        const fdIcon = document.getElementsByClassName("fdIcon")[0];
        const fdLevel = document.getElementsByClassName("fdLevel")[0];
        let fd = data.list[0].components.pm10
        let fdI = fDustImg(fd);
        let fdL = fDustLevel(fd);

        fDust.innerText = `${fd}μg/m3`;
        fdLevel.innerText = fdL;
        fdIcon.src= fdI;

        //초미세먼지
        const uFDust = document.getElementsByClassName("uFDust")[0];
        const ufdIcon = document.getElementsByClassName("ufdIcon")[0];
        const ufdLevel = document.getElementsByClassName("ufdLevel")[0];
        let ufd = data.list[0].components.pm2_5;
        let ufdI = ufDustImg(ufd);
        let ufdL = ufDustLevel(ufd);
        
        uFDust.innerText = `${ufd}μg/m3`;
        ufdLevel.innerText = ufdL;
        ufdIcon.src=ufdI;

        //오존
        const ozone = document.getElementsByClassName("ozone")[0];
        const ozIcon = document.getElementsByClassName("ozIcon")[0];
        const ozLevel = document.getElementsByClassName("ozLevel")[0];
        let oz=data.list[0].components.o3;
        let ozI = ozoneImg(oz);
        let ozL = ozoneLevel(oz);

        ozone.innerText = `${oz}μg/m3`;
        ozLevel.innerText = ozL;
        ozIcon.src=ozI;

    })
}
function fDustImg(fd){
    if(fd<=25){
        return "./image/good.png";
    }else if(fd <= 50){
        return "./image/fair.png";
    }else if(fd <= 90){
        return "./image/moderate.png";
    }else if(fd <=180){
        return "./image/poor.png";
    }else if(fd > 180){
        return "./image/veryPoor.png";
    }   
}
function ufDustImg(ufd){
    if(ufd<=15){
        return "./image/good.png";
    }else if(ufd <= 30){
        return "./image/fair.png";
    }else if(ufd <= 55){
        return "./image/moderate.png";
    }else if(ufd <=110){
        return "./image/poor.png";
    }else if(ufd > 110){
        return "./image/veryPoor.png";
    }   
}
function ozoneImg(oz){
    if(oz<=60){
        return "./image/good.png";
    }else if(oz <= 120){
        return "./image/fair.png";
    }else if(oz <= 180){
        return "./image/moderate.png";
    }else if(oz <= 240){
        return "./image/poor.png";
    }else if(oz > 240){
        return "./image/veryPoor.png";
    }   
}

function fDustLevel(fd){
    if(fd<=25){
        return "Good";
    }else if(fd <= 50){
        return "Fair";
    }else if(fd <= 90){
        return "Moderate";
    }else if(fd <=180){
        return "Poor";
    }else if(fd > 180){
        return "Very Poor";
    }   
}
function ufDustLevel(ufd){
    if(ufd<=15){
        return "Good";
    }else if(ufd <= 30){
        return "Fair";
    }else if(ufd <= 55){
        return "Moderate";
    }else if(ufd <=110){
        return "Poor";
    }else if(ufd > 110){
        return "Very Poor";
    }   
}
function ozoneLevel(oz){
    if(oz<=60){
        return "Good";
    }else if(oz <= 120){
        return "Fair";
    }else if(oz <= 180){
        return "Moderate";
    }else if(oz <= 240){
        return "Poor";
    }else if(oz > 240){
        return "Very Poor";
    }   
}



function onGeoYes(position){
    let lat= position.coords.latitude;
    let lon= position.coords.longitude;
    
    apiLoc(lat,lon);
    apispRpt(lat,lon);
}   
//좌표값 오류 시 보내는 메시지
function onGeoNo(){
    alert("I'm sorry! We can't find you.");
}

//현재 위치 좌표값 가져오기
navigator.geolocation.getCurrentPosition(onGeoYes,onGeoNo);

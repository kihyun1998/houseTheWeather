this.check = 0;

//GPS 허용 누르면
function onGeoYes(position){
    this.check=0;
    let lat= position.coords.latitude;
    let lon= position.coords.longitude;
    let checkLat = window.localStorage.getItem('temp-lat');
    let checkLon = window.localStorage.getItem('temp-lon');
    console.log(checkLat);
    
    window.localStorage.setItem('lat',lat)
    window.localStorage.setItem('lon',lon)

    //위치 변경 여부 확인
    if(lat != checkLat || lat != checkLon){
        //위치 변경 시 temp lat, lon값 초기화 후 진행
        let latT = window.localStorage.getItem('lat');
        let lonT = window.localStorage.getItem('lon');

        window.localStorage.setItem('temp-lat',latT);
        window.localStorage.setItem('temp-lon',lonT);
        click_btn();
        this.check = 1;
    }else{
        //그대로 진행
        click_btn();
        this.check = 1;       
    }
}   
//GPS 차단 누르면
function onGeoNo(){
    alert("I'm sorry! We can't find you.");
}
function getGeo(){
    //현재 위치 좌표값 가져오기
    navigator.geolocation.getCurrentPosition(onGeoYes,onGeoNo);
}

function insertGeo(){

}



document.getElementById('btn-cu').addEventListener('click', getGeo);
document.getElementById('btn-an').addEventListener('click', insertGeo);
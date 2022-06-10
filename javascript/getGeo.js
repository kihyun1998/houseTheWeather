//GPS 허용 누르면
function onGeoYes(position){
    let lat= position.coords.latitude;
    let lon= position.coords.longitude;
    
    window.localStorage.setItem('lat',lat)
    window.localStorage.setItem('lon',lon)

    click_btn();
}   
//GPS 차단 누르면
function onGeoNo(){
    alert("I'm sorry! We can't find you.");
}
function getGeo(){
    //현재 위치 좌표값 가져오기
    navigator.geolocation.getCurrentPosition(onGeoYes,onGeoNo);
}


//click here!
document.getElementById('btn-cu').addEventListener('click', getGeo);

//go map!
document.getElementById('btn-an').addEventListener('click',
            function(){
                location.href='map.html';
            });
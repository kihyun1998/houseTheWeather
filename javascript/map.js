let msg = document.getElementById('coord-msg');
let coord = document.getElementById('coord-val');
msg.innerText = 'Please set the coordiates';

let lat = window.localStorage.getItem('lat');
let lon = window.localStorage.getItem('lon');

let container = document.getElementById("map");
let options = {
    center: new kakao.maps.LatLng(lat, lon),
    level: 3
}
let map = new kakao.maps.Map(container,options);

// 지도를 클릭한 위치에 표출할 마커입니다
let marker = new kakao.maps.Marker({ 
    // 지도 중심좌표에 마커를 생성합니다 
    position: map.getCenter() 
}); 
// 지도에 마커를 표시합니다
marker.setMap(map);

// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
    // 클릭한 위도, 경도 정보를 가져옵니다 
    let latlng = mouseEvent.latLng; 
    
    // 마커 위치를 클릭한 위치로 옮깁니다
    marker.setPosition(latlng);
    msg.innerText = "The coordinate settings are complete.";
    
    let latit = latlng.getLat();
    let longi = latlng.getLng()

    let lati = latit.toFixed(7);
    let long = longi.toFixed(7);
    window.localStorage.setItem('lat',lati)
    window.localStorage.setItem('lon',long)
    apiLoc(lati,long);
    coord.innerText = `lat : ${lati} / lon : ${long}`;
    
});

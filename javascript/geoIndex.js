function click_btn(){
    let lat = window.localStorage.getItem('lat');
    let lon = window.localStorage.getItem('lon');
    apiLoc(lat,lon);
    apiBack(lat,lon);
}
click_btn();

setDate("inDateText");


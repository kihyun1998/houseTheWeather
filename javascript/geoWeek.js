weekIndex = 0;

function geoWeek(weekIndex){
    let lat = window.localStorage.getItem('lat');
    let lon = window.localStorage.getItem('lon');
    let time = 86400;

    apiLoc(lat,lon);
    apiWeek(lat,lon,weekIndex);

    setWeek("dateText",weekIndex*time);
}
geoWeek(weekIndex);





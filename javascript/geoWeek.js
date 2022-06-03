let lat = window.localStorage.getItem('lat');
let lon = window.localStorage.getItem('lon');

apiAir(lat,lon);
apiLoc(lat,lon);
apiWeek(lat,lon);

setDate("dateText");






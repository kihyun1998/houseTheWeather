let lat = window.localStorage.getItem('lat');
let lon = window.localStorage.getItem('lon');

apiAir(lat,lon);
apiLoc(lat,lon);
apiGraph(lat,lon);

setDate("dateText");






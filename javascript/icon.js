//날씨별 Icon
function getIcon(weather){
    if(weather=="Clear"){
        return "./image/sunny.png";
    }
    else if(weather=="Clouds"||weather=="Mist" || weather=="Fog" || weather=="Haze"){
        return "./image/cloudy.png";
    }
    else if(weather=="Rain"){
        return "./image/rainy.png";
    }
    else if(weather=="Snow"){
        return "./image/snow.png";
    }
    else if(weather=="Drizzle"){
        return "./image/drop.png";
    }
    else if(weather=="Dust" || weather=='Sand'){
        return "./image/dust.png";
    }
    else if(weather=='Thunderstorm'){
        return "./image/storm.png";
    }
    else if(weather=='Tornado'){
        return "./image/tornado.png";
    }
    else if(weather=='Ash'){
        return "./image/volcano.png";
    }
    else if(weather=='Squall'){
        return "./image/squall.png";
    }
}
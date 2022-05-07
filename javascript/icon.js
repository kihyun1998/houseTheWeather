//날씨별 Icon
function getIcon(weather){
    if(weather=="Clear"){
        return "./image/sunny.png";
    }
    else if(weather=="Clouds"||weather=="Mist" || weather=="Fog"){
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
}
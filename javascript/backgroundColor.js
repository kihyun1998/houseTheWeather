//날씨에 따른 배경색 지정 함수
function background(status){
    switch(status){
        case "Clear":
            return "rgba(152, 210, 255, 0.9)";
            break;
        case "Clouds":
            return "rgba(192, 222, 245, 0.9)";
            break;
        case "Rain":
            return "rgba(181, 188, 192, 0.9)";
            break;
        case "Snow":
            return "rgba(231, 239, 246, 0.9)";
            break;
        case "Thunderstorm":
            return "rgba(207, 187, 212, 0.9)";
            break;
        case "Drizzle":
            return "rgba(187, 247, 202, 0.9)";
            break;
        case "Mist":
            return "rgba(190, 209, 216, 0.9)";
            break;
        case "Smoke":
            return "rgba(246, 219, 185, 0.9)";
            break;
        case "Haze":
            return "rgba(217, 232, 238,0.9)";
            break;
        case "Dust":
            return "rgba(228, 200, 129, 0.9)";
            break;
        case "Fog":
            return "rgba(190, 209, 216, 0.9)";
            break;
        case "Sand":
            return "rgba(242, 185, 79, 0.9)";
            break;
        case "Ash":
            return "rgba(254, 93, 93, 0.9)";
            break;
        case "Squall":
            return "rgba(165, 147, 181, 0.9)";
            break;
        case "Tornado":
            return "rgba(150, 174, 187, 0.9)";
            break;
        
    }
}

//날씨에 따른 배경색 지정 함수
function frameColor(status){
    switch(status){
        case "Clear":
            return "rgb(180, 222, 255)";
            break;
        case "Clouds":
            return "rgb(230, 244, 248)";
            break;
        case "Rain":
            return "rgb(209, 218, 223)";
            break;
        case "Snow":
            return "rgb(241, 252, 255)";
            break;
        case "Thunderstorm":
            return "rgb(230, 218, 233)";
            break;
        case "Drizzle":
            return "rgb(216, 250, 224)";
            break;
        case "Mist":
            return "rgb(223, 235, 240)";
            break;
        case "Smoke":
            return "rgb(247, 233, 217)";
            break;
        case "Haze":
            return "rgb(235, 249, 255)";
            break;
        case "Dust":
            return "rgb(231, 214, 169)";
            break;
        case "Fog":
            return "rgba(190, 209, 216, 0.9)";
            break;
        case "Sand":
            return "rgba(242, 185, 79, 0.9)";
            break;
        case "Ash":
            return "rgba(254, 93, 93, 0.9)";
            break;
        case "Squall":
            return "rgba(165, 147, 181, 0.9)";
            break;
        case "Tornado":
            return "rgba(150, 174, 187, 0.9)";
            break;
        
    }
}
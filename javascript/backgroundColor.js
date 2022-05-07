//날씨에 따른 배경색 지정 함수
function background(status){
    switch(status){
        case "Clear":
            return "rgb(193, 232, 255)";
            break;
        case "Clouds":
            return "rgb(203, 219, 230)";
            break;
        case "Rain":
            return "rgb(181, 188, 192)";
            break;
        case "Snow":
            return "rgb(255, 255, 255)";
            break;
        case "Thunderstorm":
            return "rgb(207, 187, 212)";
            break;
        case "Drizzle":
            return "rgb(187, 247, 202)";
            break;
        case "Mist":
            return "rgb(190, 209, 216)";
            break;
        case "Smoke":
            return "rgb(246, 219, 185)";
            break;
        case "Haze":
            return "rgb(208, 197, 169)";
            break;
        case "Dust":
            return "rgb(228, 200, 129)";
            break;
        case "Fog":
            return "rgb(190, 209, 216)";
            break;
        case "Sand":
            return "rgb(242, 185, 79)";
            break;
        case "Ash":
            return "rgb(254, 93, 93)";
            break;
        case "Squall":
            return "rgb(165, 147, 181)";
            break;
        case "Tornado":
            return "rgb(150, 174, 187)";
            break;
        
    }
}
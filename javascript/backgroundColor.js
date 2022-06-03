//날씨에 따른 배경색 지정 함수
function background(status){
    switch(status){
        case "Clear":
            return "rgba(152, 210, 255, 0.7)";
            break;
        case "Clouds":
            return "rgba(223, 228, 232, 0.7)";
            break;
        case "Rain":
            return "rgba(181, 188, 192, 0.7)";
            break;
        case "Snow":
            return "aliceblue";
            break;
        case "Thunderstorm":
            return "rgba(207, 187, 212, 0.7)";
            break;
        case "Drizzle":
            return "rgba(187, 247, 202, 0.7)";
            break;
        case "Mist":
            return "rgba(190, 209, 216, 0.7)";
            break;
        case "Smoke":
            return "rgba(246, 219, 185, 0.7)";
            break;
        case "Haze":
            return "rgba(208, 197, 169, 0.7)";
            break;
        case "Dust":
            return "rgba(228, 200, 129, 0.7)";
            break;
        case "Fog":
            return "rgba(190, 209, 216, 0.7)";
            break;
        case "Sand":
            return "rgba(242, 185, 79, 0.7)";
            break;
        case "Ash":
            return "rgba(254, 93, 93, 0.7)";
            break;
        case "Squall":
            return "rgba(165, 147, 181, 0.7)";
            break;
        case "Tornado":
            return "rgba(150, 174, 187, 0.7)";
            break;
        
    }
}
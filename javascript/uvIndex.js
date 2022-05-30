//자외선 함수
function uvLevel(uv){
    if(uv<=2){
        return `Row [${uv}]`;
    }
    else if(uv>2 && uv<=5 ){
        return `Moderate [${uv}]`;
    }
    else if(uv>5 && uv<=7){
        return `High [${uv}]`;
    }
    else if(uv>7 && uv<=10){
        return `Very High [${uv}]`;
    }
    else if(uv>10){
        return `danger [${uv}]`;
    }
}
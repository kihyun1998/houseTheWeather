function windSpRpt(windS,windG){
    if(windS >= 14 || windG >=20){
        return 1;
    }
    else if(windS >= 21 || windG >= 26){
        return 2;
    }
    else{
        return 0;
    }
}

function windText(windRst,windS,windG,time){
    const date=document.getElementsByClassName('windDate')[0];
    const value=document.getElementsByClassName('windVal')[0];
    const report=document.getElementsByClassName('windRpt')[0];
    
    if(windRst == 1){
        let texttime = timeSpRpt(time)
        date.innerText += `\n${texttime}`;
        value.innerText += `\nwind speed : ${windS} m/s wind gust : ${windG}`
        report.innerText += `\nAdvisory`;
    }
    else if(windRst == 2){
        let texttime = timeSpRpt(time)
        date.innerText += `\n${texttime}`;
        value.innerText += `\nwind speed : ${windS} m/s wind gust : ${windG}`
        report.innerText += `\nWarning`;
    }
    else{
        let texttime = timeSpRpt(time)
        date.innerText += `\n${texttime}`;
        value.innerText += `\nwind speed : ${windS} m/s wind gust : ${windG}`
        report.innerText +=`\n No`
    }
}
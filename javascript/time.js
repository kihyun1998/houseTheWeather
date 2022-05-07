//UTC > KST 변환(날짜)
function timeSet(time){
    const date = new Date(time*1000);
    let day = date.getHours()+":"+date.getMinutes();
    return day;
}
//UTC > KST 변환(시간)
function timeChange(time){
    let date = new Date(time*1000);
    let hour = date.getHours();

    return hour+":00";
}
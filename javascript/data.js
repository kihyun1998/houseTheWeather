//날짜 데이터 받아오기
const now = new Date();
let year = now.getFullYear();
let mon = now.getMonth();
let date = now.getDate();
let day = now.getDay();
//월 표시 데이터 가공
let monEn;
const monarr = new Array("Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec.");
for(var i =0; i<monarr.length; i++){
    if(mon==i){
        monEn = monarr[i];
    }
}
//요일 표시 데이터 가공
let dayEn;
const dayarr = new Array("Sun.","Mon.","The.","Wed.","Thu.","Fri.","Sat.");
for(var j=0; j<dayarr.length; j++){
    if(day==j){
        dayEn = dayarr[j]
    }
}

const date1 = document.querySelector(".date");
date1.innerText = `Today is ${dayEn} ${monEn} ${date} ${year}`;


console.log(monEn,monarr);
console.log("출력",year,monEn,date,dayEn);
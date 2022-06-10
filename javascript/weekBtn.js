//좌측 버튼 객체 접속
let left = document.getElementsByClassName("left")[0]
left.style.visibility = "hidden";
//우측 버튼 객체 접속
let right = document.getElementsByClassName("right")[0]

arrI = [0,1,2,3,4,5,6,7];

//좌측 버튼 클릭 시
left.addEventListener("click",()=>{
    if(weekIndex == 1){
        left.style.visibility = "hidden";
        weekIndex--;
        geoWeek(weekIndex);
    }else{
        left.style.visibility = "visible";
        right.style.visibility = "visible";
        weekIndex--;
        geoWeek(weekIndex);
    }

});

//우측 버튼 클릭 시
right.addEventListener("click",function(){
    if(weekIndex == 6){
        right.style.visibility = "hidden";
        weekIndex++;
        geoWeek(weekIndex);
    }else{
        left.style.visibility = "visible";
        right.style.visibility = "visible";
        weekIndex++;
        geoWeek(weekIndex);
    }   
});


function click_btn(){
    let lat = window.localStorage.getItem('lat');
    let lon = window.localStorage.getItem('lon');
    apiLoc(lat,lon);
    apiBack(lat,lon);
}
click_btn();

// let loop = setInterval( 
//     function(){
//         let lat = window.localStorage.getItem('lat');
//         let lon = window.localStorage.getItem('lon');
//         console.log("...sending");
//         if(this.check==1){
//             stop();
//             apiLoc(lat,lon);
//             apiBack(lat,lon);
//         }
//     },1000
// );

// function stop(){
//     clearInterval(loop);
// }
setDate("inDateText");


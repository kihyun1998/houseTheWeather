let loop = setInterval( 
    function(){
        let lat = window.localStorage.getItem('lat');
        let lon = window.localStorage.getItem('lon');
        let cntL=window.localStorage.length;

        if(cntL==2){
            stop();
            apiLoc(lat,lon);
            apiBack(lat,lon);
        }
    },1000
);

function stop(){
    clearInterval(loop);
}
setDate("inDateText");


function apiLoc(lat,lon){   
    //지역이름 API
    const urlLoc = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=ko`
    fetch(urlLoc)
    .then(response => response.json())
    .then(data => {
        const city = document.getElementsByClassName("location")[0];
        city.innerText = `${data.locality}`;
    })
}
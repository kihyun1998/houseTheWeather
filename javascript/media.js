let showBtn = document.getElementById("btn-show");
let closeBtn = document.getElementById("btn-close");
let liMenu = document.getElementsByClassName("little-menu")[0];
let show = document.getElementById("show");
let closeM = document.getElementById("close");

showBtn.addEventListener("click",()=>{
    liMenu.style.display = "block";
    show.style.display = "none";
    closeM.style.display = "flex";
    document.body.style.overflowY="hidden";
})

closeBtn.addEventListener("click",()=>{
    liMenu.style.display = "none";
    show.style.display = "flex";
    closeM.style.display = "none";
    document.body.style.overflowY="auto";
})

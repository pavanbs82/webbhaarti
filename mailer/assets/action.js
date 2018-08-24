function showAddNewGroup() {
   document.getElementById('addNewGroup').style.display = "block";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "318px";
    document.getElementById("main").style.marginLeft = "318px";
}
function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function showLightBox() {
   document.getElementById('lightBox').style.display = "flex";
}

function closeLightBox(){
    document.getElementById("lightBoxClose").style.display = "none";
    document.getElementById("lightBox").style.width = "0";
}
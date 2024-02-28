
function showPopUp(){
    var popup = document.getElementById("popup1");
    popup.style.display = "block";
    for(var i = 0; i < 4; i++) {
        document.getElementById("blurry" + [i]).classList.add("blurred");
    } 
}
function hidePopUp(){
    var popup = document.getElementById("popup1");
    popup.style.display = "none";
    for(var i = 0; i < 4; i++) {
        document.getElementById("blurry" + [i]).classList.remove("blurred");
    }
}

function darkMode(){
    document.querySelector("body").classList.toggle("darkmode");
    for(var i = 0; i < document.querySelectorAll(".light-mode").length; i++){
        document.querySelectorAll(".light-mode")[i].classList.toggle("lightmode");
    }
    var icon = document.getElementById("moon-icon");
    if(icon.src.includes("moon-fill.svg")){
        icon.src = "../asset/link/moon.svg";
    }else{
        icon.src = "../asset/link/moon-fill.svg";
    }
}

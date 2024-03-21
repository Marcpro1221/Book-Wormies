var center = document.querySelector(".center");
var sidebar = document.querySelector(".sidebar");
var headerList = document.querySelectorAll(".sidebar .hidden-item");
var mediaQuery  = window.matchMedia('(min-width: 561px)');


function toggleNavigation() {
      center.classList.toggle("clicked");
      sidebar.classList.toggle("sidebar-open");

    headerList.forEach(function (item) {  
        item.style.display = (sidebar.classList.contains("sidebar-open")) ? "block" : "none";
    });

    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
        sidebar.style.width = "250px";
    } else {
        sidebar.style.width = "0";
    }
}
window.addEventListener('resize', function(){
    headerList.forEach(function (item){
        item.style.display = mediaQuery.matches ? "block" : (sidebar.classList.contains("sidebar-open") ? "block" : "none");
    });
})





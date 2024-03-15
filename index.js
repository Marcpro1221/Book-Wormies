
var center = document.querySelector(".center");
var sidebar = document.querySelector(".sidebar");
var headerList = document.querySelectorAll(".sidebar .header");
function toggleNavigation() {
      center.classList.toggle("clicked");
      sidebar.classList.toggle("sidebar-open");

    headerList.forEach(function (item) {
        item.style.display = (sidebar.classList.contains("sidebar-open")) ? "block" : "none";
    });
    
    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
        sidebar.style.width = "300px";
    } else {
        sidebar.style.width = "0";
    }
}


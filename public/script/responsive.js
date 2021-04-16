let ham = document.querySelector('#hamburger');
var sidePanel = false;
ham.addEventListener('click', () => {
    console.log("burger clicked");
    ham.classList.toggle("active");
    openSidebar();

});

openSidebar = () => {
    let sidebar = document.querySelector(".sidebar");
    console.log(sidePanel);
    if (!sidePanel) {
        sidebar.style.width = '60%';
        // sidebar.style.display = "block";
        sidePanel = true;
    } else {
        sidebar.style.width = '0';
        //sidebar.style.display = "none";
        sidePanel = false;

    }

}
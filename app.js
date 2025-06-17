let mybutton = document.getElementById("TopBtn");

mybutton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
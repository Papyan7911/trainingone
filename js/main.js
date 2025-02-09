let div = document.getElementById("divImg");
div.style.display = 'none'
function show() {
    if (div.style.display === "none") {
        div.style.display = "block"
    }else {
        div.style.display = "none"
    }
}
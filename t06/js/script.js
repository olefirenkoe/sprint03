let bruce = true;
var x = document.getElementById("lab");
var a = document.getElementById("hero");

function transformation() {
    if (bruce) {
        x.style.background = "#70964b";
        a.style.fontSize = "130px";
        a.innerHTML = "HULK";
        a.style.letterSpacing = "6px";
        bruce = false;
    } else {
        x.style.background = null;
        a.style.fontSize = null;
        a.innerHTML = "Bruce Banner";
        a.style.letterSpacing = null;
        bruce = true;
    }
}
let input = document.getElementById('textarea').value;
let output = document.getElementById('output');
let addButton = document.getElementById('addButton');
let clearButton = document.getElementById('clearButton');
let cookie = getCookie("cookie");
let cookie1 = getCookie("cookie1");
let count;

if (getCookie("cookie1") != "") {
    output.innerHTML = `-->${cookie} <br> -->${cookie1}`;
} else {
    output.value = `-->${cookie}`;
}

function emptyChecker() {
    if (!document.cookie) {
        output.value = "[Empty]";
    }
}
emptyChecker();

function addCoockies() {

    if (!document.getElementById('textarea').value) {
        alert(`It's empty. Try to input something in "Text input".`);
    } else {
        let input = document.getElementById('textarea').value;
        if (!document.cookie) {
            let inputt = document.getElementById('textarea');
            setCookie("cookie", input, 30);
            let cookie = getCookie("cookie");
            output.value = `-->${cookie}`;
            inputt.value = "";
        } else {
            let inputt = document.getElementById('textarea');
            setCookie("cookie1", input, 30);
            let cookie1 = getCookie("cookie1");
            output.innerHTML = `-->${getCookie("cookie")} <br> -->${cookie1}`;
            inputt.value = "";
        }
    }

}

function clearCoockies() {
    let conf = confirm("Are you sure?");
    if (conf) {
        setCookie("cookie", input, 0);
        setCookie("cookie1", input, 0);
        emptyChecker();
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
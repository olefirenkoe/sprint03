// var div1 = document.getElementById("div1");
// alert(div1);
// var align = div1.getAttribute("align");
// alert(align); // отобразит значение атрибута align элемента с id="div1"

// let good = document.getElementsByClassName("good");
// alert(good);
// let element = good.getAttribute("align");
// alert(element);

// element.ul.classList.add('none');

// alert(element.ul.className);
// for (let i = 0; i < document.body.childNodes.length; i++) {
//     alert(document.body.childNodes[i]); // Text, DIV, Text, UL, ..., SCRIPT
// }

let a = document.body.children[1].children;
let i = 0;
let j = 0;

// alert(a.length);



while (i < a.length) {
    if (!a[i].className) {
        a[i].classList.add('none');
    }
    if (!a[i].getAttribute('data-element')) {
        a[i].setAttribute('data-element', 'none')
    }
    i++;
}








while (j < a.length) {
    alert(a[j].getAttribute("data-element"));
    j++;
}
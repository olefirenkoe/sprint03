let a = document.body.children[1].children;

for (let i = 0; i < a.length; i++) {
    a[i].insertAdjacentHTML("beforeEnd", "</br>");
    if (!a[i].className) {
        a[i].classList.add('unknown');
    }
    if (!a[i].getAttribute('data-element')) {
        a[i].setAttribute('data-element', 'none')
    }
    let data = a[i].getAttribute('data-element');
    let ArrData = data.split(' ');
    for (let j = 0; j < ArrData.length; j++) {
        if (ArrData[j] == "none") {
            let noneDiv = document.createElement("DIV");
            let noneDivTwo = document.createElement("DIV");

            noneDiv.setAttribute('class', 'elem none');
            noneDivTwo.setAttribute('class', 'line');

            a[i].appendChild(noneDiv);
            noneDiv.appendChild(noneDivTwo);
        } else {
            let colorDiv = document.createElement("DIV");

            colorDiv.setAttribute('class', `elem ${ArrData[j]}`);
            a[i].appendChild(colorDiv);
        }
    }
}
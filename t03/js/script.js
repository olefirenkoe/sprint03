function removeDublAndSpace(obj) {
    obj.words = obj.words.replace(/\s+/g, " ").trim();
    massiv = obj.words.split(" ");
    let removeDubl = massiv.filter((item, index) => massiv.indexOf(item) === index);
    obj.words = removeDubl.join(" ");
}

function addWords(obj, wrds) {
    obj.words += " " + wrds;
    removeDublAndSpace(obj);
    return obj;
}

function removeWords(obj, wrds) {
    let massiv = obj.words.split(" ");
    let removeMassiv = wrds.replace(/\s+/g, " ").trim();

    removeMassiv = removeMassiv.split(" ");

    for (let n = 0; n < removeMassiv.length; n++) {
        let index = massiv.indexOf(removeMassiv[n]);
        if (index >= 0) {
            massiv.splice(index, 1);
        }
    }
    obj.words = massiv.join(" ");
    return obj;
}


function changeWords(obj, oldWrds, newWrds) {
    let old = oldWrds.replace(/\s+/g, " ").trim();
    old = old.split(" ");
    let neww = newWrds.replace(/\s+/g, " ").trim();
    neww = neww.split(" ");
    massiv = obj.words.split(" ");

    for (let n = 0; n < old.length; n++) {
        let index = massiv.indexOf(old[n]);
        if (index >= 0) {
            massiv.splice(index, 1);
        }
    }

    let n = neww.length - 1;
    while (n >= 0) {
        massiv.splice(0, 0, neww[n]);
        n--;
    }

    obj.words = massiv.join(" ");
    return obj;
}

const obj = {
    words: 'newspapers newspapers  books magazines'
};

// // obj.words.concat('radio newspapers   ');
// console.log(obj); // {words: "newspapers newspapers  books magazines"}

// addWords(obj, 'radio newspapers   ');
// console.log(obj);
// // {words: "newspapers books magazines radio"}

// removeWords(obj, 'newspapers   radio');
// console.log(obj); // {words: "books magazines"}

// changeWords(obj, 'books radio  magazines', 'tv internet');
// console.log(obj); // {words: "tv internet"}
// let main = document.body.children[0];
// console.log(main);
// let table = document.createElement("TABLE");
// table.setAttribute('class', 'table')
// console.log(table);
// main.appendChild(table);
// let tdArray = document.getElementsByTagName("td");



// for (let i = 0; i < 3; i++) {
//     let tr = document.createElement("TR");
//     table.appendChild(tr);
//     for (let j = 0; j < 10; j++) {
//         let td = document.createElement("TD");
//         tr.appendChild(td);
//         for (let k = 0; k < 10; k++) {

//             console.log(tdArray);
//             tdArray[0].setAttribute('class', "name");
//         }
//     }
// }

let name = ["Captain America", "Hulk", "Iron Man", "Captain Marvel", "Spider-Man", "Thor", "Yon-Rogg", "Thanos", "Black Panter"];

let age = [53, 137, 26, 49, 48, 16, 1000, 1000, 52];
let strength = [66, 79, 97, 80, 88, 78, 99, 95, 73];
let main = document.body.children[0];
let table = document.createElement("TABLE");

main.appendChild(table);
table.setAttribute('class', 'table');


for (let i = 0; i < name.length; i++) {
    let tr = document.createElement("TR");
    table.appendChild(tr);
    for (let j = 1; j < 4; j++) {
        let td = document.createElement("TD");
        tr.appendChild(td);
        if (j % 2 == 0) {
            td.innerHTML = `${strength[i]}`;
        } else if (j % 3 == 0) {
            td.innerHTML = `${age[i]}`;
        } else {
            td.innerHTML = `${name[i]}`;
        }
    }

}


// let innerTable = document.body.children[0].children[3];
// console.log(innerTable);

// let tr = document.createElement("tr");
// console.log(tr);
// table.appendChild(tr);
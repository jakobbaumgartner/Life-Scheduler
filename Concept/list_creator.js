const fs = require('fs');

// var list = fs.readdirSync('./lists')
// console.log(list)

let rawdata = fs.readFileSync('./lists/list1.json');
let list1 = JSON.parse(rawdata);
console.log(list1);
















// var data = {
//     name: "Jakob",
//     birthday: "11.7.1996"
// }

// let jdata = JSON.stringify(data);
// fs.writeFileSync('jakob.json', jdata);


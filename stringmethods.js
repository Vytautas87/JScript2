let zodis = prompt("Įveskite žodį");
let zodzioIlgis = zodis.length;
alert(zodzioIlgis); 

let zodis1 = prompt("įveskite žodį");
let paskutineRaide = zodis1.at(-1);

console.log(paskutineRaide); 

let zodis2 = prompt("Įveskite žodį");
zodis2length = [zodis2.length - 1];

console.log(zodis2length);

let tekstas = prompt("Įveskite tekstą")
let arYraTekste = tekstas.includes("taip");
console.log("Ar yra tekste: " + arYraTekste);  

let zodis3 = prompt("Įveskite žodį");
let galune = prompt("Įveskite žodžio galūnę");
console.log(zodis3.endsWith(galune));
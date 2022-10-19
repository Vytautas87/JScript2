let tekstas = prompt("Įveskite pirmą žodį");
let tekstas1 = prompt("Įveskite antrą žodį");
let arTekstasVienodas = arVienodi(tekstas, tekstas1);
arVienodasTekstas(arTekstasVienodas, tekstas, tekstas1);


function arVienodi(tekstas, tekstas1) {
    if (tekstas.toLocaleLowerCase() == (tekstas1.toLocaleLowerCase())) {
        return true; 
    } else {
        return false;
    }
}

function arVienodasTekstas(arVienodas, tekstas, tekstas1) {
    if (arVienodas == true) {
        console.log(`Tekstas ${tekstas} ir ${tekstas1} vienodas`);
    }
    else {
        console.log(`Tekstas ${tekstas} ir ${tekstas1} ne vienodas`);
    }
}
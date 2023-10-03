var valores = [true, 5, false, "hola", "adios", 2]

// Parte 1
var longitudStrings = 0
var stringMasGrande = ""

for (var valor in valores) {
    if (typeof valores[valor] === "string") {
        if (valores[valor].length > longitudStrings) {
            longitudStrings = valores[valor].length
            stringMasGrande = valores[valor]
        }
    } else {
        console.log("no es string");
    }
}
alert(`El string más grande es ${stringMasGrande}`)


// Parte 2
if ( valores[0] === true || valores[0] === false ) {
    console.log("Con la operación || es true");
}
if ( valores[0] === true && valores[0] === false ) {
    console.log("Con la operación && es false");
}



// Parte 3
const num1 = valores[1]
const num2 = valores[5]

alert(`numero 1 + numero 2 =  ${num1+num2}`)
alert(`numero 1 - numero 2 =  ${num1-num2}`)
alert(`numero 1 * numero 2 =  ${num1*num2}`)
alert(`numero 1 / numero 2 =  ${num1/num2}`)
alert(`numero 1 % numero 2 =  ${num1%num2}`)



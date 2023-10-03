var frase = prompt("Escribe una frase que sea palíndromo: ")

var nuevaFrase = ""

frase = frase.toLowerCase()

for (var letra in frase) {
    if ( frase[letra] === " " ) {
        frase = frase.replace(" ", "")
    }
}

alert(frase)
for (var i = frase.length - 1; i >= 0; i--) { 
    nuevaFrase = nuevaFrase + frase[i]
}
if ( frase === nuevaFrase ) {
    alert("Es palíndromo")
} else {
    alert("No es palíndromo")
}
// La ruta nos aporto otro paso natural
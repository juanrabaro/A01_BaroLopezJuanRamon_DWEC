// Primera versión
const name = prompt("Escribe tu nombre: ")
var hour = Number.parseInt(prompt("Dime la hora : "))

if (hour >= 7 && hour < 12) {
    alert(`Hola ${name}, ahora mismo es por la mañana`)
} else if (hour >= 12 && hour < 21) {
    alert(`Hola ${name}, ahora mismo es por la tarde`)
} else {
    alert(`Hola ${name}, ahora mismo es por la noche`)
}


// Segunda versión
const name2 = prompt("Escribe tu nombre: ")

const day = new Date()
const hour2 = day.getHours()

if (hour2 >= 7 && hour2 < 12) {
    alert(`Hola ${name}, ahora mismo es por la mañana`)
} else if (hour2 >= 12 && hour2 < 21) {
    alert(`Hola ${name}, ahora mismo es por la tarde`)
} else {
    alert(`Hola ${name}, ahora mismo es por la noche`)
}
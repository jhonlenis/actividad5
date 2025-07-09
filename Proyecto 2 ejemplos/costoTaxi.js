let tiempo = 5;
let límite = 30;
let costo = 0;

if (tiempo === 0) {
    console.log("Error: El tiempo no puede ser cero");
} else {
    while (tiempo < límite) {
        tiempo += 5;
        if (tiempo <= 15) {
            costo += 5 * 0.5
        } else {
        costo += 15 * 0.3
        }
        console.log(`Tiempo: ${tiempo} minutos, Costo: $${costo}`);
    }
    console.log(`Costo total de la entrega:$${costo}`);
}


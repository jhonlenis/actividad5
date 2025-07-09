let tiempo = 0;       // Tiempo inicial en minutos
const limite = 30;    // Límite de tiempo en minutos
let costo = 0;        // Costo total inicializado en 0

// Verificar si el tiempo inicial es 0 y mostrar error
if (tiempo === 0) {
  console.log("Error: El tiempo no puede ser cero");
} else {
  // Bucle para simular avance del repartidor
  while (tiempo < limite) {
    tiempo += 5;

    // Calcular costo según el tiempo acumulado
    if (tiempo <= 15) {
      costo += 5 * 0.5;  // $0.5 por minuto para primeros 15 minutos
    } else {
      costo += 5 * 0.3;  // $0.3 por minuto después de 15 minutos
    }

    console.log(`Tiempo: ${tiempo} minutos, Costo: $${costo.toFixed(2)}`);
  }

  console.log(`Costo total de la entrega: $${costo.toFixed(2)}`);
}

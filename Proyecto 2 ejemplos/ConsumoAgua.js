let costoTotal = 0;

for (let dia = 1; dia <= 7; dia++) {
  // Generar consumo aleatorio entre 1 y 5 litros (entero)
  let consumo = Math.floor(Math.random() * 5) + 1;

  // Penalización: si consumo > 3 litros, suma $2, si no, suma $1
  let penalizacion = consumo > 3 ? 2 : 1;

  costoTotal += penalizacion;

  console.log(`Día ${dia}: Consumo = ${consumo} litros, Costo diario = $${penalizacion}, Costo total = $${costoTotal}`);

  // Si el costo total supera $10, detener el seguimiento
  if (costoTotal > 10) {
    console.log("Costo total superó $10. Seguimiento detenido.");
    break;
  }
}

console.log(`Costo total final después de ${costoTotal > 10 ? 'menos de 7' : '7'} días: $${costoTotal}`);

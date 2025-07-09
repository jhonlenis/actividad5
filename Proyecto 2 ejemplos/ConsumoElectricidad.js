let costoTotal = 0;

for (let dia = 1; dia <= 5; dia++) {
  // Generar consumo aleatorio entre 1 y 10 kWh
  let consumo = Math.floor(Math.random() * 10) + 1;

  // Determinar costo diario usando operador ternario
  let costoDiario = consumo > 5 ? 3 : 1.5;

  costoTotal += costoDiario;

  console.log(`Día ${dia}: Consumo ${consumo} kWh, Costo: $${costoDiario.toFixed(2)}, Total: $${costoTotal.toFixed(2)}`);

  // Verificar si costo total supera $12 para detener monitoreo
  if (costoTotal > 12) {
    console.log("Costo total superó $12, deteniendo el monitoreo");
    break;
  }
}

console.log(`Costo total final: $${costoTotal.toFixed(2)}`);

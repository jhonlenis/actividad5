let ahorroTotal = 0;
let dia = 1;

do {
  let ahorroBase = 5;
  // Operador ternario para el incremento adicional
  let adicional = (dia % 2 === 0) ? 3 : 1;
  let ahorroDiario = ahorroBase + adicional;

  ahorroTotal += ahorroDiario;

  console.log(`Día ${dia}: Ahorro de $${ahorroDiario} (Total: $${ahorroTotal})`);

  // Si el ahorro total supera $50, se detiene el proceso
  if (ahorroTotal > 50) {
    console.log("¡Meta de ahorro superada!");
    break;
  }

  dia++;
} while (dia <= 10);

console.log(`Ahorro final después de ${dia - 1} días: $${ahorroTotal}`);
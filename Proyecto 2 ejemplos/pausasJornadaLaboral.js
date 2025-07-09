const tiempoTotal = 240;
let tiempoRestante = tiempoTotal;
let ciclo = 0;

// El bucle for itera en incrementos de 50 minutos (tiempo de trabajo)
for (let tiempo = 0; tiempo < tiempoTotal && tiempoRestante > 0;) {
  ciclo++;

  if (ciclo % 2 !== 0) {
    // Ciclo impar: trabajo de 50 minutos
    if (tiempoRestante < 50) {
      console.log(`Ciclo ${ciclo}: Tiempo restante insuficiente para trabajar 50 minutos.`);
      break;
    }
    tiempoRestante -= 50;
    tiempo += 50;
    console.log(`Ciclo ${ciclo}: Trabajar 50 minutos, Tiempo restante: ${tiempoRestante} minutos`);
  } else {
    // Ciclo par: pausa
    // Número de pausa: ciclo/2
    let numPausa = Math.ceil(ciclo / 2);
    let duracionPausa = numPausa <= 3 ? 10 : 20;

    if (tiempoRestante < duracionPausa) {
      console.log(`Ciclo ${ciclo}: Tiempo restante insuficiente para pausa de ${duracionPausa} minutos.`);
      break;
    }

    tiempoRestante -= duracionPausa;
    // No incrementamos 'tiempo' porque el bucle avanza solo en bloques de trabajo (50 min)
    console.log(`Ciclo ${ciclo}: Pausa de ${duracionPausa} minutos, Tiempo restante: ${tiempoRestante} minutos`);
  }
}

console.log(`Tiempo restante al final de la jornada: ${tiempoRestante} minutos`);

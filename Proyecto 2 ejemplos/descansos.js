const totalTiempo = 120; 
const duracionTrabajo = 25; 
const descansoCorto = 5; 
const descansoLargo = 15; 
const ciclos = 4; 
let tiempoRestante = totalTiempo;

for (let ciclo = 1; ciclo <= ciclos; ciclo++) {
  // Trabajo
  console.log(`Ciclo ${ciclo}: Trabajando por ${duracionTrabajo} minutos.`);
  tiempoRestante -= duracionTrabajo;
  console.log(`Tiempo restante: ${tiempoRestante} minutos`);

  // Descanso (excepto después del último ciclo)
  if (ciclo < ciclos) {
    let descanso = (ciclo < 4) ? descansoCorto : descansoLargo;
    console.log(`Ciclo ${ciclo}: Descansando por ${descanso} minutos.`);
    tiempoRestante -= descanso;
    console.log(`Tiempo restante: ${tiempoRestante} minutos`);
  }
}

console.log("¡Sesión de estudio completada!");
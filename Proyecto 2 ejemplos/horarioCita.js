
let diaSemana = 3;
const respuestasUsuario = [false, false, true]; 
let horaCita;

switch (diaSemana) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    horaCita = 18; 
    break;
  case 6:
    horaCita = 10;
    break;
  case 7:
    horaCita = 14; 
    break;
  default:
    console.log("Día inválido. Debe ser un número entre 1 y 7.");
    horaCita = null;
}

if (horaCita !== null) {
  let intentos = 0;

  while (intentos < 3) {
    // Simulamos la respuesta del usuario para este intento
    let horarioAdecuado = respuestasUsuario[intentos];

    if (horarioAdecuado) {
      break; // El usuario acepta el horario, salimos del bucle
    } else {
      // Usuario no acepta, sumamos 1 hora al horario
      horaCita++;
      intentos++;
      console.log(`Intento ${intentos}: Horario no adecuado, se ajusta a las ${horaCita}:00`);
    }
  }

  console.log(`Horario final para la cita: ${horaCita}:00 horas`);
}

let dia = 6;           // Día de la semana (1 a 7)
let horario = 0;       // Horario base en horas (24h)
let intento = 0;       // Contador de intentos
const maxIntentos = 4; // Máximo de intentos

// Asignar horario base según el día usando switch
switch (dia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    horario = 9;
    break;
  case 6:
    horario = 11;
    break;
  case 7:
    horario = 16;
    break;
  default:
    horario = 0;
    console.log("Día inválido. Debe ser un número entre 1 y 7.");
}

if (horario === 0) {
  console.log("No se puede asignar un horario base válido.");
} else {
  console.log(`Horario base para día ${dia}: ${horario}:00`);

  while (intento < maxIntentos) {
    // Simulación: ajustar es true para los primeros 3 intentos, false después
    let ajustar = intento < 3;

    if (!ajustar) {
      break; // Usuario acepta el horario, salir del bucle
    }

    intento++;
    horario--; // Restar 1 hora para ajustar
    console.log(`Intento ${intento}: Ajustando a ${horario}:00`);
  }

  if (horario < 7) {
    console.log("Error: Horario demasiado temprano");
  } else {
    console.log(`Horario final para la clase: ${horario}:00`);
  }
}

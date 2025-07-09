let inversion = 100;  // Inversión inicial
let dia = 1;

do {
  // Incremento base de $10 más adicional según el día
  let adicional = (dia % 3 === 0) ? 10 : 5;
  let gananciaDia = 10 + adicional;

  inversion += gananciaDia;

  console.log(`Día ${dia}: Ganancia de $${gananciaDia}, Total: $${inversion}`);

  if (inversion > 200) {
    console.log("Inversión superó $200, deteniendo el proceso");
    break;
  }

  dia++;
} while (dia <= 14);

console.log(`Inversión total final después de ${dia - 1} días: $${inversion}`);

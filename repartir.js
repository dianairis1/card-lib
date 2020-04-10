// getRandomArbitrary Retorna un número aleatorio entre min (incluido) y max (excluido)
// Match.floor Devuelve el máximo entero menor o igual a un número
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function repartirUnaCarta(modeloBaraja, modeloJugadores, jugador, indiceCarta) {
  let aleatorioPalo;
  let aleatorioNumero;

  do {
    aleatorioPalo = getRandomArbitrary(0, modeloBaraja.length);
    aleatorioNumero = getRandomArbitrary(0, modeloBaraja[0].length);
  } while (modeloBaraja[aleatorioPalo][aleatorioNumero].repartidaA !== -1);

  modeloBaraja[aleatorioPalo][aleatorioNumero].repartidaA = jugador;
  modeloJugadores[jugador][indiceCarta] = modeloBaraja[aleatorioPalo][aleatorioNumero];
}

export function repartirManoAJugador(
  numeroCartasPorMano,
  modeloBaraja,
  modeloJugadores,
  jugador
) {
  for (let index = 0; index < numeroCartasPorMano; index++) {
    repartirUnaCarta(modeloBaraja, modeloJugadores, jugador, index);
  }
}

class Carta {
  constructor(palo, numero, repartidaA, aLaVista) {
    this.palo = palo;
    this.numero = numero;
    this.repartidaA = repartidaA;
    this.aLaVista = aLaVista;
  }
}

export function inicializarModeloBaraja(palos, numCartasPorPalo) {
  const modelo = new Array(palos);
  for (let i = 0; i < palos; i++) {
    modelo[i] = new Array(numCartasPorPalo);
    for (let j = 0; j < numCartasPorPalo; j++) {
      modelo[i][j] = new Carta(i, j, -1, false);
    }
  }
  return modelo;
}

export function inicializarModeloJugadores(numJugadores, numCartasPorJugador) {
  const modelo = new Array(numJugadores);
  for (let i = 0; i < numJugadores; i++) {
    modelo[i] = new Array(numCartasPorJugador);
  }
  return modelo;
}

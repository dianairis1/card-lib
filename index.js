 // getRandomArbitrary Retorna un número aleatorio entre min (incluido) y max (excluido)
// Match.floor Devuelve el máximo entero menor o igual a un número
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Parámetros recibidos:
  // - modelo: es un modelo de una baraja de cartas cuyo esquema es un array de arrays de cartas
  // -Cada carta se representa como un objeto y tiene dos propiedades:
  // repartida: si la carta ya fue repartida, aLaVista: si la carta está a la vista o no

  // Funcionamiento:
  // -La funcion modifica aleatoriamente la propiedad "repartida" de una de las cartas del modelo, 
  // asegurandose que dicha carta no habia sido previamente repartida.

  // La funcion no devuelve nada, hace el cambio sobre el modelo pasado como parámetro.
  class Carta {
    constructor(palo, numero, repartidaA, aLaVista){
      this.palo = palo;
      this.numero = numero;
      this.repartidaA = repartidaA;
      this.aLaVista = aLaVista;
    }
  }

function repartirUnaCarta(modeloBaraja, modeloJugadores, jugador, indiceCarta) {
  
  let aleatorioPalo;
  let aleatorioNumero;

  do {
    aleatorioPalo = getRandomArbitrary(0, modeloBaraja.length);
    aleatorioNumero = getRandomArbitrary(0, modeloBaraja[0].length);
  } while (modeloBaraja[aleatorioPalo][aleatorioNumero].repartidaA !== -1);

  modeloBaraja[aleatorioPalo][aleatorioNumero].repartidaA = jugador;
  modeloJugadores[jugador][indiceCarta] = modeloBaraja[aleatorioPalo][aleatorioNumero];
}

function repartirManoAJugador(numeroCartasPorMano, modeloBaraja, modeloJugadores, jugador) {
  //-La funcion recibe un numero entero que es el numero de cartas que se
  //a repartir en esta mano.

  for (let index = 0; index < numeroCartasPorMano; index++) {
    repartirUnaCarta(modeloBaraja, modeloJugadores, jugador, index);
  }
}

function inicializarModeloBaraja(palos, numCartasPorPalo) {
  const modelo = new Array(palos);
  for (let i = 0; i < palos; i++) {
    modelo[i] = new Array(numCartasPorPalo);
    for (let j = 0; j < numCartasPorPalo; j++) {
      modelo[i][j] = new Carta(i, j, -1, false);
    }
  }
  return modelo;
}

function inicializarModeloJugadores(numJugadores, numCartasPorJugador) {
  const modelo = new Array(numJugadores);
  for (let i = 0; i < numJugadores; i++) {
    modelo[i] = new Array(numCartasPorJugador);
    for (let j = 0; j < numCartasPorJugador; j++) {
      modelo[i][j] = { palo: -1, numero: -1 };
    }
  }
  return modelo;
}

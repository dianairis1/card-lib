export function pintarModeloBaraja(modelo) {
    let html = "";
    // Recorre los palos
    for (let i = 0; i < modelo.length; i++) {
      for (let j = 0; j < modelo[i].length; j++) {
        if (modelo[i][j].repartidaA > -1) {
          html = html + `<img src="./playing-cards-png/${i}-${j + 1}.png">`;
        }
      }
    }
    document.getElementById("modelo").innerHTML = html;
  }

  export function pintarModeloJugadores(modelo) {
    let html = "";
    for (let i = 0; i < modelo.length; i++) {
      html = html + `<h1> Jugador: ${i} </h1>`;
      for (let j = 0; j < modelo[i].length; j++) {
        html =
          html +
          `<img src="./playing-cards-png/${modelo[i][j].palo}-${modelo[i][j]
            .numero + 1}.png">`;
      }
    }

    document.getElementById("modelo").innerHTML = html;
  }
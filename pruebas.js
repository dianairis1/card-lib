const PALOS = 4;
const NUM_CARTAS_POR_PALO = 13;

const modeloCartas = new Array(PALOS);

for (let i = 0; i < modeloCartas.length; i++) {
   modeloCartas[i] = new Array(NUM_CARTAS_POR_PALO);
}

console.log(modeloCartas[2][3]);

// Sin no sabemos de clases
let diana = {
   name: "Diana",
   edad: 30,
};

let jose =  {
   name: "Jose",
   edad: 45,
}

class Person {
   constructor(name, edad){
      this.name = name;
      this.edad= edad;
   }
}

let diana = new Person("diana", 33);

let k = new Person("diana", 33);

let iris = diana

let jose = new Person("Jose", 40);

let a = 7;
let b = a;

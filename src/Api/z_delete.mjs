class Carta {
  constructor(color, codigo, esVisible, valor) {
    this.codigo = codigo; // 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | void | flip | plus2 | plus4 | swapCol
    this.color = color; //Red | Yellow | Green | Blue | Multi
    this.esVisible = esVisible;
    this.valor = valor;
  }
  get cod() {
    return this.codigo;
  }
  get col() {
    return this.color;
  }
  get isVisible() {
    return this.esVisible;
  }
  get value() {
    return this.valor;
  }
  set isVisible(esVisible) {
    this.esVisible = esVisible;
  }
}

//Mixin Pattern (algoritmo flojito para el sorting aleatorio):
let barajar = {
  barajando() {
    this.sort((a, b) => {
      return 0.5 - Math.random();
    });
  },
};

class PilaCartas {
  constructor(cartas, visibles = false) {
    this.cartas = cartas;
    this.visibles = visibles;
  }
  baraja() {}
}

class MazoRobo extends PilaCartas {
  constructor(cartas, visibles = false) {
    super(cartas, visibles);
    Object.assign(cartas.__proto__, barajar);
  }
  baraja() {
    this.cartas.barajando();
  }
}

let carta1 = new Carta("rojo", "0", false, "1");
let carta2 = new Carta("rojo", "0", true, "2");
let carta3 = new Carta("rojo", "0", false, "3");
let mazo = new MazoRobo([carta1, carta2, carta3]);
console.log(mazo);
mazo.baraja();
console.log(mazo);

class MazoDescartes extends PilaCartas {
  constructor(cartas, visibles = true) {
    super(cartas, visibles);
  }
  //   addDescarte(cartas){

  //   }
}

class ManoJugador extends PilaCartas {
  constructor(cartas, visibles = false, numeroMaximo = 7) {
    super(cartas, visibles);
    this.numeroMax = numeroMax;
  }
  //   ordenaCartas(){
  //   }
}

let A = [1, 2, 3, 4];
A.push(5);
console.log(A);
// console.log(
//   A.sort((a, b) => {
//     return 0.5 - Math.random();
//   })
// );
Object.assign(A.__proto__, barajar);
A.barajando();
console.log(A);

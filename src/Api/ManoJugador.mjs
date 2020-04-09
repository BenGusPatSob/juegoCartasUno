import PilaCartas from "./PilaCartas";

export default class ManoJugador extends PilaCartas {
  constructor(cartas, visibles = false, numeroMaximo = 7) {
    super(cartas, visibles);
    this.numeroMax = numeroMax;
    Object.assign(cartas.__proto__, FuncionesPila.barajar); //Mixin Opc1
  }
  //Criterio: porValor | porColor | porCodigo | aleatorio
  ordenaCartas(criterio) {
    switch (criterio.toLowerCase()) {
      case "porvalor":
        this.cartas.sort((a, b) => b.value - a.value);
        break;
      case "porcolor":
        this.cartas = this.cartas.map((f) => f.col).sort();
        break;
      case "porcodigo":
        this.cartas = this.cartas.map((f) => f.cod).sort();
        break;
      case "aleatorio":
        this.cartas.barajando(); //Mixin Opc1
        break;
      default:
        break;
    }
  }
  filtraCartasPorColor(color) {
    let indicesIguales = [];
    this.cartas.forEach((item, index) => {
      item.col == color ? indicesIguales.push(index) : index;
    });
    return indicesIguales;
  }
  filtraCartasPorCodigo(codigo) {
    let indicesIguales = [];
    this.cartas.forEach((item, index) => {
      item.cod == codigo ? indicesIguales.push(index) : index;
    });
    return indicesIguales;
  }
  lanzaCartaPorPosicion(index) {
    return this.cartas.splice(index, 1);
  }
  lanzaCartaPorCodigo(codigo) {
    return this.cartas.splice(this.cartas.indexOf(codigo), 1);
  }
  lanzaCartaPorColor(color) {
    return this.cartas.splice(this.cartas.indexOf(color), 1);
  }
  cogeCarta(cartaToAdd) {
    this.cartas.push(cartaToAdd);
    this.escondeTodas();
  }
  cogeCartas(cartasToAdd) {
    this.cartas.push(...cartasToAdd);
    this.escondeTodas();
  }
  escondeTodas() {
    this.cartas.forEach((elem) => {
      elem.isVisible = this.visibles;
    });
  }
}

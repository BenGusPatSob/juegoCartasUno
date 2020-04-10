import PilaCartas from './PilaCartas.mjs';
import {
  barajar,
  codValorMap,
  codOpc1,
  codOpc2,
} from "../Helpers/HelpersPilaCartas.mjs";

export default class ManoJugador extends PilaCartas {
  constructor(cartas, visibles = false, numeroMaximo = 7) {
    super(cartas, visibles);
    this.numeroMax = numeroMaximo;
    Object.assign(cartas.__proto__, barajar); //Mixin Opc1
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
  calculaValorEnMano() {
    let valores = [];
    this.cartas.map((elem) => valores.push(codValorMap.get(elem.cod)));
    return valores;
  }
  calculaOpciones(cartaReferencia, ronda = 1) {
    if ((ronda = 1)) {
      return codOpc1.get(cartaReferencia.cod);
    } else {
      return codOpc2.get(cartaReferencia.cod);
    }
  }
  filtraSegunCriterioCodCol(cartaReferencia, criterio) {
    switch (criterio.toLowerCase()) {
      case "samecode":
        return this.cartas.filter((elem) => elem.cod == cartaReferencia.cod);
      case "samecolor":
        return this.cartas.filter((elem) => elem.col == cartaReferencia.col);
      case "changecolor":
        return this.cartas.filter((elem) => elem.cod == "swapCol");
      default:
        return null;
    }
  }
}

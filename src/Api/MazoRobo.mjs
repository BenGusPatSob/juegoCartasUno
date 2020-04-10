// import { barajar, barajaCarta } from "./FuncionesPilaCartas.mjs";
import * as FuncionesPila from '../Helpers/HelpersPilaCartas.mjs';
import PilaCartas from './PilaCartas.mjs';

export default class MazoRobo extends PilaCartas {
  constructor(cartas, visibles = false) {
    super(cartas, visibles);
    //Mixin pattern:
    Object.assign(cartas.__proto__, FuncionesPila.barajar); //Mixin Opc1
  }
  baraja() {
    this.cartas.barajando(); //Mixin Opc1
    // barajaCarta(this.cartas); //Mixin Opc2
  }
  robaCarta() {
    return this.reparteCartas(1);
  }
  reparteCarta() {
    return this.reparteCartas(1);
  }
  addCartasAlMazo(cartasToAdd) {
    this.cartas.push(...cartasToAdd);
    this.escondeTodas();
  }
  escondeTodas() {
    this.cartas.forEach((elem) => {
      elem.isVisible = this.visibles;
    });
  }
  reparteCartas(numCartas) {
    let cartasRepartidas = [];
    let numMaxCartasARepartir = Math.min(numCartas, this.cartas.length);
    for (let i = 0; i < numMaxCartasARepartir; i++) {
      cartasRepartidas.push(this.cartas.pop());
    }
    return cartasRepartidas;
  }
}

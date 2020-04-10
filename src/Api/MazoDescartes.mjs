import PilaCartas from './PilaCartas.mjs';

export default class MazoDescartes extends PilaCartas {
  constructor(cartas, visibles = true) {
    super(cartas, visibles);
  }
  addDescarte(carta) {
    this.cartas.push(carta);
    this.cartas[this.cartas.length - 1].isVisible = true;
  }
  muestraTodas() {
    this.cartas.forEach((elem) => {
      elem.isVisible = this.visibles;
    });
  }
  get colVisible() {
    return this.cartas[this.cartas.length - 1].col;
  }
  get codVisible() {
    return this.cartas[this.cartas.length - 1].cod;
  }
}

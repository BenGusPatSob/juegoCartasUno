export default class Carta {
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
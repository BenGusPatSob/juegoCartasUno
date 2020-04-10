import Carta from '../Api/Carta.mjs';
import Jugador from '../Api/Jugador.mjs';
import MazoDescartes from '../Api/MazoDescartes.mjs';
import MazoRobo from '../Api/MazoRobo.mjs';
import BarajaFactory from '../Helpers/FactoriaBarajas.mjs';

//Singleton:
let instaciaPartida = null;

export default class Partida {
  constructor(tipoUno, jugadores, numCartasInicial) {
    //Nos aseguramos de tener una sola instancia de partida (singleton)
    if (!instaciaPartida) {
      this.jugadores = jugadores;
      this.numCartasInicial = numCartasInicial;
      let factoriaBarajas = new BarajaFactory();
      this.MazoRobo = new MazoRobo(factoriaBarajas.creaBaraja(tipoUno).cartas);
      this.MazoRobo.baraja();
      this.MazoDescartes = new MazoDescartes([], true);
      this.MazoDescartes.addDescarte(this.MazoRobo.robaCarta());
      this.cartaVisible = null;
      this.round = 1;
      this.ganador = null;
      this.finalizada = false;
      this.jugadorActivo = 0;
    } else {
      return instanciaPartida;
    }
  }
  /**
   * @param {Jugador[]} jugadores
   */
  incluyeJugadores(jugadores) {
    this.jugadores.push(...jugadores);
  }
  /**
   * @param {Carta} carta
   */
  set actualizaCartaVisible(carta) {
    this.cartaVisible = carta;
  }
  get muestraCartaVisible() {
    return this.cartaVisible;
  }
  chequeaUnosDefensa() {
    this.jugadores.map(
      (elem) =>
        (elem.cartasDeLaMano.cartas.length = 0
          ? elem.cogeCartas(MazoRobo.reparteCartas(2))
          : elem)
    );
  }
  desconectaUnosDefensa() {
    this.jugadores.map((elem) => (elem.unoDefensaActivo = false));
  }
  declaraGanador(jugador) {
    this.ganador = jugador;
    this.finalizada = true;
    this.calculaClasificacion();
  }
  calculaClasificacion() {
    if (!this.ganador) {
      this.jugadores
        .forEach((jug) => jug.actualizaValorTotalAcumulado())
        .sort((a, b) => a.valorTotalCartas - b.valorTotalCartas);
    }
  }
  reparteCartas() {
    for (let i = 0; i < this.numCartasInicial; i++) {
      this.jugadores.forEach((jugador) => {
        jugador.cartasDeLaMano.cogeCarta(this.MazoRobo.reparteCartas(1));
      });
    }
    this.jugadores.forEach((jug) => jug.cartasDeLaMano.escondeTodas());
  }
  getJugadorActivo(){
    return this.jugadores[this.jugadorActivo];
  }
  avanzaJugadorActivo() {
    this.jugadorActivo =
      this.jugadorActivo + 1 == this.jugadores.length
        ? 0
        : this.jugadorActivo + 1;
  }
  // retrocedeJugadorActivo() {
  //   this.jugadorActivo =
  //     this.jugadorActivo - 1 < 0
  //       ? this.jugadores.length - 1
  //       : this.jugadorActivo - 1;
  // }
  getDesafiante() {
    let jugadorDesafiante = this.jugadorActivo - 1 < 0
      ? this.jugadores.length - 1
      : this.jugadorActivo - 1;
  }

  changeDirection() {
    this.jugadores.reverse();
    this.jugadorActivo = this.jugadores.length - this.jugadorActivo;
  }
}

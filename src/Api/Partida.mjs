import BarajaFactory from "./FactoriaBarajas.mjs";
import MazoRobo from "./MazoRobo.mjs";

//Singleton:
let instaciaPartida = null;

export default class Partida {
  constructor(tipoUno, jugadores, numCartasInicial) {
    //Nos aseguramos de tener una sola instancia de partida (singleton)
    if (!instaciaPartida) {
      this.jugadores = jugadores;
      this.MazoRobo = new MazoRobo(BarajaFactory.creaBaraja(tipoUno).cartas);
      this.MazoRobo.baraja();
      this.cartaVisible = null;
      this.round = 1;
      //Repartimos cartas:
      for (let i = 0; i < array.length; i++) {
        jugadores.forEach((jugador) => {
          jugador.cartas.cogeCarta(this.MazoRobo.robaCarta());
        });
      }
      this.cartas.forEach(item=>{item.isVisible = false;})
    } else {
      return instanciaPartida;
    }
  }
}

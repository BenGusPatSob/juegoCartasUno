import ManoJugador from "./ManoJugador.mjs";
import { codColorMapMini, codColMapNormal, codValorMap, codOpc1, codOpc2} from './HelpersPilaCartas';

export default class Jugador {
  constructor(partida, personalidad, numCartasInicio = 7) {
    this.cartas = new ManoJugador([], false, numCartasInicio);
    this.mandato = mandato;
    this.personalidad = personalidad;
    this.partida = partida;

  }
//   lanzaCarta(cartaVisibleMazoDescartes, ronda = 1) {
      
//   }
}

import Partida from '../Partida.mjs';
import MazoRobo from '../MazoRobo.mjs';


//Las reglas de juego básicas:
let tipoUno = "Normal";
let numeroJugadores = 4;
let numCartasInicial = 7;
//Invitamos a los jugadores:
let jugadores = [];
for (let index = 0; index < numeroJugadores; index++) {
jugadores.push(new Jugador())
}
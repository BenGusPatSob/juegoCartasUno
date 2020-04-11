import Partida from "./src/Impl/Partida.mjs";
import Jugador from "./src/Api/Jugador.mjs";

// const p = document.createElement('p');
// p.textContent = 'Jugando al UNO';
// document.body.appendChild(p);

//Las reglas de juego básicas:
let tipoUno = "Normal";
let numeroJugadores = 4;
let numCartasInicial = 7;
//Creamos partida:
let partida = new Partida(tipoUno, [], numCartasInicial); //Crea la baraja barajeada
//Invitamos a los jugadores:
let jugadores = [];
let personalidades = [
  "tranquilo_calculador",
  "mentiroso_despistado",
  "agresivo_centrado",
  "desconocida",
];
for (let i = 0; i < numeroJugadores; i++) {
  jugadores.push(new Jugador(partida, personalidades[i], numCartasInicial));
}
partida.incluyeJugadores(jugadores);
//Repartimos cartas:
partida.reparteCartas();
let jugadorActivo = 0;
do{
  partida.jugadores[partida.jugadorActivo].lanzaOCogeCarta(partida.MazoDescartes.cartas[partida.MazoDescartes.cartas.length-1][0]);
} while (partida.ganador == null);

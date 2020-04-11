import ManoJugador from "./ManoJugador.mjs";

export default class Jugador {
  constructor(partida, personalidad, numCartasInicio = 7, nombre = "") {
    this.cartasDeLaMano = new ManoJugador([], false, numCartasInicio);
    this.personalidad = personalidad;
    this.partida = partida;
    this.nombre = nombre;
    this.valorTotalCartas = this.cartasDeLaMano.calculaValorEnMano();
    this.tengoUna = this.cartasDeLaMano.cartas.length = 1;
    this.unoDefensaActivo = false;
  }
  gritoUnoDefensa() {
    this.unoDefensaActivo = this.cartasDeLaMano.cartas.length = 1
      ? true
      : false;
  }
  gritoUnoAtaque() {
    this.partida.chequeaUnosDefensa();
  }
  cogeCarta(cartaToAdd) {
    this.cartasDeLaMano.cogeCarta(cartaToAdd);
    this.tengoUna = false;
    this.unoDefensaActivo = false;
    this.cartasDeLaMano.calculaValorEnMano();
  }
  cogeCartas(cartasToAdd) {
    this.cartasDeLaMano.cogeCartas(cartasToAdd);
    this.tengoUna = false;
    this.unoDefensaActivo = false;
    this.cartasDeLaMano.calculaValorEnMano();
  }
  eresFarolero(cartaReferencia) {
    let diceLaVerdad = this.cartasDeLaMano.find(
      (x) => x.col == cartaReferencia.col
    );
    return diceLaVerdad == undefined ? true : false;
  }
  lanzaOCogeCarta(cartaVisibleMazoDescartes, ronda = this.partida.round) {
    let cartasElegidas = null;
    let cartaElegida = null;
    let opciones = this.cartasDeLaMano.calculaOpciones(
      cartaVisibleMazoDescartes,
      ronda
    );
    if (opciones.length > 0) {
      let opcionElegida = opciones[Math.floor(Math.random() * opciones.length)];
      switch (opcionElegida.toLowerCase()) {
        case "samecode":
          cartasElegidas = this.cartasDeLaMano.filtraSegunCriterioCodCol(
            cartaVisibleMazoDescartes,
            "sameCode"
          );
          break;
        case "samecolor":
          cartasElegidas = this.cartasDeLaMano.filtraSegunCriterioCodCol(
            cartaVisibleMazoDescartes,
            "sameColor"
          );
          break;
        case "changecolor":
          cartasElegidas = this.cartasDeLaMano.filtraSegunCriterioCodCol(
            cartaVisibleMazoDescartes,
            "changeColor"
          );
          break;
        case "skip":
          cartasElegidas = [];
          this.partida.avanzaJugadorActivo();
          this.partida.jugadores[this.partida.jugadorActivo].lanzaOCogeCarta(
            cartaVisibleMazoDescartes,
            2
          );
          break;
        case "pick1":
          cartasElegidas = [];
          this.cartasDeLaMano.cogeCarta(this.partida.MazoRobo.robaCarta());
          this.partida.avanzaJugadorActivo();
          break;
        case "pick2":
          cartasElegidas = [];
          this.cartasDeLaMano.cogeCartas(
            this.partida.MazoRobo.reparteCartas(2)
          );
          this.partida.avanzaJugadorActivo();
          this.partida.jugadores[this.partida.jugadorActivo].lanzaOCogeCarta(
            cartaVisibleMazoDescartes,
            2
          );
          break;
        case "pick4":
          cartasElegidas = [];
          this.cartasDeLaMano.cogeCartas(
            this.partida.MazoRobo.reparteCartas(4)
          );
          this.partida.avanzaJugadorActivo();
          this.partida.jugadores[this.partida.jugadorActivo].lanzaOCogeCarta(cartaVisibleMazoDescartes, 2);
          break;
        case "startduel":
          let faroleroPringa =
            this.partida.jugadores[this.partida.getDesafiante()].eresFarolero(
              cartaVisibleMazoDescartes
            ) == false
              ? this.cartasDeLaMano.cogeCartas(
                  this.partida.MazoRobo.reparteCartas(6)
                )
              : this.partida.jugadores[
                  this.partida.getDesafiante()
                ].cartasDeLaMano.cogeCartas(
                  this.partida.MazoRobo.reparteCartas(6)
                );
          cartasElegidas = [];
          break;
      }
      cartaElegida =
        cartasElegidas.length > 0
          ? cartasElegidas[Math.floor(Math.random() * cartasElegidas.length)]
          : null;
      if (cartaElegida != null) {
        this.cartasDeLaMano.cartas.splice(
          this.cartasDeLaMano.cartas.findIndex(x=>x===cartaElegida),
          1
        );
        this.cartasDeLaMano.calculaValorEnMano();
        this.partida.MazoDescartes.addDescarte(cartaElegida);
        // this.partida.actualizaCartaVisible(cartaElegida);
      }
    } //No hay opciones (puede pasar en la 2a ronda)
    else {
    }
    if (this.cartasDeLaMano.cartas.length == 0) {
      this.partida.declaraGanador(this);
    }
    // if(this.cartasDeLaMano.cartas.length == 1){ this.gritoUnoDefensa()}
    return cartaElegida;
  }
  actualizaValorTotalAcumulado() {
    return this.cartasDeLaMano.calculaValorEnMano();
  }
}

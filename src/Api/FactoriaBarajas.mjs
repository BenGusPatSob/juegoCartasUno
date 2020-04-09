import PilaCartas from "./PilaCartas.mjs";
import {codColMapMini, codColMapNormal, codValorMap} from "./HelpersPilaCartas.mjs";
import Carta from "./Carta.mjs";

//tipoUno: Mini | Normal
export default class BarajaFactory {
  creaBaraja(tipoUno) {
    return new PilaCartas(generadorCartas(tipoUno));
  }
}

let generadorCartas = (tipoUno) => {
  let cartas = [];
  switch (tipoUno.toLowerCase()) {
    case "mini":
      for (let k of codColMapMini.keys()) {
        // constructor(color, codigo, esVisible, valor);
        let colores = codColMapMini.get(k);
        for (let index = 0; index < colores.length; index++) {
          cartas.push(new Carta(colores[index], k, false, codValorMap.get(k)));
        }
      }
      return cartas;
    case "normal":
      for (let k of codColMapNormal.keys()) {
        // constructor(color, codigo, esVisible, valor);
        let colores = codColMapNormal.get(k);
        for (let index = 0; index < colores.length; index++) {
          cartas.push(new Carta(colores[index], k, false, codValorMap.get(k)));
        }
      }
      return cartas;
    default:
      break;
  }
};


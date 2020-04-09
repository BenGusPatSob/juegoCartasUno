//Mixin Opc1 Pattern (algoritmo flojito para el sorting aleatorio):
export const barajar = {
  barajando() {
    this.sort((a, b) => {
      return 0.5 - Math.random();
    });
  },
};

//Mixin Opc2:
// export function barajaCarta(lista) {

//     lista.sort((a, b) => {
//       return 0.5 - Math.random();
//     });

// }

const codValor = new Map([
  ["0", 0],
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
  ["void", 20],
  ["plus2", 20],
  ["flip", 20],
  ["plus4", 50],
  ["swapCol", 50],
]);

const codColor_UnoNormal = new Map([
  ["0", ["Red", "Yellow", "Green", "Blue"]],
  ["1", ["Red", "Yellow", "Green", "Blue", "Red", "Yellow", "Green", "Blue"]],
  ["2", ["Red", "Yellow", "Green", "Blue", "Red", "Yellow", "Green", "Blue"]],
  ["3", ["Red", "Yellow", "Green", "Blue", "Red", "Yellow", "Green", "Blue"]],
  ["4", ["Red", "Yellow", "Green", "Blue", "Red", "Yellow", "Green", "Blue"]],
  ["5", ["Red", "Yellow", "Green", "Blue", "Red", "Yellow", "Green", "Blue"]],
  ["6", ["Red", "Yellow", "Green", "Blue", "Red", "Yellow", "Green", "Blue"]],
  ["7", ["Red", "Yellow", "Green", "Blue", "Red", "Yellow", "Green", "Blue"]],
  ["8", ["Red", "Yellow", "Green", "Blue", "Red", "Yellow", "Green", "Blue"]],
  ["9", ["Red", "Yellow", "Green", "Blue", "Red", "Yellow", "Green", "Blue"]],
  ["void", ["Red", "Yellow", "Green", "Blue", "Red", "Yellow", "Green", "Blue"]],
  ["plus2",["Red", "Yellow", "Green", "Blue", "Red", "Yellow", "Green", "Blue"]],
  ["flip", ["Red", "Yellow", "Green", "Blue", "Red", "Yellow", "Green", "Blue"]],
  ["plus4", ["Multi", "Multi", "Multi", "Multi"]],
  ["swapCol", ["Multi", "Multi", "Multi", "Multi"]],
]);

const codColor_UnoMini = new Map([
  ["0", ["Red", "Yellow", "Green", "Blue"]],
  ["1", ["Red", "Yellow", "Green", "Blue"]],
  ["2", ["Red", "Yellow", "Green", "Blue"]],
  ["3", ["Red", "Yellow", "Green", "Blue"]],
  ["4", ["Red", "Yellow", "Green", "Blue"]],
  ["5", ["Red", "Yellow", "Green", "Blue"]],
  ["6", ["Red", "Yellow", "Green", "Blue"]],
  ["7", ["Red", "Yellow", "Green", "Blue"]],
  ["8", ["Red", "Yellow", "Green", "Blue"]],
  ["9", ["Red", "Yellow", "Green", "Blue"]],
  ["void", ["Red", "Yellow", "Green", "Blue"]],
  ["plus2", ["Red", "Yellow", "Green", "Blue"]],
  ["flip", ["Red", "Yellow", "Green", "Blue"]],
  ["plus4", ["Multi", "Multi"]],
  ["swapCol", ["Multi", "Multi"]],
]);
//Opciones: sameColor | sameCode | changeDir | changeColor | skipTurn | pick1 | pick2 | pick4 | pick6 | startDuel | wait | skip | sleep
const codOpcion1round = new Map([
  ["0", ["sameColor", "sameCode", "pick1", "changeColor", ]],
  ["1", ["sameColor", "sameCode", "pick1", "changeColor", ]],
  ["2", ["sameColor", "sameCode", "pick1", "changeColor", ]],
  ["3", ["sameColor", "sameCode", "pick1", "changeColor", ]],
  ["4", ["sameColor", "sameCode", "pick1", "changeColor", ]],
  ["5", ["sameColor", "sameCode", "pick1", "changeColor", ]],
  ["6", ["sameColor", "sameCode", "pick1", "changeColor", ]],
  ["7", ["sameColor", "sameCode", "pick1", "changeColor", ]],
  ["8", ["sameColor", "sameCode", "pick1", "changeColor", ]],
  ["9", ["sameColor", "sameCode", "pick1", "changeColor", ]],
  ["void",  ["skip"]],
  ["plus2", ["pick2"]],
  ["flip",  ["sameColor", "changeColor", "pick1"]],
  ["plus4", ["pick4", "startDuel"]],
  ["swapCol", ["sameColor", "pick1", "changeColor"]],
]);
const codOpcion2round = new Map([
  ["0", []],
  ["1", []],
  ["2", []],
  ["3", []],
  ["4", []],
  ["5", []],
  ["6", []],
  ["7", []],
  ["8", []],
  ["9", []],
  ["void",  ["sameColor", "sameCode", "pick1", "changeColor"]],
  ["plus2", ["sameColor", "sameCode", "pick1", "changeColor"]],
  ["flip", []],
  ["plus4", ["pick6", "skip"]],
  ["swapCol", []],
]);

export {
  codColor_UnoMini as codColMapMini,
  codColor_UnoNormal as codColMapNormal,
  codValor as codValorMap,
  codOpcion1round as codOpc1,
  codOpcion2round as codOpc2
};

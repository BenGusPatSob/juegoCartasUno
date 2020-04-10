import Carta from '../Api/Carta.mjs';
import { barajar } from '../HelpersPilaCartas.mjs';
import MazoRobo from '../Api/MazoRobo.mjs';
///////////////////////////////////////////////////////////Prueba sobre el array:
let A = [1, 2, 3, 4];
A.push(5);
console.log(A);
// console.log(
//   A.sort((a, b) => {
//     return 0.5 - Math.random();
//   })
// );
Object.assign(A.__proto__, barajar);
A.barajando();
console.log(A);
console.log(A[A.length - 1]);
A.push(...[2, 3, 4]);
console.log(A);
let B = [];
let longA = A.length;
for (let i = 0; i < longA; i++) {
  B.push(A.pop());
}
console.log(`B: ${B}`);
console.log(...B);

///////////////////////////////////////////////////////////Prueba de barajar sobre mazo robo:
let carta1 = new Carta("rojo", "0", false, "1");
let carta2 = new Carta("rojo", "0", true, "2");
carta2.isVisible = false;
let carta3 = new Carta("rojo", "0", false, "3");
let mazo = new MazoRobo([carta1, carta2, carta3]);
console.log(mazo);
mazo.baraja();
console.log(mazo);

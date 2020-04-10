/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.mjs":
/*!*******************!*\
  !*** ./index.mjs ***!
  \*******************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Impl_Partida_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Impl/Partida.mjs */ \"./src/Impl/Partida.mjs\");\n/* harmony import */ var _src_Api_Jugador_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Api/Jugador.mjs */ \"./src/Api/Jugador.mjs\");\n\n\n\n// const p = document.createElement('p');\n// p.textContent = 'Jugando al UNO';\n// document.body.appendChild(p);\n\n//Las reglas de juego básicas:\nlet tipoUno = \"Normal\";\nlet numeroJugadores = 4;\nlet numCartasInicial = 7;\n//Creamos partida:\nlet partida = new _src_Impl_Partida_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"](tipoUno, [], numCartasInicial); //Crea la baraja barajeada\n//Invitamos a los jugadores:\nlet jugadores = [];\nlet personalidades = [\n  \"tranquilo_calculador\",\n  \"mentiroso_despistado\",\n  \"agresivo_centrado\",\n  \"desconocida\",\n];\nfor (let i = 0; i < numeroJugadores; i++) {\n  jugadores.push(new _src_Api_Jugador_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"](partida, personalidades[i], numCartasInicial));\n}\npartida.incluyeJugadores(jugadores);\n//Repartimos cartas:\npartida.reparteCartas();\n\n\n//# sourceURL=webpack:///./index.mjs?");

/***/ }),

/***/ "./src/Api/Carta.mjs":
/*!***************************!*\
  !*** ./src/Api/Carta.mjs ***!
  \***************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Carta; });\nclass Carta {\n  constructor(color, codigo, esVisible, valor) {\n    this.codigo = codigo; // 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | void | flip | plus2 | plus4 | swapCol\n    this.color = color; //Red | Yellow | Green | Blue | Multi\n    this.esVisible = esVisible;\n    this.valor = valor;\n  }\n  get cod() {\n    return this.codigo;\n  }\n  get col() {\n    return this.color;\n  }\n  get isVisible() {\n    return this.esVisible;\n  }\n  get value() {\n    return this.valor;\n  }\n  set isVisible(esVisible) {\n    this.esVisible = esVisible;\n  }\n}\n\n//# sourceURL=webpack:///./src/Api/Carta.mjs?");

/***/ }),

/***/ "./src/Api/Jugador.mjs":
/*!*****************************!*\
  !*** ./src/Api/Jugador.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Jugador; });\n/* harmony import */ var _ManoJugador_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManoJugador.mjs */ \"./src/Api/ManoJugador.mjs\");\n\n\nclass Jugador {\n  constructor(partida, personalidad, numCartasInicio = 7, nombre = \"\") {\n    this.cartasDeLaMano = new _ManoJugador_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([], false, numCartasInicio);\n    this.personalidad = personalidad;\n    this.partida = partida;\n    this.nombre = nombre;\n    this.valorTotalCartas = this.cartasDeLaMano.calculaValorEnMano();\n    this.tengoUna = this.cartasDeLaMano.cartas.length = 1;\n    this.unoDefensaActivo = false;\n  }\n  gritoUnoDefensa() {\n    this.unoDefensaActivo = this.cartasDeLaMano.cartas.length = 1\n      ? true\n      : undefined;\n  }\n  gritoUnoAtaque() {\n    this.partida.chequeaUnosDefensa();\n  }\n  cogeCarta(cartaToAdd) {\n    this.cartasDeLaMano.cogeCarta(cartaToAdd);\n    this.tengoUna = false;\n    this.unoDefensaActivo = false;\n    this.cartasDeLaMano.calculaValorEnMano();\n  }\n  cogeCartas(cartasToAdd) {\n    this.cartasDeLaMano.cogeCartas(cartasToAdd);\n    this.tengoUna = false;\n    this.unoDefensaActivo = false;\n    this.cartasDeLaMano.calculaValorEnMano();\n  }\n  eresFarolero(cartaReferencia) {\n    let diceLaVerdad = this.cartasDeLaMano.find(\n      (x) => x.col == cartaReferencia.col\n    );\n    return diceLaVerdad == undefined ? true : false;\n  }\n  lanzaOCogeCarta(cartaVisibleMazoDescartes, ronda = this.partida.round) {\n    let cartasElegidas = null;\n    let cartaElegida = null;\n    let opciones = this.cartasDeLaMano.calculaOpciones(\n      this.partida.cartaVisible,\n      ronda\n    );\n    if (opciones.length > 0) {\n      let opcionElegida = opciones[Math.floor(Math.random() * opciones.length)];\n      switch (opcionElegida.toLowerCase()) {\n        case \"samecode\":\n          cartasElegidas = this.cartasDeLaMano.filtraSegunCriterioCodCol(\n            cartaVisibleMazoDescartes,\n            \"sameCode\"\n          );\n          break;\n        case \"samecolor\":\n          cartasElegidas = this.cartasDeLaMano.filtraSegunCriterioCodCol(\n            cartaVisibleMazoDescartes,\n            \"sameColor\"\n          );\n          break;\n        case \"changecolor\":\n          cartasElegidas = this.cartasDeLaMano.filtraSegunCriterioCodCol(\n            cartaVisibleMazoDescartes,\n            \"changeColor\"\n          );\n          break;\n        case \"skip\":\n          cartasElegidas = [];\n          this.partida.avanzaJugadorActivo();\n          this.partida\n            .getJugadorActivo()\n            .lanzaOCogeCarta(cartaVisibleMazoDescartes, 2);\n          break;\n        case \"pick1\":\n          cartasElegidas = [];\n          this.cartasDeLaMano.cogeCarta(this.partida.MazoRobo.robaCarta());\n          break;\n        case \"pick2\":\n          cartasElegidas = [];\n          this.cartasDeLaMano.cogeCartas(\n            this.partida.MazoRobo.reparteCartas(2)\n          );\n          break;\n        case \"pick4\":\n          cartasElegidas = [];\n          this.cartasDeLaMano.cogeCartas(\n            this.partida.MazoRobo.reparteCartas(4)\n          );\n          break;\n        case \"startduel\":\n          let faroleroPringa =\n            this.partida.jugadores[this.partida.getDesafiante()].eresFarolero(\n              cartaVisibleMazoDescartes\n            ) == false\n              ? this.cartasDeLaMano.cogeCartas(\n                  this.partida.MazoRobo.reparteCartas(6)\n                )\n              : this.partida.jugadores[\n                  this.partida.getDesafiante()\n                ].cartasDeLaMano.cogeCartas(\n                  this.partida.MazoRobo.reparteCartas(6)\n                );\n          cartasElegidas = [];\n          break;\n      }\n      cartaElegida =\n        cartasElegidas.length > 0\n          ? cartasElegidas[Math.floor(Math.random() * cartasElegidas.length)]\n          : null;\n      if (cartaElegida != null) {\n        this.cartasDeLaMano.splice(\n          this.cartasDeLaMano.indexOf(cartaElegida),\n          1\n        );\n        this.cartasDeLaMano.calculaValorEnMano();\n        this.partida.MazoDescartes.addDescarte(cartaElegida);\n        this.partida.actualizaCartaVisible(cartaElegida);\n      }\n    } //No hay opciones (puede pasar en la 2a ronda)\n    else {\n    }\n    if (this.cartasDeLaMano.cartas.length == 0) {\n      this.partida.declaraGanador(this);\n    }\n    // if(this.cartasDeLaMano.cartas.length == 1){ this.gritoUnoDefensa()}\n    return cartaElegida;\n  }\n  actualizaValorTotalAcumulado() {\n    return this.cartasDeLaMano.calculaValorEnMano();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Api/Jugador.mjs?");

/***/ }),

/***/ "./src/Api/ManoJugador.mjs":
/*!*********************************!*\
  !*** ./src/Api/ManoJugador.mjs ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ManoJugador; });\n/* harmony import */ var _PilaCartas_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PilaCartas.mjs */ \"./src/Api/PilaCartas.mjs\");\n/* harmony import */ var _Helpers_HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helpers/HelpersPilaCartas.mjs */ \"./src/Helpers/HelpersPilaCartas.mjs\");\n\n\n\nclass ManoJugador extends _PilaCartas_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(cartas, visibles = false, numeroMaximo = 7) {\n    super(cartas, visibles);\n    this.numeroMax = numeroMaximo;\n    Object.assign(cartas.__proto__, _Helpers_HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__[\"barajar\"]); //Mixin Opc1\n  }\n  //Criterio: porValor | porColor | porCodigo | aleatorio\n  ordenaCartas(criterio) {\n    switch (criterio.toLowerCase()) {\n      case \"porvalor\":\n        this.cartas.sort((a, b) => b.value - a.value);\n        break;\n      case \"porcolor\":\n        this.cartas = this.cartas.map((f) => f.col).sort();\n        break;\n      case \"porcodigo\":\n        this.cartas = this.cartas.map((f) => f.cod).sort();\n        break;\n      case \"aleatorio\":\n        this.cartas.barajando(); //Mixin Opc1\n        break;\n      default:\n        break;\n    }\n  }\n  filtraCartasPorColor(color) {\n    let indicesIguales = [];\n    this.cartas.forEach((item, index) => {\n      item.col == color ? indicesIguales.push(index) : index;\n    });\n    return indicesIguales;\n  }\n  filtraCartasPorCodigo(codigo) {\n    let indicesIguales = [];\n    this.cartas.forEach((item, index) => {\n      item.cod == codigo ? indicesIguales.push(index) : index;\n    });\n    return indicesIguales;\n  }\n  lanzaCartaPorPosicion(index) {\n    return this.cartas.splice(index, 1);\n  }\n  lanzaCartaPorCodigo(codigo) {\n    return this.cartas.splice(this.cartas.indexOf(codigo), 1);\n  }\n  lanzaCartaPorColor(color) {\n    return this.cartas.splice(this.cartas.indexOf(color), 1);\n  }\n  cogeCarta(cartaToAdd) {\n    this.cartas.push(cartaToAdd);\n    this.escondeTodas();\n  }\n  cogeCartas(cartasToAdd) {\n    this.cartas.push(...cartasToAdd);\n    this.escondeTodas();\n  }\n  escondeTodas() {\n    this.cartas.forEach((elem) => {\n      elem.isVisible = this.visibles;\n    });\n  }\n  calculaValorEnMano() {\n    let valores = [];\n    this.cartas.map((elem) => valores.push(_Helpers_HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__[\"codValorMap\"].get(elem.cod)));\n    return valores;\n  }\n  calculaOpciones(cartaReferencia, ronda = 1) {\n    if ((ronda = 1)) {\n      return _Helpers_HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__[\"codOpc1\"].get(cartaReferencia.cod);\n    } else {\n      return _Helpers_HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__[\"codOpc2\"].get(cartaReferencia.cod);\n    }\n  }\n  filtraSegunCriterioCodCol(cartaReferencia, criterio) {\n    switch (criterio.toLowerCase()) {\n      case \"samecode\":\n        return this.cartas.filter((elem) => elem.cod == cartaReferencia.cod);\n      case \"samecolor\":\n        return this.cartas.filter((elem) => elem.col == cartaReferencia.col);\n      case \"changecolor\":\n        return this.cartas.filter((elem) => elem.cod == \"swapCol\");\n      default:\n        return null;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Api/ManoJugador.mjs?");

/***/ }),

/***/ "./src/Api/MazoDescartes.mjs":
/*!***********************************!*\
  !*** ./src/Api/MazoDescartes.mjs ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MazoDescartes; });\n/* harmony import */ var _PilaCartas_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PilaCartas.mjs */ \"./src/Api/PilaCartas.mjs\");\n\n\nclass MazoDescartes extends _PilaCartas_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(cartas, visibles = true) {\n    super(cartas, visibles);\n  }\n  addDescarte(carta) {\n    this.cartas.push(carta);\n    this.cartas[this.cartas.length - 1].isVisible = true;\n  }\n  muestraTodas() {\n    this.cartas.forEach((elem) => {\n      elem.isVisible = this.visibles;\n    });\n  }\n  get colVisible() {\n    return this.cartas[this.cartas.length - 1].col;\n  }\n  get codVisible() {\n    return this.cartas[this.cartas.length - 1].cod;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Api/MazoDescartes.mjs?");

/***/ }),

/***/ "./src/Api/MazoRobo.mjs":
/*!******************************!*\
  !*** ./src/Api/MazoRobo.mjs ***!
  \******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MazoRobo; });\n/* harmony import */ var _Helpers_HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helpers/HelpersPilaCartas.mjs */ \"./src/Helpers/HelpersPilaCartas.mjs\");\n/* harmony import */ var _PilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PilaCartas.mjs */ \"./src/Api/PilaCartas.mjs\");\n// import { barajar, barajaCarta } from \"./FuncionesPilaCartas.mjs\";\n\n\n\nclass MazoRobo extends _PilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(cartas, visibles = false) {\n    super(cartas, visibles);\n    //Mixin pattern:\n    Object.assign(cartas.__proto__, _Helpers_HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_0__[\"barajar\"]); //Mixin Opc1\n  }\n  baraja() {\n    this.cartas.barajando(); //Mixin Opc1\n    // barajaCarta(this.cartas); //Mixin Opc2\n  }\n  robaCarta() {\n    return this.reparteCartas(1);\n  }\n  reparteCarta() {\n    return this.reparteCartas(1);\n  }\n  addCartasAlMazo(cartasToAdd) {\n    this.cartas.push(...cartasToAdd);\n    this.escondeTodas();\n  }\n  escondeTodas() {\n    this.cartas.forEach((elem) => {\n      elem.isVisible = this.visibles;\n    });\n  }\n  reparteCartas(numCartas) {\n    let cartasRepartidas = [];\n    let numMaxCartasARepartir = Math.min(numCartas, this.cartas.length);\n    for (let i = 0; i < numMaxCartasARepartir; i++) {\n      cartasRepartidas.push(this.cartas.pop());\n    }\n    return cartasRepartidas;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Api/MazoRobo.mjs?");

/***/ }),

/***/ "./src/Api/PilaCartas.mjs":
/*!********************************!*\
  !*** ./src/Api/PilaCartas.mjs ***!
  \********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PilaCartas; });\nclass PilaCartas {\n  constructor(cartas, visibles = false) {\n    this.cartas = cartas;\n    this.visibles = visibles;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Api/PilaCartas.mjs?");

/***/ }),

/***/ "./src/Helpers/FactoriaBarajas.mjs":
/*!*****************************************!*\
  !*** ./src/Helpers/FactoriaBarajas.mjs ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BarajaFactory; });\n/* harmony import */ var _Api_PilaCartas_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/PilaCartas.mjs */ \"./src/Api/PilaCartas.mjs\");\n/* harmony import */ var _HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelpersPilaCartas.mjs */ \"./src/Helpers/HelpersPilaCartas.mjs\");\n/* harmony import */ var _Api_Carta_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/Carta.mjs */ \"./src/Api/Carta.mjs\");\n\n\n\n\n\n//tipoUno: Mini | Normal\nclass BarajaFactory {\n  creaBaraja(tipoUno) {\n    return new _Api_PilaCartas_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"](generadorCartas(tipoUno));\n  }\n}\n\nlet generadorCartas = (tipoUno) => {\n  let cartas = [];\n  switch (tipoUno.toLowerCase()) {\n    case \"mini\":\n      for (let k of _HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__[\"codColMapMini\"].keys()) {\n        // constructor(color, codigo, esVisible, valor);\n        let colores = _HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__[\"codColMapMini\"].get(k);\n        for (let index = 0; index < colores.length; index++) {\n          cartas.push(new _Api_Carta_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"](colores[index], k, false, _HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__[\"codValorMap\"].get(k)));\n        }\n      }\n      return cartas;\n    case \"normal\":\n      for (let k of _HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__[\"codColMapNormal\"].keys()) {\n        // constructor(color, codigo, esVisible, valor);\n        let colores = _HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__[\"codColMapNormal\"].get(k);\n        for (let index = 0; index < colores.length; index++) {\n          cartas.push(new _Api_Carta_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"](colores[index], k, false, _HelpersPilaCartas_mjs__WEBPACK_IMPORTED_MODULE_1__[\"codValorMap\"].get(k)));\n        }\n      }\n      return cartas;\n    default:\n      break;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/Helpers/FactoriaBarajas.mjs?");

/***/ }),

/***/ "./src/Helpers/HelpersPilaCartas.mjs":
/*!*******************************************!*\
  !*** ./src/Helpers/HelpersPilaCartas.mjs ***!
  \*******************************************/
/*! exports provided: barajar, codColMapMini, codColMapNormal, codValorMap, codOpc1, codOpc2 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barajar\", function() { return barajar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"codColMapMini\", function() { return codColor_UnoMini; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"codColMapNormal\", function() { return codColor_UnoNormal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"codValorMap\", function() { return codValor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"codOpc1\", function() { return codOpcion1round; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"codOpc2\", function() { return codOpcion2round; });\n//Mixin Opc1 Pattern (algoritmo flojito para el sorting aleatorio):\nconst barajar = {\n  barajando() {\n    this.sort((a, b) => {\n      return 0.5 - Math.random();\n    });\n  },\n};\n\n//Mixin Opc2:\n// export function barajaCarta(lista) {\n\n//     lista.sort((a, b) => {\n//       return 0.5 - Math.random();\n//     });\n\n// }\n\nconst codValor = new Map([\n  [\"0\", 0],\n  [\"1\", 1],\n  [\"2\", 2],\n  [\"3\", 3],\n  [\"4\", 4],\n  [\"5\", 5],\n  [\"6\", 6],\n  [\"7\", 7],\n  [\"8\", 8],\n  [\"9\", 9],\n  [\"void\", 20],\n  [\"plus2\", 20],\n  [\"flip\", 20],\n  [\"plus4\", 50],\n  [\"swapCol\", 50],\n]);\n\nconst codColor_UnoNormal = new Map([\n  [\"0\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"1\", [\"Red\", \"Yellow\", \"Green\", \"Blue\", \"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"2\", [\"Red\", \"Yellow\", \"Green\", \"Blue\", \"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"3\", [\"Red\", \"Yellow\", \"Green\", \"Blue\", \"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"4\", [\"Red\", \"Yellow\", \"Green\", \"Blue\", \"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"5\", [\"Red\", \"Yellow\", \"Green\", \"Blue\", \"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"6\", [\"Red\", \"Yellow\", \"Green\", \"Blue\", \"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"7\", [\"Red\", \"Yellow\", \"Green\", \"Blue\", \"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"8\", [\"Red\", \"Yellow\", \"Green\", \"Blue\", \"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"9\", [\"Red\", \"Yellow\", \"Green\", \"Blue\", \"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"void\", [\"Red\", \"Yellow\", \"Green\", \"Blue\", \"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"plus2\",[\"Red\", \"Yellow\", \"Green\", \"Blue\", \"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"flip\", [\"Red\", \"Yellow\", \"Green\", \"Blue\", \"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"plus4\", [\"Multi\", \"Multi\", \"Multi\", \"Multi\"]],\n  [\"swapCol\", [\"Multi\", \"Multi\", \"Multi\", \"Multi\"]],\n]);\n\nconst codColor_UnoMini = new Map([\n  [\"0\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"1\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"2\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"3\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"4\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"5\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"6\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"7\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"8\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"9\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"void\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"plus2\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"flip\", [\"Red\", \"Yellow\", \"Green\", \"Blue\"]],\n  [\"plus4\", [\"Multi\", \"Multi\"]],\n  [\"swapCol\", [\"Multi\", \"Multi\"]],\n]);\n//Opciones: sameColor | sameCode | changeDir | changeColor | skipTurn | pick1 | pick2 | pick4 | pick6 | startDuel | wait | skip | sleep\nconst codOpcion1round = new Map([\n  [\"0\", [\"sameColor\", \"sameCode\", \"pick1\", \"changeColor\", ]],\n  [\"1\", [\"sameColor\", \"sameCode\", \"pick1\", \"changeColor\", ]],\n  [\"2\", [\"sameColor\", \"sameCode\", \"pick1\", \"changeColor\", ]],\n  [\"3\", [\"sameColor\", \"sameCode\", \"pick1\", \"changeColor\", ]],\n  [\"4\", [\"sameColor\", \"sameCode\", \"pick1\", \"changeColor\", ]],\n  [\"5\", [\"sameColor\", \"sameCode\", \"pick1\", \"changeColor\", ]],\n  [\"6\", [\"sameColor\", \"sameCode\", \"pick1\", \"changeColor\", ]],\n  [\"7\", [\"sameColor\", \"sameCode\", \"pick1\", \"changeColor\", ]],\n  [\"8\", [\"sameColor\", \"sameCode\", \"pick1\", \"changeColor\", ]],\n  [\"9\", [\"sameColor\", \"sameCode\", \"pick1\", \"changeColor\", ]],\n  [\"void\",  [\"skip\"]],\n  [\"plus2\", [\"pick2\"]],\n  [\"flip\",  [\"sameColor\", \"changeColor\", \"pick1\"]],\n  [\"plus4\", [\"pick4\", \"startDuel\"]],\n  [\"swapCol\", [\"sameColor\", \"pick1\", \"changeColor\"]],\n]);\nconst codOpcion2round = new Map([\n  [\"0\", []],\n  [\"1\", []],\n  [\"2\", []],\n  [\"3\", []],\n  [\"4\", []],\n  [\"5\", []],\n  [\"6\", []],\n  [\"7\", []],\n  [\"8\", []],\n  [\"9\", []],\n  [\"void\",  [\"sameColor\", \"sameCode\", \"pick1\", \"changeColor\"]],\n  [\"plus2\", [\"sameColor\", \"sameCode\", \"pick1\", \"changeColor\"]],\n  [\"flip\", []],\n  [\"plus4\", [\"pick6\", \"skip\"]],\n  [\"swapCol\", []],\n]);\n\n\n\n\n//# sourceURL=webpack:///./src/Helpers/HelpersPilaCartas.mjs?");

/***/ }),

/***/ "./src/Impl/Partida.mjs":
/*!******************************!*\
  !*** ./src/Impl/Partida.mjs ***!
  \******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Partida; });\n/* harmony import */ var _Api_Carta_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/Carta.mjs */ \"./src/Api/Carta.mjs\");\n/* harmony import */ var _Api_Jugador_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/Jugador.mjs */ \"./src/Api/Jugador.mjs\");\n/* harmony import */ var _Api_MazoDescartes_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/MazoDescartes.mjs */ \"./src/Api/MazoDescartes.mjs\");\n/* harmony import */ var _Api_MazoRobo_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Api/MazoRobo.mjs */ \"./src/Api/MazoRobo.mjs\");\n/* harmony import */ var _Helpers_FactoriaBarajas_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Helpers/FactoriaBarajas.mjs */ \"./src/Helpers/FactoriaBarajas.mjs\");\n\n\n\n\n\n\n//Singleton:\nlet instaciaPartida = null;\n\nclass Partida {\n  constructor(tipoUno, jugadores, numCartasInicial) {\n    //Nos aseguramos de tener una sola instancia de partida (singleton)\n    if (!instaciaPartida) {\n      this.jugadores = jugadores;\n      this.numCartasInicial = numCartasInicial;\n      let factoriaBarajas = new _Helpers_FactoriaBarajas_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n      this.MazoRobo = new _Api_MazoRobo_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"](factoriaBarajas.creaBaraja(tipoUno).cartas);\n      this.MazoRobo.baraja();\n      this.MazoDescartes = new _Api_MazoDescartes_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([], true);\n      this.MazoDescartes.addDescarte(this.MazoRobo.robaCarta());\n      this.cartaVisible = null;\n      this.round = 1;\n      this.ganador = null;\n      this.finalizada = false;\n      this.jugadorActivo = 0;\n    } else {\n      return instanciaPartida;\n    }\n  }\n  /**\n   * @param {Jugador[]} jugadores\n   */\n  incluyeJugadores(jugadores) {\n    this.jugadores.push(...jugadores);\n  }\n  /**\n   * @param {Carta} carta\n   */\n  set actualizaCartaVisible(carta) {\n    this.cartaVisible = carta;\n  }\n  get muestraCartaVisible() {\n    return this.cartaVisible;\n  }\n  chequeaUnosDefensa() {\n    this.jugadores.map(\n      (elem) =>\n        (elem.cartasDeLaMano.cartas.length = 0\n          ? undefined\n          : elem)\n    );\n  }\n  desconectaUnosDefensa() {\n    this.jugadores.map((elem) => (elem.unoDefensaActivo = false));\n  }\n  declaraGanador(jugador) {\n    this.ganador = jugador;\n    this.finalizada = true;\n    this.calculaClasificacion();\n  }\n  calculaClasificacion() {\n    if (!this.ganador) {\n      this.jugadores\n        .forEach((jug) => jug.actualizaValorTotalAcumulado())\n        .sort((a, b) => a.valorTotalCartas - b.valorTotalCartas);\n    }\n  }\n  reparteCartas() {\n    for (let i = 0; i < this.numCartasInicial; i++) {\n      this.jugadores.forEach((jugador) => {\n        jugador.cartasDeLaMano.cogeCarta(this.MazoRobo.reparteCartas(1));\n      });\n    }\n    this.jugadores.forEach((jug) => jug.cartasDeLaMano.escondeTodas());\n  }\n  getJugadorActivo(){\n    return this.jugadores[this.jugadorActivo];\n  }\n  avanzaJugadorActivo() {\n    this.jugadorActivo =\n      this.jugadorActivo + 1 == this.jugadores.length\n        ? 0\n        : this.jugadorActivo + 1;\n  }\n  // retrocedeJugadorActivo() {\n  //   this.jugadorActivo =\n  //     this.jugadorActivo - 1 < 0\n  //       ? this.jugadores.length - 1\n  //       : this.jugadorActivo - 1;\n  // }\n  getDesafiante() {\n    let jugadorDesafiante = this.jugadorActivo - 1 < 0\n      ? this.jugadores.length - 1\n      : this.jugadorActivo - 1;\n  }\n\n  changeDirection() {\n    this.jugadores.reverse();\n    this.jugadorActivo = this.jugadores.length - this.jugadorActivo;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Impl/Partida.mjs?");

/***/ })

/******/ });
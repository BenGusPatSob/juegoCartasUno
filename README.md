Lógica de negocio para Juego de Cartas
# UNO 
Juego cartas (Uno) para FullStackDevelopment PostGraduateCourse @ UPC-Talent School

## Principio de diseño ##
Se basa la organización del código en clases y módulos ES6. 
Para la modelización de la lógica de un programa de estas características, se sigue la estrategia de representar los diferentes agentes que intervienen en los procesos del juego. 

De esta manera, se cuentan con clases para modelizar una partida, a un jugador, y a los diferentes grupos de cartas (baraja inicial - mazo de descartes, mazo de robo y los conjuntos de cartas de cada jugador):

![Image of Uno Mini](https://https://github.com/BenGusPatSob/juegoCartasUno/Uno_Mini.jpg)

![Image of Uno Mini](https://https://github.com/BenGusPatSob/juegoCartasUno/Uno_Normal.jpg)

Para materializar toda lógica se aplican los siguientes esquemas:
1. Se aplica un Module Pattern para la gestión de paquetes de software: ES6 modules y Webpack.
2. Las clases no se orientan hacia la capa de persistencia (no existen DTOs ni DAOs, no se implementa Service Locator ni Dependency Injection) ni se plantea patrones de diseño orientados a separar datos de la gestión de los mismos (por ejemplo en el caso de que se deseara guardar una partida): las clases contienen datos y funcionalidad.
3. Se utilizan la herencia entre las clases que modelan cartas y los diferentes grupos de cartas. 
4. Se aplica un Factory Method Pattern (creational) en la creación de la baraja (distinguir entre tipos de Uno).
5. Se aplica un Mixin-Decorator Pattern (structural) en la funcionalidad específica añadida a las clases base y sus herencias: por ejemplo, la funcionalidad de barajar del Mazo de Robo (hijo de Pila de Cartas)
6. Se aplica un Singleton Pattern (creational) para que no existan dos instancias de Partida dándose a la vez. 
7. Se aplica un Observer Pattern (behavioral): para poder ligar la acción de los jugadores con la partida y viceversa, se plantea una lista de jugadores dentro de Partida y una instancia de Partida en cada jugador. Esto permite updates parciales de todo el grupo.
8. No se ha implementado (todavía) la simulación completa de partida (async - wait).

Por lo tanto, se paquetiza lo anterior con los siguientes archivos:
- Carta: clase anémica sin funcionalidad
- Pila de Cartas: idem la anterior, array de Carta.
- Mazo de Robo, Mazo de Descartes y Mano de jugador.
- Jugador: se introduce funcionalidad específica, cada una de sus acciones modifica la instancia Partida y por lo tanto envía datos a los demás jugadores (por ejemplo la propagación del grito "UNO"). Se ha introducido un parámetro para la personalidad del jugador en cuanto que influiría en la toma de decisiones cuando existen opciones a elegir, pero esta funcionalidad está en progress
- Una timba es la funcionalidad que contiene index.mjs en la raiz. Es un proveedor de tipo de Uno, Partida y Jugadores y lo pone todo junto. Funcionalidad esquelética falta de profundizar en la modelización de un juego. De momento, se aplica una lógica jugadores autómatas para testear.

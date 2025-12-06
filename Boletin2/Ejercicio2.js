let num = Number(prompt("Introduce el numero de jugadores que quieres en tu equipo: "));
let jugadores= new Object();


for(let i=1; i<=num; i++){
    jugadores["jugadores"+i]= prompt("Introduce el nombre del jugador " +i);
}
console.log(jugadores);
console.log(jugadores.jugadores3);
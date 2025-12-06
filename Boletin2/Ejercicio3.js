let jugadores = new Object();

let respuesta="";

do {
    let clave = prompt("Introduce la posicion del jugador: ");
    jugadores[clave]= prompt("Introduce el nombre del jugador " +clave+": ");
    respuesta=prompt("¿Quieres seguir introduciendo jugadores?");
    
}while(respuesta=="si")

console.log(jugadores);

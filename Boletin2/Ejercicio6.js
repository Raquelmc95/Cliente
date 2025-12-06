let frase = prompt("Introduce una frase: ");
//el chartat te devuelve la letra de esa posicion
alert(`La longitud de la frase es ${frase.length}, la primera letra de la frase es ${frase.charAt(0)} y la última letra de la frase es ${frase.charAt(frase.length-1)}`);

alert(`La frase ${frase} en mayusculas es ${frase.toUpperCase()} y en minusculas es ${frase.toLowerCase()}`);

let buscar = prompt("Introduce la palabra o letra a buscar en la frase: ");
//devuelve el indice de la primera ocurrencia que se encuentra
let posicion = frase.indexOf(buscar);

alert(`La posicion de la palabra o letra ${buscar} es ${posicion}`);

let inicio = prompt("Introduce un numero desde donde quieres que empiece la frase: ");
let fin = prompt("Introduce un numero desde donde quieres que te termine la frase: ");

//esto te imprime un substring desde el inicio pero no incluye el fin no es inclusive
alert (frase.substring(inicio, fin));

let sustituir = prompt("Introduce la palabra que quieres sustituir en la frase: ");
let reemplazar = prompt("Introduce una palabra para reemplazarla en la frase: ");

alert(`Frase original: ${frase}`);
//replace sustituye una palabra por otra en el texto
alert(`Frase con palabra sustituida: ${frase.replace(sustituir, reemplazar)}`);

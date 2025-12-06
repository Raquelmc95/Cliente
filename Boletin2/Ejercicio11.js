//Punto 1
let comentarios = new String(" la Mierda.. producto ");
console.log(`La longitud de ${comentarios} es: ${comentarios.length}`);

//Punto 2
let palabrasClave="producto";
console.log(`Aparece la palabra clave ${palabrasClave} : ${comentarios.includes(palabrasClave)}`);

//Punto 3
console.log(`Parte de comentarios desde el indice 0 al 4 ${comentarios.slice(0,4)}`);
console.log(`Parte de comentarios desde el indice 5 al 15 ${comentarios.substring(5,15)}`);

//Punto 4
let limpio= comentarios.trim();
console.log(`Limpiamos comentario de espacios innecesarios ${limpio}`);
let reemplazamos = limpio.replaceAll("/mierda/gi", "excelente");
console.log(`Reemplazamos palabras problematicas ${reemplazamos} `);

//Punto 5
console.log(`Contamos las palabras del texto ${limpio}`);
let cont=0;
let minusculas = limpio.toLowerCase();

for(let i=0; i<limpio.length; i++){
    if(limpio[i]==" " || i==limpio.length-1){
        cont++;
    }
}
console.log(`${limpio} tiene ${cont} palabras`);

if(limpio.length>50){
    console.log(`Comentario demasiado extenso`);
}else{
    console.log(`Comentario valido`);
}
//otra forma: 
//el trim de cada palabra quita los espacios de cada palabra y del texto ejemplo los del medio de cada palabra
//let palabras = limpio.split(" ").filter(palabra=>palabra.trim() !=="");
//esto se quedaria asi palabras=["la", "Mierda", "producto"]
//hago palabras.length y ya me da cuantas palabras hay
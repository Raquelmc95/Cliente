//Punto 1.
// Pide al usuario que ingrese un número de serie con el formato 
//ABC-1234 y comprueba si cumple el patrón. Si cumple, muestra 
//"Número de serie válido", de lo contrario "Formato incorrecto". 

let numSerie = prompt("Ingresa un número de serie con el formato ABC-1234: ");
//^inicio cadena, [A-Z]{3} 3 letras mayusculas, \d{4} 4 digitos, $fin de cadena
let regex=/^[A-Z]{3}-\d{4}$/;

if(regex.test(numSerie)){
    console.log("Número de serie válido");
}else{
    console.log("Número de serie no válido");
}

//Punto 2. 
//Dada una frase, obtén todas las palabras que empiecen con letra 
//mayúscula. Por ejemplo, en "Hoy conocí a Marta y a Carlos en 
//Madrid", el resultado debería ser ["Hoy", "Marta", "Carlos", "Madrid"]. 

let frase = "Hoy conocí a Marta y a Carlos en Madrid";
//\b reconoce las palabras seguidas de \b limite de palabra(inicio limite de palabra) [A-Z] primera letra mayuscula [a-z] resto de letras minusculas g encontrar todas las coincidencias
let resultado = frase.match(/\b[A-Z][a-z]*/g);
console.log(resultado);

//Punto 3
//Pide al usuario una palabra y un texto. Haz que todas las apariciones 
//de esa palabra dentro del texto se envuelvan entre asteriscos 
//(*palabra*). 

let texto = prompt("Introduce un texto");
let palabra = prompt("Introduce una palabra de ese texto");
// Creamos un RegEx dinámico con la palabra
let regex2 = new RegExp(`\\b${palabra}\\b`, "g"); 
// \b = marca el inicio o el final de una palabra y se pone \\ porque al ser un string hay que escapar el \b y se escapa con dos barras
//Y la g significa global que reemplaza todas las coincidencias
let resultado2 = texto.replace(regex2, `*${palabra}*`);

console.log(resultado2);

//Punto 4
//Tienes una cadena que contiene varios correos o URLs, como: 
//"Contacta con info@empresa.com o visita https://empresa.com para 
//más información.". Encuentra la posición donde aparece la primera 
//dirección web o correo electrónico. 

let cadena = "Contacta con info@empresa.com o visita https://empresa.com para más información.";
console.log(cadena);
let patron = /[a-zA-Z0-9.%+-]+@[a-zA-Z0-9]+\.[a-zA-Z{2,}|https?:\/\/[^\s]]+/;

console.log(`La primera direccion web o correo electrónico se encuentra en la posición ${cadena.search(patron)} `);

//Punto 5
// Pide al usuario que indique los separadores que se usan en una lista 
//de palabras (por ejemplo, , o ;) y luego divide una cadena de texto 
//usando esos separadores.

let separadores = prompt("Introduce los separadores que se usan en una lista de palabras (, o ;): ");
let regeCadena = new RegExp(/[\s]/, "g");
let cadenaSeparadores = cadena.replace(regeCadena, separadores);
console.log(cadenaSeparadores);




let num1 = Number(prompt("Introduzca un número: "));
let num2 = Number(prompt("Introduzca otro número: "));

let valorAbsolutonum1 = Math.abs(num1);
let valorAbsolutonum2 = Math.abs(num2);

alert(`el valor absoluto del numero ${num1} es ${valorAbsolutonum1} y del numero ${num2} es ${valorAbsolutonum2}`);


let num1Redondeado = Math.round(num1);
let num2Redondeado = Math.round(num2);

alert(`el valor redondeado del numero ${num1} es ${num1Redondeado} y del numero ${num2} es ${num2Redondeado}`);

let max = Math.max(num1, num2);
let min =Math.min(num1, num2);

alert(`El maximo de los dos numeros introducido ${num1} y ${num2} es ${max}`);
alert(`El minimo de los dos numeros introducido ${num1} y ${num2} es ${min}`);

let potencia = Math.pow(num1,num2);

alert(`La potencia de los numeros introducidos ${num1} y ${num2} es ${potencia}`);

let raizCuadrada = Math.sqrt(num1, num2);

alert(`La raiz cuadrada de los numeros introducidos ${num1} y ${num2} es ${raizCuadrada}`);

//math.floor redondea hacia abajo un numero y esto genera un numero del 1 al 10 y si le quito el 1 seria del 0 al 9
let dado = Math.floor(Math.random()*10)+1;

alert(`Dado al azar ${dado}`);
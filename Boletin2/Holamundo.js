
function edadrestringida(){
    let edad = parseInt(prompt("Introduce tu edad: "));
    edad++
    if(isNaN(edad)){
        alert("No has introducido un número");
    }else{
        alert("El año que viene tendrás " + edad);
    }
}

function ejercicio11(){

    
}
class vehiculo{
    constructor(matricula, tipo, horaEntrada){
        this.matricula=matricula;
        this.tipo=tipo;
        this.horaEntrada=horaEntrada;
    }
}
function entrada(){
    const vehiculo = new vehiculo("3566JYZ", "seat", 3 );
}
function area(){
    let base = Number(prompt("Introduce la base"));
    let altura = Number(prompt("Introduce el area"));
    let area = base*altura;
    alert("El area de un triangulo es: " + area);
}
function conversor(){
    let grados = Number(prompt("Introduce los grados que quieres pasar a farenheit"));
    let farenheit = (grados*9/5)+32;
    alert("Los grados introducidos en farenheit son: "+farenheit);
}
function mayor(){
    let num1 = Number(prompt("Introduce 1º número: "));
    let num2 = Number(prompt("Introduce 2º número: "));
    let num3 = Number(prompt("Introduce 3º número: "));

    if(num1>num2 && num1>num3){
        alert("El primer número introducido es el mayor de los tres ");
    }else if(num2>num1 && num2>num3){
        alert("El segundo número introducido es el mayor de los tres ");
    }else{
        alert("El tercer número introducido es el mayor de los tres ");
    }
}
function par(){
    let num = Number(prompt("Introduce un numero: "));
    if(num%2==0){
        alert("El número introducido es par");
    }else{
        alert("El numero introducido es impar");
    }
}
function bucle(){
    for(let i=1; i<=10; i++){
        alert(i);
    }
}
function tabla(){
    let num = Number(prompt("Introduce un numero"));
    for(let i=0; i<=10; i++){
        alert(num+ "x"+i+"= "+(num*i) );
    }
}
function cuentaAtras(){
    let num = Number(prompt("Introduce un numero"));
    for(let i=num; i>=0; i--){
        alert(i);
    }
}
function nombres(){
    const nombres=["angela", "Israel", "esther", "miguel"];
    for(let i=0; i<=nombres.length; i++){
        alert(nombres[i]);
    }
}
function suma(){
    const numeros=[1,2,3,4,5,6];
    let sum=0;
    alert (numeros);
    for(let i=0; i<numeros.length; i++){
        let num = numeros[i];
        sum += num;

    }
    alert("suma: " + sum);
}
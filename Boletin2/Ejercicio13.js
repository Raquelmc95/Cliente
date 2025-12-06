const entrada = {
    nombre: "Juan Perez",
    num_cuenta: "1234-5678-9876-5432-1098",
    correo_elec: "juan.perez@banco.com",
    trans1: 500,
    trans2: 300,
    trans3:150,
    saldo_total: "950€" 
};
//Punto 1
console.log(entrada.nombre);

//Punto 2
let patron = /^\d{4}-\d{4}-\d{4}-\d{4}-\d{4}$/;
console.log("Cumple el patron el numero de cuenta " + entrada.num_cuenta + "?: ");
if(patron.test(entrada.num_cuenta)){
    console.log("El numero de cuenta es válido");
}else{
    console.log("El número de cuenta no es válido");
}

//Punto 3
let patronEmail = /^[a-zA-Z0-9.%+-_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
console.log(entrada.correo_elec);
if(patronEmail.test(entrada.correo_elec)){
    console.log("El correo electronico cumple el patrón");
}else{
    console.log("El correo electronico no cumple el patrón");
}

//Punto 4
let sumaTrans = entrada.trans1+entrada.trans2+entrada.trans3;
console.log("La suma de las transacciones es: "+sumaTrans);

//Punto 5
//?=mira adelante sin consumir
//?:agrupa sin guardar
//\D* 0 o mas de un no digito todo lo que no sea digito como - o algo 
//\d Todo lo que se digito
//{4} para que repita lo del parentesis 4 veces
let patronNumCuenta=/\d(?=(?:\D*\d){4})/g;
entrada.num_cuenta= entrada.num_cuenta.replace(patronNumCuenta, "*");
console.log(entrada.num_cuenta);

//Punto 6
const regex = /trans\d/i; // "i" = sin distinguir mayúsculas/minúsculas

const cantidad = Object.keys(entrada)
  .filter(clave => regex.test(clave)) // test() devuelve true si coincide
  .length;

console.log(cantidad); // 3

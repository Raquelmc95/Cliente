let fechaNac = prompt("Introduce tu fecha de nacimiento (YYYY/mm/dd): ");
//new date le pasamos el string con el formato fecha yyyy-mm-dd
let fecha = new Date(fechaNac);
//si no es un numero
if(isNaN(fecha)){
    alert("No has introducido una fecha valida (dd/mm/aaaa)");
}else{
    let diasSemana =["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
    //get day devuelve un numero del 0-6, getmonth devuelve un numero del 0-11 y hay que sumarle 1 y getfullyear el año completo de una fecha
    console.log(`Dia de la semana en que naciste: ${diasSemana[fecha.getDay()]}` +
        `\nNúmero del mes: ${fecha.getMonth()+1}` +
        `\nAño completo: ${fecha.getFullYear()}`
    );
}
//el getDate devuelve el dia del mes de una fecha del 1 al 31
let diasSemana =["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
let meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Novimebre", "Diciembre"];
let hoy = new Date();
let proximoAño= new Date(hoy.getFullYear(),fecha.getMonth(),fecha.getDay());
let edad;
if(proximoAño<hoy){
    edad = hoy.getFullYear()-fecha.getFullYear();

}else{
    edad = hoy.getFullYear()-fecha.getFullYear()-1;
}
console.log(`Nacistes un ${diasSemana[fecha.getDay()]} el ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}. Tienes ${edad} años`);

let pregunta = prompt("¿Quieres saber cuantos dias quedan para tu próximo cumpleaños?: ");
if(pregunta=="si"){
    let hoy = new Date();
    //le incluyo mi dia, mes y el año de hoy
    let proximoAño= new Date(hoy.getFullYear(),fecha.getMonth(),fecha.getDay());
    if(proximoAño<hoy){
        //le suma uno al año si es menor al año de hoy y con el set lo cambia
        proximoAño.setFullYear(hoy.getFullYear()+1);
    }
       //math ceil sirve para redondear un numero hacia arriba
        let dias = Math.ceil((proximoAño-hoy)/(1000*60*60*24));
    
    

    console.log(`Falta ${dias} dias para tu próximo cumpleaños`);
}else{
    console.log("Ha indicado que no quiere saberlo");
}
    





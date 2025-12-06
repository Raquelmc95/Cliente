function convertir(){
    let grados = Number(prompt("Introduce una temperatura en grados celsius"));

    if(isNaN(grados) || grados === "" ){ //Si no es un numero o el triple igual es para verificar si grados es exactamente una cadena vacia, no algo que se parezca a vacio
        alert("Los valores introducidos son erroneos");
    }else if(grados < -273.15){
        alert("Error: la temperatura no puede ser menor que el cero absoluto (-273.15 C)")
    }else{
        let farenheit = (grados*9/5)+32;
        alert(grados + " grados en Farenheit son: " + farenheit );
        let kelvin = grados + 273.15;
        alert(grados + " grados en Kelvin son: " + kelvin );
    }
}
function dameSegundos(){
    let segundos= Number(prompt("Introduce los segundos: "));
    if(isNaN(segundos) || segundos === 0 || segundos < 0){ //El es NaN significa que no es un numero, si no es un numero 
        alert("No se ha introducido ningún número");
    }else{
        let horas = Math.floor(segundos/3600);
        let aux = segundos/60;
        let minutos = Math.floor(aux%60);
        segundos = segundos%60;
                
        alert(horas + ": " + minutos + ": " + segundos);
    }
    
}
function dameHora(){
    let horas = Number(prompt("Introduce una hora: "));
    let minutos = Number(prompt("Introduce los minutos: "));
    let segundos= Number(prompt("Introduce los segundos: "));

    if(segundos<0 || segundos>59 || minutos<0 || minutos>59 || horas<0 || horas>23 || isNaN(horas) || isNaN(minutos) || isNaN(segundos)) {
        alert ("No se han introducido valores correctos");
        return;
    }
    segundos= segundos+1;
    if(segundos==60){
        minutos++;
        segundos=0;   
    }
    if(minutos==60){
        horas++;
        minutos=0;        
    }
    if(horas==24){
        horas=0;
    }
    alert(horas + ": " + minutos + ": " + segundos);

}
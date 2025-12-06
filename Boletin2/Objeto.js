function dameObjeto(){
    const num ={};

    for(let i=1; i<=10; i++){
        num["atr"+i] = i;
    }

    let texto = "";

    for (let clave in num){
        texto+= clave + ": " + num[clave] + ", ";

    }
    alert(texto);
}
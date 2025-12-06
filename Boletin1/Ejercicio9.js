function calculadora(){
    let respuesta;
    do{
        let num1 = Number(prompt("Introduce un número: "));
        let num2 = Number(prompt("Introduce otro número: "));
        if(isNaN(num1) || isNaN(num2) || num1==="" || num2===""){
            alert("No se ha introducido un número válido");
        }else{
            let opcion = Number(prompt("Elige una opción: 1.Sumar, 2.Restar, 3.Multiplicar y 4.Dividir)"));
            switch(opcion){
                case 1:
                    alert ("Resultado suma: " + (num1+num2)); //alert(`la suma es: ${num1+num2}`); podriamos hacerlo asi tb, eso es usar literales
                    break;
                case 2:
                    alert ("Resultado resta: " + (num1-num2));
                    break;
                case 3:
                    alert ("Resultado multiplicacion: " + (num1*num2));
                    break;
                case 4:
                    if(num2 === 0){
                        alert("No se puede dividir por 0");
                    }else{
                        alert ("Resultado division: " + (num1/num2));
                    }
                    break;
                default:
                    alert ("El número introducido no corresponde a ninguna opción");
                    break;

            }
        }
        respuesta =prompt("Si quieres realizar otra operación indica si/no"); //confirm(y aqui la cadena de texto) te da un true o un false y solo es para darle a aceptar o cancelar

    }while(respuesta=="si");
}
//Punto 1
let frases =["Me llamo Raquel", "Estudio DAW", "Le encanta inglés a Raquel", "No me gusta PHP"];

for (let i = 0; i < frases.length; i++) {
    let palabra = frases[i].split(" ");//crea un array contando cada palabra hasta el espacio
    let longPalabra = palabra.length;
    console.log(`La frase ${frases[i]} tiene ${longPalabra} palabras`);
    
}

//Punto 2
let conteoPalabras = {};
for(let i=0; i<frases.length; i++){
    let palabras = frases[i].split(" ");
    for(let j=0; j<palabras.length; j++){
        let palabra = palabras[j].toLowerCase();
        //si la palabra ya esta sumale uno
        if(conteoPalabras[palabra]){
            conteoPalabras[palabra]++;

        }
        //si no esta creala e iniciala a 1
        else{
            conteoPalabras[palabra]=1;
        }
    }
    
}
console.log(conteoPalabras);

//Punto 3
let lista = frases.filter(palabra => (palabra.split(" ")).length>3);
console.log(lista);
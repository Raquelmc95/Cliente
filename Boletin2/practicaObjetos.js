let persona = new Object();
persona.nombre="laura";
persona.edad=23;
persona.profesion="programadora";
persona.pais="España";
persona.edad=30;
persona.saludar= function (){console.log(`Hola mi nombre es ${persona.nombre}`)};
console.log(persona);
persona.saludar();

let coche = new Object();
coche.marca="seat";
coche.modelo="ibiza";
coche.año=2017;
console.log(coche);
delete coche.año;
console.log(coche);

for (let clave in coche) {
    console.log(`${clave} : ${coche[clave]}`);
}
let alumno ={
    nombre:"pepe",
    edad:"25",
    direccion : {
        calle: "paco12",
        ciudad: "sevilla",

    }
};
console.log(alumno.direccion.ciudad);

let persona2 = { ...persona};
persona2.nombre="raquel";
console.log(persona);
console.log(persona2);

let existe = "profesion" in persona;

console.log(`Existe la propiedad profesion en persona: ${existe}`);

Object.freeze(persona);
persona.nombre="pepe";
console.log(persona);

class Animal {
    nombre;
    tipo;
    sexo = "macho";
    constructor(nombre, tipo){
        this.nombre=nombre,
        this.tipo=tipo;
    }


    sonido(){
        console.log("guaguau");
    }
}
let perro = new Animal();
perro.nombre="yako";
perro.tipo="de agua";
console.log(perro);
perro.sonido();
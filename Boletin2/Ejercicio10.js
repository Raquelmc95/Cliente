let biblioteca = {
    nombre: "biblioteca central",
    libros:[
        {
        titulo: "Harry Potter",
        autor: "J.",
        anio: 2013,
        categoria: ["ficcion", "romantica", "accion"],
        disponible: true
        },
        {
            titulo: "Cien años de Soledad",
            autor: "Gabriel Garcia Marquez",
            anio: 2010,
            categoria: ["ficcion", "romantica"],
            disponible: false
        },
        {
            titulo: "Cincuenta Sombras de Gey",
            autor: "Marco",
            anio: 2016,
            categoria: ["romantica","accion"],
            disponible: true

        },
        {
            titulo: "Persiguiendo a Silvia",
            autor: "Marco",
            anio: 2016,
            categoria: ["romantica", "accion", "ficcion"],
            disponible: true

        }

    ]   
    
};
//Cuando me digan lista es un arrays y los objetos van entre {}
/*let libros = [
    {
        titulo: "Harry Potter",
        autor: "J.",
        anio: 2013,
        categoria: "ficcion",
        disponible: true
        },
        {
            titulo: "Cien años de Soledad",
            autor: "Gabriel Garcia Marquez",
            anio: 2010,
            categoria: "ficcion",
            disponible: false
        },
        {
            titulo: "Cincuenta Sombras de Gey",
            autor: "Marco",
            anio: 2016,
            categoria: "romantica",
            disponible: false

        },
        {
            titulo: "Persiguiendo a Silvia",
            autor: "Federico",
            anio: 2016,
            categoria: "romantica",
            disponible: false

        }
];*/


//Punto 1.
let disponibles=biblioteca.libros.filter(l=>l.disponible==false);
console.log(disponibles);

//Punto 2.
let nomCategoria = prompt("Introduce el nombre de la categoria que quieras una lista de libro: ");
//en la comparacion tb podria poner la categoria en minuscula con tolowercase
let filtroCategoria=biblioteca.libros.filter(libro=>libro.categoria==nomCategoria);
console.log(filtroCategoria);
let tituloCateg = filtroCategoria.map(libro=>libro.titulo);
console.log(tituloCateg);

let filtroCate = biblioteca.libros.filter(libro => libro.categoria.some(categ=>categ==nomCategoria));



// Mostramos el resultado, podria hacer eso tb
/*if (tituloCateg.length > 0) {
  console.log("Libros de la categoría " + nomCategoria + ":");
  console.log(tituloCateg);
} else {
  console.log("No se encontraron libros en la categoría " + nomCategoria);
}*/

//Punto 3.
let noDisponible = biblioteca.libros.filter(libro => libro.disponible==false);
console.log(`La cantidad de libros que no estan disponibles actualmente son: ${noDisponible.length}`);

//Punto 4.
let numAnio = Number(prompt("Introduce el año que quieres los libro publicados despues de ese año: "));
let filtroAnio = biblioteca.libros.filter(libro => libro.anio>=numAnio);
let listTituloAutores = filtroAnio.map(libro=> libro.titulo + " - " + libro.autor);
console.log(listTituloAutores);

//Punto 5.
let nomAutor= prompt("Introduce el nombre del autor que quieres saber si hay libros disponibles: ");
let filtroAutor= biblioteca.libros.filter(libro=>libro.autor==nomAutor);
let todosDisponibles = filtroAutor.every(libro=>libro.disponible);
if(todosDisponibles){
    console.log(`Todos los libros del autor ${nomAutor} están disponibles `);
}else{
    console.log(`No ha ningún libro del autor ${nomAutor} disponible`);
}

//Punto 6.
let anioHoy = new Date().getFullYear();
let antiguedad = biblioteca.libros.reduce((acum, libro)=> acum + (anioHoy-libro.anio),0);
let promedioAntiguedad = antiguedad/biblioteca.libros.length;
console.log(`El promedio de antiguedad de los libros de la biblioteca es de ${promedioAntiguedad} años`);

//Punto 7.
//Generamos arrays solo con los nombres de los autores
let autores = biblioteca.libros.map(libro=>libro.autor);
//en autor guarda al autor y en el index la posicion del arrays de autores, el indexof devuelve el indice donde aparece por primera vez el autor en autores 
// y si coincide con el index del arrays autores lo deja si no no lo deja
let autoresUnicos = autores.filter((autor, index)=>autores.indexOf(autor)===index);
console.log(autoresUnicos);
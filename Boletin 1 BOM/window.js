// //Ejercicio 1

// alert(window.location.href);

// //Ejercicio 2 abrir y cerrar ventana

// let ventana = window.open("", "", "width=400, height=400");

// setTimeout(()=>{
//     if(ventana){
//         ventana.close();
//         alert("ventana nueva cerrada automaticamente");
//     }

// },5000);

//Ejercicio 3 settimeout y setinterval

// function abrirVentana(){
//     setTimeout(()=>{
//     window.open("", "", "width=400, height=400");
//     }, 5000);

// }

// setInterval(abrirVentana, 2000);

//Ejercicio 4 usar window.history para ir adelante o hacia atras

// let historial = window.open("", "", "width=400, height=400");

// setTimeout(()=>{
//     historial.location.href="coldplay.html";
// }, 1000);

// setTimeout(()=>{
//     historial.location.href="green-day.html";
// }, 2000);

// setTimeout(()=>{
//     historial.location.href="queen.html";
// }, 3000);

// setTimeout(()=>{
//     historial.history.back(); //o puedo usar go(-1)
// }, 7000);


//Ejercicio 5 resizeto y moveto 

// let pagina = window.open("", "", "width=400, height=400");
// setTimeout(()=>{
//     pagina.resizeTo(600, 600);
// },5000);

// setTimeout(()=>{
//     pagina.moveTo(200, 200);
// }, 10000);

//Ejercicio 6 uso del navigator
// console.log(window.navigator);


//Ejercicio 7 uso del window screen
// console.log(window.screen);


// //Ejercicio 8

 
// let historia=[];
// function crearHistorial(){
//     let url = "http://127.0.0.1:5500/probar.html";
//     historia.push(url);
//     console.log(historia);
// }


// function agregarUrl(url){
//     if(historia.find(u => u==url)){
//         alert("Esa url ya existe en el historial");
//     }else{
//         historia.push(url);
//     }
    

// }
// function pedirUrl(){
//     let url = prompt("Introduce una URL: ");
//     if(historia.find(u => u==url)){
//         alert("Esa url ya existe en el historial");
//     }else{
//         agregarUrl(url);
//     }
    
// }

// function mostrarHistorial(){
//     alert(historia);
// }

// function volverUltimaUrl(){
//     window.open(historia[historia.length-1]);
// }

// //Ejercicio 9
// let tareasPendientes=[];
// let tarea ={nombre: "Estudiar", completado: "no"};
// tareasPendientes.push(tarea);

// function agregarTarea(){
//     let nombre = prompt("Introduce el nombre de la tareas: ");
//     let completado = prompt("Está completada (si/no): ");
//     tareasPendientes.push({nombre:nombre, completado:completado});

// }

// function pendientes(){
//     let tarea = tareasPendientes.filter(t => t.completado=="no");
//     console.log(tarea);
// }

// function recordarTarea(){
//     setInterval(pendientes, 5000);
// }

// function nuevaTarea(){
//     tarea.push({nombre: prompt("Introduce una nueva tareas: "), completado: prompt("Está completada (si/no): ")});
// }

//Ejercicio 10 arrays de configuracion de una pagina
// let configuarcion={alto:200, ancho:200, posicionH: 100, posicionV: 100, url:"", nombre:"miVentana"};
// let miVentana;

// function abrirMiventana(){
//     miVentana = window.open(configuarcion.url, configuarcion.nombre, `width=${configuarcion.ancho}, height=${configuarcion.alto}, left=${configuarcion.posicionH}, top=${configuarcion.posicionV}`);

// }

// function configurarObjeto(){
//     configuarcion.alto=Number(prompt("Introduce un alto para la pagina"));
//     configuarcion.ancho=Number(prompt("Introduce un ancho para la pagina"));
//     configuarcion.posicionH=Number(prompt("Introduce una posicion horizontal para la pagina"));
//     configuarcion.posicionV=Number(prompt("Introduce una posicion vertical para la pagina"));
// }

// function redimensionarYmover(){
//     // miVentana.resizeTo(configuarcion.ancho, configuarcion.alto);
//     // miVentana.moveTo(configuarcion.posicionH, configuarcion.posicionV);
//     abrirMiventana();
//     setTimeout(()=>{
//         miVentana.resizeTo(configuarcion.ancho, configuarcion.alto);
//     },5000);

//     setTimeout(()=>{
//         miVentana.moveTo(configuarcion.posicionH, configuarcion.posicionV);
//     },7000);
    
// }

//Ejercicio 11 array para almacenar puntuaciones
// let puntuaciones = [];

// function agregarPuntuacion(url, puntos){
//     puntuaciones.push({url:url, puntuacion:puntos});
// }
// function calificacion(){
//     alert("Califica la pagina actual");
//     let puntos=Number(prompt("Introduce los puntos: "));
//     let urlActual = window.location.href;
//     agregarPuntuacion(urlActual, puntos);
// }
// function mostrar(){
//     let puntos = puntuaciones.map(punto => punto.puntos);
//     console.log(puntos);
//     console.log(puntuaciones);
// }

//Ejericicio 12 
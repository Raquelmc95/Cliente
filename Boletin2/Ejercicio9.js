let productos = [
    {nombre: "vestido",precio: 30,categoria: "ropa",disponible: true,},
    {nombre: "camara",precio: 30,categoria: "electrodomesticos",disponible: true,},
    {nombre: "pantalones",precio: 20,categoria: "ropa",disponible: false,}

];


//Punto 1.devuelve un arrays con los productos que cumple la condicion de p.disponible es decir que tengan true
console.log(productos);
let disponibles = productos.filter(p => p.disponible);
console.log(disponibles);

//Punto 2.
let incremento= Number( prompt("¿En cuanto quieres incrementar el precio: ?"));
let cateProd = prompt("Indica la categoria a la cual quieres aplicar ese incremento: ");
//devuelve un arrays con los precios modificados pero solo imprime los precios [35, 30, 25] algo asi, preguntar como hacerlo sin modificar el original
let modificar = productos.map(p=>p.categoria==cateProd ? p.precio+=incremento: p.precio);
console.log(modificar);
console.log(productos);

//Punto 3
let cantidad = Number(prompt("Introduce una cantidad en euros de los productos que quieres verificar: "));
//devuelve true si al menos 1 cumple la condicion o false si ninguno la cumple
let hayProductos = productos.some(p=> p.precio>cantidad);
console.log(`Hay productos mas carso de ${cantidad}?: ${hayProductos}`);

//Punto 4
let productosStock = productos.filter(p=>p.disponible);
console.log(productosStock);
//devuelve la suma de varios elementos, acum es como el contador y p cada elemento del arrays, el 0 indica el valor del acum ejem acum=0; empieza en 0
let precioTotal = productosStock.reduce((acum, p) => acum + p.precio,0);
console.log(`Precio total de los productos en stock: ${precioTotal}`);

//Punto 5
let nomCategoria= prompt("Introduce el nombre de la categoria que quieres saber el nombre de sus productos: ");
let elementos = productos.filter(p=>p.categoria==nomCategoria);
console.log(elementos);
let nombres = elementos.map(p=> p.nombre);
console.log(nombres);

//Punto 6 //Every devuelve true si todos los productos de una categoria en concreto estan disponibles
let pregunta =prompt("Introduce la categoria de la que quieres saber si sus productos estan disponibles: ");
let prodCategoria = productos.filter(p=>p.categoria==pregunta);
let todosDisponibles = prodCategoria.every(p=>p.disponible);
console.log(`Tienen todos los productos disponibles de la categoria ${pregunta}?: ${todosDisponibles}`);
function menu(){
    let seguir;
    do{
        let autenticado = prompt("Estás autenticado si/no?: ");
        if(autenticado == "si"){
            let permiso = prompt("¿Tienes permiso de administrador si/no?: ");
            if(permiso == "si"){
                alert("Acciones de administrador:");
                alert("1.Mostrar usuarios.");
                alert("2.Eliminar usuarios.");
            }else{
                alert("Acciones básicas:");
                alert("1.Ver perfil.");
                alert("2.Cambiar contraseña.");
            }

        }else{
            alert("Acceso denegado");
        }

        seguir = prompt("¿Desea continuar con otro usuario si/no?: ");

    }while(seguir == "si");   

    alert("Sesión cerrada");
}
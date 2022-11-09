function mostrar(){
    let usuario = obtenerLocalStorage("usuario")
    document.getElementById("nomusuario").innerHTML = usuario;
}

function obtenerLocalStorage(clave){
    return localStorage.getItem(clave); 
}
  
mostrar();


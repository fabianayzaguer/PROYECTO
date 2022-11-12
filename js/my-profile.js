function mostrar(){
    let usuario = obtenerLocalStorage("usuario")
    document.getElementById("nomusuario").innerHTML = usuario;
    document.getElementById("e-mail").placeholder = usuario;
    
    let nombre = localStorage.getItem("nombre");
    document.getElementById("primer-nombre").placeholder = nombre;

    let apellido = localStorage.getItem("apellido");
    document.getElementById("primer-apellido").placeholder = apellido;

    let nombre2 = localStorage.getItem("segundo nombre");
    document.getElementById("segundo-nombre").placeholder = nombre2;

    let apellido2 = localStorage.getItem("segundo apellido");
    document.getElementById("segundo-apellido").placeholder = apellido2;

    let telefono = localStorage.getItem("telefono");
    document.getElementById("telefono").placeholder = telefono;
}

function obtenerLocalStorage(clave){
    return localStorage.getItem(clave); 
}
  
mostrar();

(() => {
    'use strict'

const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})
})()

function guardarCambios(){
    let nombre = document.getElementById("primer-nombre").value;
    let nombre2 = document.getElementById("segundo-nombre").value;
    let apellido = document.getElementById("primer-apellido").value;
    let apellido2 = document.getElementById("segundo-apellido").value;
    let telefono = document.getElementById("telefono").value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("segundo nombre", nombre2);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("segundo apellido", apellido2);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("telefono", telefono);   
}


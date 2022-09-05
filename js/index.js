document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catName", "Autos");
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", "Juguetes");
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", "Muebles");
        window.location = "products.html"
    });
});
let usuario = document.getElementById("nomusuario");
obtenerLocalStorage();
//localStorage.setItem("usuario", JSON.stringify(usuario)); 
   document.getElementById("nomusuario").innerHTML = `<p> ${usuario.value} <p/>`;




function obtenerLocalStorage(){
    localStorage.getItem("usuario", usuario);
    console.log(usuario.value)
}



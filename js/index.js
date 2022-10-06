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

obtenerLocalStorage();

   document.getElementById("nomusuario").innerHTML = `${usuario}`;




function obtenerLocalStorage(){
   usuario = localStorage.getItem("usuario");
   
}



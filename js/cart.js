async function mostrarDatos(){

    let usuario = obtenerLocalStorage("usuario")
let prodID = obtenerLocalStorage("prodID")
const response = await fetch(`https://japceibal.github.io/emercado-api/products/${prodID}.json`);
const json = await response.json();
let cantidad = 1
let htmlContentToAppend = "";

console.log(json);
let htmlparaimagen = ""
     for (let imagen of json.images){
        
        htmlparaimagen += `<img src = "${imagen}"`
     }

{ htmlContentToAppend += `<div>
  <h1>Carrito de compras</h1>
  <h3>Articulos a comprar</h3>
 </div>
 <div>
 <table class="default">
 <tr>
   <th scope="row"></th>
   <th>Nombre</th>
   <th>Costo</th>
   <th>Cantidad</th>
   <th>Subtotal</th>
 </tr>
 <tr>
   <th>${htmlparaimagen}}</th>
   <td>${json.name}</td>
   <td>${json.cost}${json.currency}</td>
   <td>${cantidad}</td>
   <td>${json.cost*cantidad} </td>
 </div>


 ` };
 document.getElementById("carrito"). innerHTML = htmlContentToAppend;
 document.getElementById("nomusuario"). innerHTML = `${usuario}`;

};

mostrarDatos();
function obtenerLocalStorage(clave){
    return localStorage.getItem(clave); }
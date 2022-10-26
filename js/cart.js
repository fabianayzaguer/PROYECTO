async function mostrarDatos(){

    let usuario = obtenerLocalStorage("usuario")
let usuarioID = "25801"
const response = await fetch(`https://japceibal.github.io/emercado-api/user_cart/25801.json`);
const json = await response.json();
let htmlContentToAppend = "";


console.log(json);

json.articles.forEach((product) => {
  
htmlContentToAppend += `<div>
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
   <th><img src = ${product.image}></th>
   <td>${product.name}</td>
   <td>${product.unitCost}${product.currency}</td>
   <td><input type="number"  id="cantidad"></td>
   <td id=subtotal>${product.unitCost} </td>
 </div>

<input>

 <div>
 <h4> Tipo de Envío</h4>
 <input type="radio" value="Premium"
 <label for="Premium"> Premium: 2 a 5 días (%15)</label><br>
 <input type="radio" value="Express" 
 <label for="Express"> Express: 5 a 8 días (%7)</label><br>
 <input type="radio" value="Standard" 
 <label for="Standard"> Premium: 12 a 15 días (%5)</label>
 </div>
 <div>
 <h4> Dirección de envío </h4>
 <a>Calle</a><input type="text"> <a>Número</a><input type="text"><br>
 <a>Esquina</a><input type="text">

 ` 
 
addEventListener('click', (e) => {});

oninput = (e) => {
  var cantidad = document.getElementById("cantidad");
  document.getElementById("subtotal").innerHTML =  product.unitCost*cantidad.value;
};

} );

document.getElementById("carrito"). innerHTML = htmlContentToAppend;
 document.getElementById("nomusuario"). innerHTML = `${usuario}`;

};

mostrarDatos();
function obtenerLocalStorage(clave){
    return localStorage.getItem(clave); }




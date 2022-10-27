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
 <fieldset>
     <legend>Tipo de envíor</legend>
     <label>
         <input type="radio" name="envio" value="premium"> Premium 2 a 5 dias (15%)
     </label> <br>
     <label>
         <input type="radio" name="envio" value="express"> Express 5 a 8 dias (7%)
     </label> <br>
     <label>
         <input type="radio" name="envio" value="standard" checked> Standard 12 a 15 dias (5%)
     </label>
 </fieldset>


 </div>
 <div>
 <h4> Dirección de envío </h4>
 <a>Calle</a><input type="text"> <a>Número</a><input type="text"><br>
 <a>Esquina</a><input type="text">
</div>
<div>
<h3>Costos<h3>
<div class="list-group-item list-group-item-action">
            <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb1">
                        <h4>Subtotal</h4> 
                        <p class="text-muted">Costo unitario del producto por cantidad</p> 
                        </div>
                        <small id="subtotal2"> </small> 
                    </div>

                </div>
            </div>
        </div>
</div>
<div class="list-group-item list-group-item-action">
            <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>Costo de envío</h4> 
                        <p class="text-muted">Según el tipo de envío</p> 
                        </div>
                        <small class="text-muted">` + 10 + ` </small> 
                    </div>

                </div>
            </div>
        </div>
</div>
<div class="list-group-item list-group-item-action">
            <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>Total ($)</h4>
                        </div>
                        <small id="total"> </small> 
                    </div>

                </div>
            </div>
        </div>
</div>

 ` 
 
addEventListener('click', (e) => {});

oninput = (e) => {
  var cantidad = document.getElementById("cantidad");
  document.getElementById("subtotal").innerHTML =  product.unitCost*cantidad.value;
  document.getElementById("subtotal2").innerHTML =  product.unitCost*cantidad.value;
};

} );

document.getElementById("carrito"). innerHTML = htmlContentToAppend;
document.getElementById("nomusuario"). innerHTML = `${usuario}`;

};

mostrarDatos();
function obtenerLocalStorage(clave){
    return localStorage.getItem(clave); }




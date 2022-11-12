async function mostrarDatos(){

    let usuario = obtenerLocalStorage("usuario")
    let usuarioID = "25801"
    const response = await fetch(`https://japceibal.github.io/emercado-api/user_cart/25801.json`);
    const json = await response.json();
    let htmlContentToAppend = "";



    json.articles.forEach((product) => {
        htmlContentToAppend += `
            <div>
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
                        <th><img style="max-width: 70px;" src = ${product.image}></th>
                        <td>${product.name}</td>
                        <td>${product.unitCost}${product.currency}</td>
                        <td><input type="number"  id="cantidad" value=1></td>
                        <td id=subtotal>USD ${product.unitCost} </td>
                    </tr>
                </table>
            </div>
            <hr>
            ` 
    
        addEventListener('click', (e) => {});

        oninput = (e) => {
            var cantidad = document.getElementById(`cantidad`);
            var subtotal = product.unitCost*cantidad.value;
            document.getElementById("subtotal").innerHTML = "USD " + subtotal.toString();
            
            document.getElementById("subtotal2").innerHTML = "USD " + subtotal.toString();
        tipoEnvio(product.unitCost);
        };

    });


    document.getElementById("seleccionarPago"). innerHTML = ` 
            <div >
                <h3>Forma de pago</h3>
                <small class="text-muted" id="seleccion"> No ha seleccionado  </small>
                <input type="button" class="btn btn-link ps-0" data-bs-toggle="modal"
                data-bs-target="#modalPagos" id="boton-pagos" value="Seleccionar">
                <div class="invalid-feedback">Seleccione método de pago</div>
            </div>
            
            <div class="col-sm-6" id="seleccionar">
            <div >Seleccione forma de pago</div>
          </div>

            <div class="col-auto  p-5 text-center">
               <button class="btn btn-primary" type="submit" onclick="enviarFormulario()"> Finalizar compra </button>
            </div>
            `


    document.getElementById("costos"). innerHTML = ` 
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

            <div class="list-group-item list-group-item-action">
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                            <h4>Costo de envío</h4> 
                            <p class="text-muted">Según el tipo de envío</p> 
                        </div>
                        <small class="text-muted"  id="costoEnvio"></small> 
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
            <hr>
            `

    document.getElementById("tipo"). innerHTML = `
            <div>
                <fieldset onclick="tipoEnvio()">
                    <legend>Tipo de envío</legend>
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
            `

    document.getElementById("carrito"). innerHTML = htmlContentToAppend;
    document.getElementById("nomusuario"). innerHTML = `${usuario}`;

};

mostrarDatos();

function obtenerLocalStorage(clave){
    return localStorage.getItem(clave); }


function tipoEnvio(product) {
    var ele = document.getElementsByName('envio');
    var i = 0;   
    while(i < ele.length) {

        if(ele[i].checked) {
            
            var valueCombo = ele[i].value;
            break;
            
        }
        i++;
    }      

    var cantidad = document.getElementById("cantidad");

    switch (valueCombo) { 
       
        case "premium":
            var costoEnvio = product * cantidad.value * 0.015; //15%     
            break;
        case "express":
            var costoEnvio = product * cantidad.value * 0.07; //7% 
          break;
    
        case "standard": 
            var costoEnvio = product * cantidad.value * 0.05; //5%
          break;
    
      }
        var costoTotal = costoEnvio + product * cantidad.value;
        document.getElementById("total").innerHTML = "USD " + (costoTotal).toString();
        document.getElementById("costoEnvio").innerHTML = "USD " + costoEnvio.toString();
}

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

function cambiarRequired(){
    var tipo = document.getElementsByName('formaPago');
    var i = 0;   
    while(i < tipo.length) {

        if(tipo[i].checked) {
            
            var valueCombo = tipo[i].value;
            break;
            
        }
        i++;
    }    

    const numCuenta = document.querySelector("#numeroCuenta");
    const numTarj= document.querySelector("#numTarjeta");
    const codSeg = document.querySelector("#codSeg");
    const venc = document.querySelector("#vencimiento");
    


    if (valueCombo === "transferencia"){
        numCuenta.setAttribute("required", "");
        
        numTarj.removeAttribute("required","");
        codSeg.removeAttribute("required", "");
        venc.removeAttribute("required","");
        
        numTarj.setAttribute("disabled","");
        codSeg.setAttribute("disabled", "");
        venc.setAttribute("disabled","");
        numCuenta.removeAttribute("disabled", "");
    }else {
        numCuenta.removeAttribute("required", "");
        
        numTarj.setAttribute("required","");
        codSeg.setAttribute("required", "");
        venc.setAttribute("required","");

        numTarj.removeAttribute("disabled","");
        codSeg.removeAttribute("disabled", "");
        venc.removeAttribute("disabled","");
        numCuenta.setAttribute("disabled", "");
    }
}

function cambiarSeleccion(){
    
    var seleccion = document.getElementById("seleccion");
    var tipo = document.getElementsByName('formaPago');
    var i = 0;   
    while(i < tipo.length) {

        if(tipo[i].checked) {
            
            var valueCombo = tipo[i].value;
            break;
            
        }
        i++;
    }    
    if (valueCombo === "transferencia"){
        seleccion.innerHTML = "Transferencia bancaria";
    } else {
        seleccion.innerHTML = "Tarjeta de crédito";
    }
}

function enviarFormulario(){
    const forms = document.getElementById("form");
    if(forms.checkValidity()){document.getElementById("alerta").innerHTML += `
    <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">¡Has comprado con éxito!</h4>
    </div>`
    setTimeout(() => { document.getElementById("alerta").innerHTML = "" ; }, 5000);}
}

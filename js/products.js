async function mostrarDatos(){
    let usuario = obtenerLocalStorage("usuario")
    let id = obtenerLocalStorage("catID")
    const response = await fetch(`https://japceibal.github.io/emercado-api/cats_products/${id}.json`);
    const json = await response.json();
    let htmlContentToAppend = "";

    console.log(json);

    json.products.forEach((product) => {
        htmlContentToAppend += `
        
        <div onclick="setProdId(${product.id})" class="list-group-item list-group-item-action">
            <div class="row" >
            <div class="col-3">
                    <img src="` + product.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ product.name +` - USD ` + product.cost + `</h4> 
                        <p> `+ product.description +`</p> 
                        </div>
                        <small class="text-muted">` + product.soldCount + ` vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById('productos') . innerHTML = htmlContentToAppend; 
        document.getElementById("nomusuario"). innerHTML = `${usuario}`;
    });  
}

mostrarDatos();


function setProdId(id) {
    localStorage.setItem("prodID", id);
    window.location = "product-info.html"
}

function obtenerLocalStorage(clave){
    return localStorage.getItem(clave); }
 





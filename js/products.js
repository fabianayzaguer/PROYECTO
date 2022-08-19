async function mostrarDatos(){
    const response = await fetch("https://japceibal.github.io/emercado-api/cats_products/101.json");
    const json = await response.json();
    let htmlContentToAppend = "";

    console.log(json);

    json.products.forEach((product) => {
        console.log(product.name);
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ product.name +` - USD ` + product.cost + `</h4> 
                        <p> `+ product.description +`</p> 
                        </div>
                        <small class="text-muted">` + '(en proceso)' + ` vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById('productos') . innerHTML = htmlContentToAppend; 
    });  
}

mostrarDatos();



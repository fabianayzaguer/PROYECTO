async function mostrarDatos(){
   
    let usuario = obtenerLocalStorage("usuario")
    let prodID = obtenerLocalStorage("prodID")
    const response = await fetch(`https://japceibal.github.io/emercado-api/products/${prodID}.json`);
    const json = await response.json();
   
    let htmlContentToAppend = "";

    console.log(json);

   let htmlparaimagen = ""
     for (let imagen of json.images){
        
        htmlparaimagen += `<img src = "${imagen}">`
     }
  
          {htmlContentToAppend += `
        
          <div class="row" >
          <h2>`+ json.name +`<h2>
              <div class="col">
                  <div >
                     
                      <h4> Precio </h4>  <small class="text-muted"> USD ` + json.cost + `</small> <br>
                       
                      <br><h4> Descripción </h4> <small class="text-muted">`+ json.description +`</small> <br>
                      
                      <br><h4> Categoria </h4> <small class="text-muted">` + json.soldCount + ` vendidos</small> <br>
                     
                      <br><h4> Imagenes ilustrativas </h4>
                      ${htmlparaimagen}
                  </div>

              </div>
              <div>
                 <p>`+ json.comments + `</p>
              </div>
              
              <div>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span
              </div>
          </div>
      
     `
        
        document.getElementById('producto-info') . innerHTML = htmlContentToAppend;
    
    }; 

    let htmlrelacionados = ""
     for (let productorelacionado of json.relatedProducts){
        console.log (productorelacionado);
     

        htmlrelacionados += `
        <div onclick="setProdId(${productorelacionado.id})"> 
        <p> ${productorelacionado.name}</p> 
        <img src = ${productorelacionado.image}>
        
        </div>`
       
    }; document.getElementById(`relacionados`) . innerHTML = htmlrelacionados;

       document.getElementById("nomusuario"). innerHTML = `${usuario}`;
    }
     
   
mostrarDatos();



function setProdId(id) {
    localStorage.setItem("prodID", id);
    window.location = "product-info.html"
}

function obtenerLocalStorage(clave){
    return localStorage.getItem(clave); }
 


const createProductCard = (productObject) => {
    let {article, brand, category, content, description, picture, price, stock} = productObject
    let cardHTML = 
`<div class="col">
    <div class="card-body">
        <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-3">
                <img src="${picture}" 
                style="
                width: 100%;
                height: 100%;
                object-fit: cover" 
                class="img-fluid rounded" 
                alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5>${description}</h5>
                  <ul class="list-group">
                    <li class="list-group-item">Articulo: ${article}</li>
                    <li class="list-group-item">Marca: ${brand}</li>
                    <li class="list-group-item">Categoria: ${category}</li>
                    <li class="list-group-item">Contenido Neto: ${content}</li>
                    <li class="list-group-item">Precio: $${price}</li>
                    <li class="list-group-item">Stock: ${stock}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </div>
</div>`
return cardHTML;
}

const fetchAllProducts = async () => {
    let response = await fetch(`https://javascript33g-cd62a-default-rtdb.firebaseio.com/Products/.json`)
    let data = await response.json()
    let keys = Object.keys(data)
    let productsArray = keys.map((key) => ({...data[key], key}))
    return productsArray
}

const printProducts = (productsArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId)
    wrapper.innerHTML = ""
    productsArray.forEach((product) => {
        let currentContent = wrapper.innerHTML
        wrapper.innerHTML = currentContent + createProductCard(product)        
    });
}

const printAllProducts = async () => {
    let productsArray = await fetchAllProducts()
    printProducts(productsArray, "products-wrapper")    
}

printAllProducts()
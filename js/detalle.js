//Extraer parametros de la url
//1.- Guardamos la url en una variable
const url = window.location.href
//2.- Creamos una instancia del objeto URLSearch params
const params = new URLSearchParams(new URL(url).search)
//3.- Extraemos el parametro que deseamos
let productKey = params.get("productKey")
console.log(productKey)

const fetchProductByKey = async (productKey) => {
    let response = await fetch(`https://javascript33g-cd62a-default-rtdb.firebaseio.com/Products/${productKey}/.json`)
    let data = await response.json()
    return data
}

const printProductData = async (productKey) => {
    let productData = await fetchProductByKey(productKey)
    let {article, brand, category, content, description, picture, price, stock, presentation} = productData

    document.getElementById("product-picture").setAttribute("src", picture)
    document.getElementById("product-article").innerText = article
    document.getElementById("product-brand").innerText = brand
    document.getElementById("product-category").innerText = category
    document.getElementById("product-content").innerText = content
    document.getElementById("product-description").innerText = description
    document.getElementById("product-presentation").innerText = presentation
    document.getElementById("product-price").innerText = price
    document.getElementById("product-stock").innerText = stock
}

printProductData(productKey)
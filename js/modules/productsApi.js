const PRODUCTS_BASE_URL = "https://javascript33g-cd62a-default-rtdb.firebaseio.com/Products/"

const createProductCard = async (productObject) => {
    let response = await fetch(`${PRODUCTS_BASE_URL}.json`, {
        method: 'POST',
        body: JSON.stringify(productObject)
    })
    let data = await response.json()
    return data
}

const fetchProductByKey = async (productKey) => {
    let response = await fetch(`${PRODUCTS_BASE_URL}${productKey}/.json`)
    let data = await response.json()
    return data
}

const fetchAllProducts = async () => {
    let response = await fetch(`${PRODUCTS_BASE_URL}.json`)
    let data = await response.json()
    let keys = Object.keys(data)
    let productsArray = keys.map((key) => ({...data[key], key}))
    return productsArray
}

export {createProductCard, fetchProductByKey, fetchAllProducts}
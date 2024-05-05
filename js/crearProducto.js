let createProductBtn = document.getElementById("create-product-btn")
createProductBtn.addEventListener("click", async () => {
    let fields = document.querySelectorAll("#create-product-form input")
    let productObject = {}
    fields.forEach((field) => {
        let type = field.type
        let property = field.name
        let value = field.value
        if (type === "text") {
            productObject[property] = value
        } else if (type === "number") {
            productObject[property] = Number(value)
        }
    })
    console.log(productObject)
    let savedProduct = await createProductCard(productObject)
    console.log(savedProduct)
})

const createProductCard = async (productObject) => {
    let response = await fetch(`https://javascript33g-cd62a-default-rtdb.firebaseio.com/Products/.json`, {
        method: 'POST',
        body: JSON.stringify(productObject)
    })
    let data = await response.json()
    return data
}
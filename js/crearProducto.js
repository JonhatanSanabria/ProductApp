import {createProductCard} from "../js/modules/productsApi.js"

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


import header from "./js/header.js"
import { products } from "./data/product.js";

//Called Header
header();
createProductsList();

function createProductsList() {
    if (products.length) {
        products.forEach(item => {

            const {images,brandName} = item

            const createProduct = `<div class="product-card">
            
                                        <img src="${images[0]}" alt="${brandName}" />
                                        <h6>${brandName}</h6>

                                  </div>`

            document.querySelector("#append_Products").innerHTML += createProduct


        })
    }
}

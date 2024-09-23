import header from "./js/header.js"
import { products } from "./data/product.js";

//Called Header
header();
createProductsList();

function createProductsList() {
    if (products.length) {
        products.forEach(item => {

            const { images, brand, additionalInfo, discountedPrice, originalPrice, discountPercentage } = item

            console.log(images, brand, additionalInfo, discountedPrice, originalPrice, discountPercentage)

            const createProduct = `<li class="product-card">
                                        <div>  
                                          <img src="${images[0].src}" alt="${brand}" />
                                        </div>
                                        <h3 class="product-brand">${brand}</h3>
                                        <p class="product-info">${additionalInfo}</p>
                                  </li>`

            document.querySelector("#append_Products").innerHTML += createProduct


        })
    }
}

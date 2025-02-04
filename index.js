import header from "./js/header.js"
import { products } from "./data/product.js";
import { addToWishlist } from "./js/addToWishlist.js";


let sortedProducts = []

const itemsPerPage = 12;
let currentView = 1;


export const handelFilterClick =  (getSorting) => {
     return () => {
       
         switch (getSorting) {
            case "lth":
                sortedProducts = products.toSorted((a, b) => a.discountedPrice - b.discountedPrice)
                break;
            case "htl":
                sortedProducts = products.toSorted((a, b) => b.discountedPrice - a.discountedPrice)
                break;

            default:
                sortedProducts = []
                break;

                
        }
       
        
        document.querySelector(".sorting-filter--section").classList.toggle("d-none")
        document.querySelector("#append_Products").innerHTML = ""
        createProductsList(1)
    }
}

//Called Header
header();



createProductsList(currentView);
async function createProductsList(scrollCount) {
    if (products.length) {
        const startIndex = (scrollCount - 1) * itemsPerPage;
        const endIndex = scrollCount * itemsPerPage;

        
        const currentItems = !sortedProducts.length ? products.slice(startIndex, endIndex) : sortedProducts.slice(startIndex, endIndex);

        const wishlistIcon = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`


        currentItems.forEach((item, i) => {
            const { images, brand, additionalInfo, discountedPrice, originalPrice, discountPercentage, styleId } = item
            const createProduct = `<li class="product-card skeleton">
                                        <div class="product-top--section">
                                            <img src="${images[0].src}" alt="${brand}" />
                                            <span class="wishlist-section">
                                              <span id="btn_${styleId}" class="wishlist-btn" product-data="${encodeURIComponent(JSON.stringify(item))}")">
                                               ${wishlistIcon}
                                               <span>wishlist</span>
                                              </span>
                                            </span>
                                        </div>
                                        <div class="products-details">
                                            <h3 class="product-brand">${brand}</h3>
                                            <p class="product-info">${additionalInfo}</p>
                                            <div class="product-des">
                                                <span class="product-discountedPrice">Rs. ${discountedPrice}</span>
                                                <span class="product-strike">Rs. ${originalPrice}</span>
                                                <span class="product-discountPercentage">${discountPercentage}</span>
                                            </div>
                                        </div>
                                    </li>`
            document.querySelector("#append_Products").innerHTML += createProduct;
        })

        setTimeout(() => document.querySelectorAll(".product-card").forEach(skeletonCard => skeletonCard.classList.remove("skeleton")), 1 * 1000)
        document.querySelectorAll(".wishlist-btn").forEach(item => item.addEventListener("click", addToWishlist))
    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        currentView++;
        createProductsList(currentView);
    }
});







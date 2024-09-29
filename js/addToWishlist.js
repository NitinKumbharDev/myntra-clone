import { createMoveToBagList } from "./moveToBag.js";

let moveToBagData = [];
let wishlistDataArr = [];

//Get Data From Wishlist
export function addToWishlist(e) {
   const getProductData = JSON.parse(decodeURIComponent(e.target.getAttribute("product-data")))
   if (!moveToBagData.some(element => element.styleId === getProductData.styleId)) {
      if (wishlistDataArr.some(element => element.styleId === getProductData.styleId)) {
         Object.assign(e.target.style, { backgroundColor: "#FFF", color: "#282c3f" });
         Object.assign(e.target.children[0].style, { fill: "none" });
         let filterArray = wishlistDataArr.filter(item => item.styleId !== getProductData.styleId);
         wishlistDataArr = []
         wishlistDataArr = [...filterArray]

         Toastify({
            text: `${getProductData.product} Remove From Wishlist`,
            className: "notify-danger",
            position: "center",
            style: {
               background: "#ff0e0e",
            }
         }).showToast();

      } else {
         Object.assign(e.target.style, { backgroundColor: "rgb(83, 87, 102)", color: "#FFF" });
         Object.assign(e.target.children[0].style, { fill: "#ff3f6c" });
         wishlistDataArr.push(getProductData)

         Toastify({
            text: `${getProductData.product} Added In Wishlist`,
            className: "notify-success",
            position: "center",
            style: {
               background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
         }).showToast();

      }

      populateAddToWishlist()
   } else {
      Toastify({
         text: `This Product All Ready Added In Bag`,
         className: "notify-success",
         position: "center",
         style: {
            background: "#ff0e0e",
         }
      }).showToast();
   }
}

//Handel Remove Populated Products
function handelRemoveProductFromWishlist(e) {

   if (wishlistDataArr.some(element => element.styleId == e.target.id.split("_")[1])) {
      Object.assign(document.querySelector(`#btn_${e.target.id.split("_")[1]}`).style, { backgroundColor: "#FFF", color: "#282c3f" });
      Object.assign(document.querySelector(`#btn_${e.target.id.split("_")[1]} svg`).style, { fill: "none" });
      let filterArray = wishlistDataArr.filter(item => item.styleId != e.target.id.split("_")[1]);
      wishlistDataArr = []
      wishlistDataArr = [...filterArray]

      Toastify({
         text: `${e.target.offsetParent.nextElementSibling.children[0].innerText} Remove From Wishlist`,
         className: "notify-danger",
         position: "center",
         style: {
            background: "#ff0e0e",
         }
      }).showToast();

   }

   populateAddToWishlist();
}

//Handel Select Product Size
function handelSelectSize(e) {
   let getSizeNodeList = [...e.target.parentElement.children]
   getSizeNodeList.forEach(element => element.classList.remove("select"))
   e.target.classList.add("select");
}


//Handel Product Moving To Bag
function handelAddToMoveBag(e) {
   const getSelectedSizeObj = {}
   const getSizeElements = [...e.target.parentElement.previousElementSibling.children]
   getSizeElements.some(item => {
      if (item.classList.contains("select")) {
         wishlistDataArr.some(element => {
            if (element.styleId === +e.target.id.split("_")[0]) {
               getSelectedSizeObj["size"] = item.innerText;
               moveToBagData.push({ ...element, ...getSelectedSizeObj })
               Object.assign(document.querySelector(`#btn_${e.target.id.split("_")[0]}`).style, { backgroundColor: "#FFF", color: "#282c3f" });
               Object.assign(document.querySelector(`#btn_${e.target.id.split("_")[0]} svg`).style, { fill: "none" });
               let filterArray = wishlistDataArr.filter(item => item.styleId !== +e.target.id.split("_")[0]);
               wishlistDataArr = []
               wishlistDataArr = [...filterArray]
               populateAddToWishlist();
            }
         })
      }
   })

   JSON.stringify(getSelectedSizeObj) === '{}' ?
      Toastify({
         text: `Please Select Any One Size`,
         className: "notify-success",
         position: "center",
         style: {
            background: "rgb(0, 176, 155)",
         }
      }).showToast() : createMoveToBagList(moveToBagData)
}


//Populate Wishlist Product List
function populateAddToWishlist() {
   document.querySelector("#wishlist_Badge_Count").innerText = wishlistDataArr.length || ""
   if (wishlistDataArr.length) {

      document.querySelector("#append_Wishlist").classList.remove("d-none");
      document.querySelector(".empty-wishlist").classList.add("d-none");
      document.querySelector("#append_Wishlist").innerHTML = ""

      wishlistDataArr.forEach((item) => {
         const { images, brand, discountedPrice, originalPrice, discountPercentage, product, styleId } = item
         const createWishlistProduct = `<li class="product-card">
                                     <div class="product-top--section position-relative">
                                         <img src="${images[0].src}" alt="${brand}" />
                                           <span class="wishlist--closed-btn" id="product_${styleId}">
                                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                           </svg>
                                         </span>
                                     </div>
                                     <div class="products-details">
                                         <h3 class="product-brand">${product}</h3>
                                         <div class="product-des">
                                             <span class="product-discountedPrice">Rs. ${discountedPrice}</span>
                                             <span class="product-strike">Rs. ${originalPrice}</span>
                                             <span class="product-discountPercentage">${discountPercentage}</span>
                                         </div>

                                          <div class="select-size">
                                            <span id="S_size">S</span>
                                            <span id="M_size">M</span>
                                            <span id="L_size">L</span>
                                            <span id="XL_size">Xl</span>
                                          </div>

                                         <div class="d-flex justify-content-center align-items-center" >
                                           <span class="move-to-bag--btn" id="${styleId}_bag">Move To Bag</span>
                                         </div>
                                     </div>
                                 </li>`
         document.querySelector("#append_Wishlist").innerHTML += createWishlistProduct;
      })

      document.querySelectorAll(".wishlist--closed-btn").forEach(element => element.addEventListener("click", handelRemoveProductFromWishlist))
      document.querySelectorAll(".move-to-bag--btn").forEach(element => element.addEventListener("click", handelAddToMoveBag))
      document.querySelectorAll(".select-size > span").forEach(element => element.addEventListener("click", handelSelectSize))

   } else {
      wishlistDataArr = []
      document.querySelector("#append_Wishlist").classList.add("d-none");
      document.querySelector(".empty-wishlist").classList.remove("d-none");
      document.querySelector("#append_Wishlist").innerHTML = ""
   }
}
let wishlistDataArr = [];
export function addToWishlist(e) {
   const getProductData = JSON.parse(decodeURIComponent(e.target.getAttribute("product-data")))
   if (wishlistDataArr.some(element => element.styleId === getProductData.styleId)) {
      Object.assign(e.target.style, { backgroundColor: "#FFF", color: "#282c3f" });
      Object.assign(e.target.children[0].style, { fill: "none" });
      let filterArray = wishlistDataArr.filter(item => item.styleId !== getProductData.styleId);
      wishlistDataArr = []
      wishlistDataArr = [...filterArray]
   } else {
      Object.assign(e.target.style, { backgroundColor: "rgb(83, 87, 102)", color: "#FFF" });
      Object.assign(e.target.children[0].style, { fill: "#ff3f6c" });
      wishlistDataArr.push(getProductData)
   }

   populateAddToWishlist()
}

function populateAddToWishlist() {
   document.querySelector("#wishlist_Badge_Count").innerText = wishlistDataArr.length || ""
   if (wishlistDataArr.length) {
      
   }
}


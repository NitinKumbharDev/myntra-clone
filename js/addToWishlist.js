const wishlistDataArr = [];

export function addToWishlist(e) {
   const getProductData = e.target.getAttribute("product-data");
   console.log(JSON.parse(decodeURIComponent(getProductData)))

   
}
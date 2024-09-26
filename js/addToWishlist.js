const wishlistDataArr = [];

export function addToWishlist(e) {
   const getProductData = JSON.parse(decodeURIComponent(e.target.getAttribute("product-data")))
   let {images,brand} = getProductData;
   console.log(images,brand)
}
export let moveToBagData = [];
export function createMoveToBagList() {
    let totalMRP = []
    let discountedMRP = []

    document.querySelector("#bag_Badge_Count").innerText = moveToBagData.length || ""

    if (moveToBagData.length) {
        document.querySelector("#item_count").innerHTML = moveToBagData.length + " Items"
        document.querySelector("#empty_Bag").classList.add("d-none")
        document.querySelector("#bag_section").classList.remove("d-none")
        document.querySelector("#append_bagItem").innerHTML = ""
        moveToBagData.forEach(item => {
            const { images, brand, additionalInfo, discountedPrice, originalPrice, discountPercentage, product, styleId, size } = item
            const createBagItem = `<li class="position-relative">
                                        <span class="item-img">
                                            <img src="${images[0].src}" alt="${brand}" />
                                        </span>
                                        <div class="item-info">
                                            <h3 class="item-brand">${brand}</h3>
                                                <p class="item-info">${additionalInfo}</p>
                                                <span class="item-size">Size: ${size}</span>

                                                <div class="product-des">
                                                    <span class="product-discountedPrice">Rs. ${discountedPrice}</span>
                                                    <span class="product-strike">Rs. ${originalPrice}</span>
                                                    <span class="product-discountPercentage">${discountPercentage}</span>
                                                </div>

                                                 <span class="bag--closed-btn" id="item_${styleId}">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </span>  
                                        </div>
                                    </li>`
            document.querySelector("#append_bagItem").innerHTML += createBagItem
            totalMRP.push(originalPrice)
            discountedMRP.push(discountedPrice)

        });


        const totalProductMRP = totalMRP.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        const totalDiscountedMRP = discountedMRP.reduce((accumulator, currentValue) => accumulator + currentValue, 0) - totalProductMRP
        const totalAmount = discountedMRP.reduce((accumulator, currentValue) => accumulator + currentValue, 0) + 20 + 80


        document.querySelector("#total_MRP").innerText = "₹ " + totalProductMRP;
        document.querySelector("#total_Discount").innerText = "₹ " + totalDiscountedMRP;
        document.querySelector("#total_amount").innerHTML = "₹ " + totalAmount;


        document.querySelectorAll(".bag--closed-btn").forEach(item => item.addEventListener("click", handelRemoveFromBag))

    } else {
        document.querySelector("#empty_Bag").classList.remove("d-none")
        document.querySelector("#bag_section").classList.add("d-none")
    }
}

function handelRemoveFromBag(e) {

    if (moveToBagData.some(element => element.styleId == e.target.id.split("_")[1])) {
        let filterArray = moveToBagData.filter(item => item.styleId != e.target.id.split("_")[1]);
        moveToBagData = []
        moveToBagData = [...filterArray]

        Toastify({
            text: `Product Remove From Bag`,
            className: "notify-danger",
            position: "center",
            style: {
                background: "#ff0e0e",
            }
        }).showToast();

    }

    createMoveToBagList()
}


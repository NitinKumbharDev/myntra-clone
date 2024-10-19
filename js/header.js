import { handelFilterClick } from "../index.js"

export default async function createHeader() {

    const searchIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`

    const bagIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`

    const wishlistIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>`

    const filterIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4.6C2 4.03995 2 3.75992 2.10899 3.54601C2.20487 3.35785 2.35785 3.20487 2.54601 3.10899C2.75992 3 3.03995 3 3.6 3H20.4C20.9601 3 21.2401 3 21.454 3.10899C21.6422 3.20487 21.7951 3.35785 21.891 3.54601C22 3.75992 22 4.03995 22 4.6V5.26939C22 5.53819 22 5.67259 21.9672 5.79756C21.938 5.90831 21.8901 6.01323 21.8255 6.10776C21.7526 6.21443 21.651 6.30245 21.4479 6.4785L15.0521 12.0215C14.849 12.1975 14.7474 12.2856 14.6745 12.3922C14.6099 12.4868 14.562 12.5917 14.5328 12.7024C14.5 12.8274 14.5 12.9618 14.5 13.2306V18.4584C14.5 18.6539 14.5 18.7517 14.4685 18.8363C14.4406 18.911 14.3953 18.9779 14.3363 19.0315C14.2695 19.0922 14.1787 19.1285 13.9971 19.2012L10.5971 20.5612C10.2296 20.7082 10.0458 20.7817 9.89827 20.751C9.76927 20.7242 9.65605 20.6476 9.58325 20.5377C9.5 20.4122 9.5 20.2142 9.5 19.8184V13.2306C9.5 12.9618 9.5 12.8274 9.46715 12.7024C9.43805 12.5917 9.39014 12.4868 9.32551 12.3922C9.25258 12.2856 9.15102 12.1975 8.94789 12.0215L2.55211 6.4785C2.34898 6.30245 2.24742 6.21443 2.17449 6.10776C2.10986 6.01323 2.06195 5.90831 2.03285 5.79756C2 5.67259 2 5.53819 2 5.26939V4.6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`

    const headerElement = `<header class="header-container">
                                <a class="logo" id="Home_Nav"><img src="../img/myntra-2.svg" alt="logo" /></a>
                                <div class="search-section d-none">
                                    <span class="d-flex align-items-center justify-content-center">${searchIcon}</span>
                                    <input type="text" placeholder="Search for products..." />
                                </div>
                                
                                <div class="menu-tooling--section">
                                    <div class="d-flex flex-column align-items-center justify-content-center cursor-pointer position-relative" id="filter_Nav">
                                      <span class="d-flex flex-column align-items-center justify-content-center">${filterIcon}</span>
                                      <p>Filter</p> 
                                    </div>
                                    <div class="d-flex flex-column align-items-center justify-content-center cursor-pointer position-relative" id="wishlist_Nav">
                                      <span class="d-flex flex-column align-items-center justify-content-center">${wishlistIcon}</span>
                                      <p>Wishlist</p> 
                                      <small id="wishlist_Badge_Count" class="count-Badge"></small>
                                    </div>
                                    <div class="d-flex flex-column align-items-center justify-content-center cursor-pointer position-relative" id="bag_Nav">
                                       <span class="d-flex flex-column align-items-center justify-content-center">${bagIcon}</span>
                                       <p>Bag</p> 
                                       <small id="bag_Badge_Count" class="count-Badge"></small>
                                    </div>
                                </div>

                            </header>
                            
                             <div class="sorting-filter--section d-none">
                                       <span data-sort="htl">Hight To Low</span>
                                       <span  data-sort="lth">Low To High</span>
                                       <span  data-sort="clr">Clear</span>
                                </div>

                            `

    document.querySelector("#append_Header").innerHTML = headerElement;

    document.querySelector("#Home_Nav").addEventListener("click", () => {
        document.querySelector("#append_Products").classList.remove("d-none")
        document.querySelector("#wishlist_Container").classList.add("d-none")
        document.querySelector("#bag_Container").classList.add("d-none")

    })

    document.querySelector("#wishlist_Nav").addEventListener("click", () => {
        document.querySelector("#append_Products").classList.add("d-none")
        document.querySelector("#bag_Container").classList.add("d-none")
        document.querySelector("#wishlist_Container").classList.remove("d-none")
    })

    document.querySelector("#bag_Nav").addEventListener("click", () => {
        document.querySelector("#append_Products").classList.add("d-none")
        document.querySelector("#bag_Container").classList.remove("d-none")
        document.querySelector("#wishlist_Container").classList.add("d-none")

    })

    document.querySelectorAll(".sorting-filter--section > span").forEach( item=> item.onclick = handelFilterClick(item.getAttribute("data-sort")))

    document.querySelector("#filter_Nav").addEventListener("click", () => document.querySelector(".sorting-filter--section").classList.toggle("d-none"))

    
}


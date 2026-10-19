"use strict";
const productURL = `https://dummyjson.com/products/category/groceries?limit=8`;
const listContainer = document.querySelector(".product_list_container");
const product = document.querySelector(".product_card");

let allData;

function getData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      allData = data;
      showProducts(allData.products);
    });
  });
}

function showProducts(products) {
  console.log("Products", products);
  listContainer.innerHTML = "";
  products.forEach((product) => {
    listContainer.innerHTML += `<a class="product-link" href="product.html?id=${product.id}"><div class="product_card">
                     <div>
                         <div class="tilbud"><img src="assets/discount.svg" alt="discount"></div>
                        <p class="tilbud_procent">${Math.round(product.discountPercentage)}%</p>
                     </div>

                     <div>

                         <img class="product-img" src="${product.images[0]}" alt="test">
                         <div class="product_info">
                             <p class="product_name">${product.title}</p>
                             <div>
                                 <p class="product_price">${product.price}$</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 </a>`;
  });
  //   productList.innerHTML = myInnerHtml;
}

getData(productURL);

// function getDiscountPrice(origianlPrice, discount) {
//   return Math.round((origianlPrice * (100 - discount)) / 100);
// }

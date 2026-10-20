"use strict";
const productURL = `https://dummyjson.com/products/category/groceries`;
const listContainer = document.querySelector(".product_list_container");
const product = document.querySelector(".product_card");

let allData;

const protein = document.querySelector(".protein");
const drinks = document.querySelector(".drinks");
const produce = document.querySelector(".produce");
const essentials = document.querySelector(".essentials");

protein.addEventListener("click", proteinclick);

function proteinclick() {
  console.log("proteinclick");
  location.href = "product-list.html?id=17&19&23&24&36";
}

drinks.addEventListener("click", drinksclick);

function drinksclick() {
  console.log("drinksclick");
  location.href = "product-list.html?id=29&32&34&39&42";
}

produce.addEventListener("click", produceclick);

function produceclick() {
  console.log("produceclick");
  location.href = "product-list.html?id=16&21&25&26&30&31&33&35&37&40";
}

essentials.addEventListener("click", essentialsclick);

function essentialsclick() {
  console.log("essentialsclick");
  location.href = "product-list.html?id=18&20&22&27&28&38&41";
}

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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

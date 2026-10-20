"use strict"

const params = new URLSearchParams(window.location.search);
const selectedID = params.get("id");
console.log("selectedID", selectedID);

const detailURL = `https://dummyjson.com/products/${selectedID}`;
console.log("detailURL", detailURL);

let allData;

function loadData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      console.log("data", data);
        allData = data;
      showDetails(allData);
    });
  });
}

function getDiscountPrice(originalPrice, discount) {
    return Math.round((originalPrice * (100 - discount)) / 100);
}

function showDetails(detail) {
    console.log("detail", detail);

    document.querySelector(".product_picture").src = `${detail.images[0]}`;

   document.querySelector(".now_price").innerHTML = "$" + getDiscountPrice(detail.price, detail.discountPercentage);

   document.querySelector(".before_price").innerHTML = "$" + detail.price;

    document.querySelector(".product_title").innerHTML = detail.title;
    
    document.querySelector(".description").innerHTML = detail.description;

    document.querySelector(".category").innerHTML = "Category: " + detail.category;
    document.querySelector(".weight").innerHTML = "Stock: " + detail.stock;
    document.querySelector(".measurements").innerHTML = "Tags: " + detail.tags;

}

loadData(detailURL);
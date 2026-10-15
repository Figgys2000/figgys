// const productURL = `https://dummyjson.com/products/category/groceries`;
// const listContainer = document.querySelector(".product_list_container");

// let allData;

// function getData(url) {
//   fetch(url).then((response) => {
//     response.json().then((data) => {
//       allData = data;
//       showProducts(allData);
//     });
//   });
// }

// function showProducts(products) {
//   console.log("Products", products);
//   console.log("Number of products", products.length);

//   listContainer.innerHTML = "";

//   products.forEach((product) => {
//     listContainer.innerHTML += `<article class="product ${product.soldout ? "soldout" : ""}">
//           <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Placeholder" />
//           <h3>${product.productdisplayname}</h3>
//           <p>${product.brandname} - ${product.category}</p>
//           <div>
//            ${product.discount ? "<p class='discount_tag'>" + getDiscountPrice(product.price, product.discount) + " kr</p>" : ""}
//             <p>${product.price} kr  ${product.discount ? " <em>-" + product.discount + "%</em>" : ""}</p>
//           </div>
//           <p><a href="detailview.html?id=${product.id}">Read More</a></p>
//           ${product.soldout ? "<p class='soldout_tag'>Sold Out</p>" : ""}
//         </article>`;
//   });
// }

// getData(productURL);

// function getDiscountPrice(origianlPrice, discount) {
//   return Math.round((origianlPrice * (100 - discount)) / 100);
// }

"use strict"
const electronicsLink = document.getElementById("electronics-link");
const clothingLink = document.getElementById("clothing-link");
const booksLink = document.getElementById("books-link");
const productsList = document.getElementById("products");

electronicsLink.addEventListener("click", () => showProduct("electronics"));
clothingLink.addEventListener("click", () => showProduct("clothing"));
booksLink.addEventListener("click", () => showProduct("books"));

showProductInfo()


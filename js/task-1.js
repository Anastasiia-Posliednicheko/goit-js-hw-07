'use strict'




function processCategories() {
    const categoriesList = document.querySelectorAll("#categories .item");
    console.log("Number of categories:", categoriesList.length);

    categoriesList.forEach(category => {
        const title = category.querySelector("h2").textContent;
        const itemsCount = category.querySelectorAll("ul li").length;
        console.log(`Category: ${title}\nElements: ${itemsCount}`);
    });
}


document.addEventListener("DOMContentLoaded", processCategories);

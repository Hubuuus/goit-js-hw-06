const ListCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${ListCategories.length} `);
const categoryElementsCount = ListCategories.forEach(e => {
  console.log(
    `Category: ${e.querySelector("h2").textContent}\nElements: ${
      e.querySelector("ul").childElementCount
    }`
  );
});

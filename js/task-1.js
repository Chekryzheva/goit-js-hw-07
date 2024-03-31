const categoriesList = document.querySelectorAll("#categories .item");

console.log(`numbers of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElementsCount = category.querySelectorAll("li").length;

  console.log(`category: ${categoryName} elements: ${categoryElementsCount}`);
});

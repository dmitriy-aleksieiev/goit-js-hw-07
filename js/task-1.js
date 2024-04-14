const categoriesList = document.querySelectorAll('.item');

console.log(`Number of Categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li');

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});

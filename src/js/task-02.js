const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const findUl = document.querySelector("#ingredients");
const ingredientsF = ingredients.forEach(ingredient => {
  let ingredientsList = document.createElement("li");
  ingredientsList.classList.add("item");
  ingredientsList.textContent = ingredient;
  findUl.append(ingredientsList);
});

// Zrobiłem poniższy kod jako pierwszy, ale zauważyłem że należy użyć metody "document.createElement()". Więc zostawiam go w ramach dodatku.

// const list = document.querySelector("#ingredients");

// const ingredientsList = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// console.log(ingredientsList);

// list.innerHTML = ingredientsList;

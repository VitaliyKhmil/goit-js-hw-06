const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arr = ingredients.map(ingredient => {
  const child = document.createElement('li');
  child.classList.add('item');
  child.textContent = ingredient;
  return child;
});

const selector = document.querySelector('#ingredients'); 
selector.append(...arr);

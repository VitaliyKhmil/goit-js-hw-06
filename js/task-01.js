const selector = document.querySelectorAll('#categories > li.item');

const total = selector.length;
console.log(`Number of categories: ${total}`);

selector.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const counter = item.querySelectorAll("ul li").length;
    console.log(`Category: ${categoryName}`);
    console.log('Elements: ' + counter);
});

// const categoryName1 = selector[0].querySelector("h2").textContent;
// const counter1 = selector[0].querySelectorAll("ul li").length
// console.log(`Category: ${categoryName1}`);
// console.log(`Elements: ${counter1}`);

// const categoryName2 = selector[1].querySelector("h2").textContent;
// const counter2 = selector[1].querySelectorAll("ul li").length
// console.log(`Category: ${categoryName2}`);
// console.log(`Elements: ${counter2}`);

// const categoryName3 = selector[2].querySelector("h2").textContent;
// const counter3 = selector[2].querySelectorAll("ul li").length
// console.log(`Category: ${categoryName3}`);
// console.log(`Elements: ${counter3}`);


// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

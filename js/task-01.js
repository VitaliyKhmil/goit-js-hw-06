const selector = document.querySelectorAll('#categories > li.item');

const total = selector.length;
console.log(`Number of categories: ${total}`);

selector.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const counter = item.querySelectorAll("ul li").length;
    console.log(`Category: ${categoryName}`);
    console.log('Elements: ' + counter);
});
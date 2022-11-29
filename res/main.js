const itemElements = document.querySelectorAll("ul#items-list li");
let lastItemElement = itemElements[itemElements.length - 1];

const handleItemUpdate = (e) => {
    console.log(e.target.value)
}

itemElements.forEach((item, i) => {
    item.addEventListener("keyup", handleItemUpdate)
})

// lastItemElement.addEventListener("keyup", (e) => {
//     console.log(e.target.value)
// }, false);

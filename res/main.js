const itemsListElement = document.querySelector("ul#items-list");
let itemElements = [];
let lastItemElement = null;

const handleItemUpdate = (e) => {
  console.log(e.target.value);
};

const handleLastItemUpdate = (e) => {
  addInputElement()
  lastItemElement.addEventListener("keyup", handleLastItemUpdate)
};

const addInputElement = () => {
  lastItemElement.removeEventListener("keyup", handleLastItemUpdate)
  const listItemElement = document.createElement("li")
  listItemElement.innerHTML = `
      <input type="text">
  `
  itemsListElement.appendChild(listItemElement)
  updateItemElements()
}

const updateItemElements = () => {
  itemElements.slice(0, -1).forEach((item, i) => {
    item.addEventListener("keyup", handleItemUpdate);
  }); 
  itemElements = [...itemsListElement.querySelectorAll("li")];
  lastItemElement = itemElements[itemElements.length - 1]
};


window.onload = () => {
  updateItemElements();
  itemElements.slice(0, -1).forEach((item, i) => {
    item.addEventListener("keyup", handleItemUpdate);
  }); 
  lastItemElement.addEventListener("keyup", handleLastItemUpdate)
};

import { menuItems } from './app.js';

const addButtons = document.querySelectorAll('.add');
const cartSummary = document.querySelector('.cart-summary');

const buttonTransformToAddCart = (button) => {
	button.classList.add('add');
	button.classList.remove('in-cart');
	while (button.firstChild) {
		button.removeChild(button.lastChild);
	}
	const TextNode = document.createTextNode('Add to Cart');
	button.appendChild(TextNode);
};;


const buttonTransformToCart = (button) => {
	let TextNode = document.createTextNode('In Cart');
	const ImageElement = document.createElement('img');
    ImageElement.src = './images/check.svg';
	button.classList.remove('add');
	button.classList.add('in-cart');
	button.removeChild(button.firstChild);
    button.appendChild(TextNode);
	button.appendChild(ImageElement);
};


const updateValuesinDiv=(button,index)=>{
    const listItem = button.parentNode.parentNode;
	let quantityElements=listItem.querySelectorAll('.quantity');
	quantityElements.forEach((element) => {
		element.textContent = menuItems[index].count;
	});


    const subTotalDiv = listItem.querySelector('.subtotal');
	let subtotalVal=((menuItems[index].count)*(menuItems[index].price/100)).toFixed(2);
    replaceTextInDiv(subTotalDiv, `$${subtotalVal}`);

    updateTotalPrice();
}

const removeItemFromCart = (button,index) => {
	buttonTransformToAddCart(addButtons[index]);
    cartSummary.removeChild(button.parentNode.parentNode);
};


const decreaseQuantity = (button, index) => {
    --menuItems[index].count;
    if (!menuItems[index].count) {
        removeItemFromCart(button,index);
    }
    updateValuesinDiv(button, index);

};

const increaseQuantity = (button, index) => {
    if (menuItems[index].count == 0) return ++menuItems[index].count;
    ++menuItems[index].count;
	updateValuesinDiv(button, index);
};

const addItemsToCart = (index) => {

    let listItem = document.createElement("li");
    listItem.append(
      createPlate(index),
      createContent(index),
      createQuantityWrapper(index),
      createSubtotal(index) //increment item count
    );
    cartSummary.appendChild(listItem);
    updateTotalPrice();
  };

  const initialisePlateQuantity = (index) => {
    return ++menuItems[index].count;
};
const createElement = (elementType, elementClass, elementText) => {
    const element = document.createElement(elementType);
    element.classList.add(elementClass);
    const elementTextNode = document.createTextNode(elementText);
	element.appendChild(elementTextNode)
    return element;
};

  const createPlate = (index) => {
    const plate = document.createElement('div');
    plate.classList.add('plate');

    const quantity = createElement(
        'div',
        'quantity',
        initialisePlateQuantity(index),
    );
	const imgNode = document.createElement('img');
	imgNode.classList.add('plate');
	imgNode.src = `./images/${menuItems[index].image}`;
    plate.appendChild(imgNode);
    plate.appendChild(quantity);

    return plate;
};

const createContent = (index) => {
    const content = document.createElement('div');
    content.classList.add('content');

    const menuItem = createElement('p', 'menu-item', menuItems[index].name);
    const price =
        createElement('p', 'price', '$' + menuItems[index].price / 100);

    content.appendChild(menuItem);
    content.appendChild(price);

    return content;
};


const createQuantityWrapper = (index) => {
    const quantityWrapper = document.createElement('div');
    quantityWrapper.classList.add('quantity__wrapper');

	const decreaseButton = document.createElement('button');
	decreaseButton.classList.add('decrease');
	const decreaseButtonImg = document.createElement('img');
	decreaseButtonImg.src = './images/chevron.svg';
	decreaseButton.appendChild(decreaseButtonImg);

    decreaseButton.addEventListener('click', () =>
        decreaseQuantity(decreaseButton, index),
    );

    const quantity = createElement('div', 'quantity', menuItems[index].count);

    const increaseButton = document.createElement('button');
	increaseButton.classList.add('increase');
	const increaseButtonImg = document.createElement('img');
	increaseButtonImg.src = './images/chevron.svg';
	increaseButton.appendChild(increaseButtonImg);

    increaseButton.addEventListener('click', () =>
        increaseQuantity(increaseButton, index),
    );

    quantityWrapper.append(decreaseButton, quantity, increaseButton);

    return quantityWrapper;
};

const createSubtotal = (index) => {
	let subtotalValue=(menuItems[index].count)*(menuItems[index].price/100)
    const subtotal = createElement(
        'div',
        'subtotal',
        '$' + subtotalValue,
    );
    return subtotal;
};


const calcSubTotal = () => {
	let subTotal = 0;
	menuItems.forEach((item) => {
		subTotal += item.price * item.count/100;
	});
	return subTotal.toFixed(2);
};

const calcTaxAmount = (subTotal) => {
	const TaxVal = 0.0975;
	return (subTotal * TaxVal).toFixed(2);
};

const replaceTextInDiv = (div, text) => {
	while (div.firstChild) {
		div.removeChild(div.lastChild);
	}
	const textNode = document.createTextNode(text);
	div.appendChild(textNode);
};

const hideEmptyTag = () => {
    const emptyTag = document.querySelector('.empty');
    emptyTag.style.visibility = 'hidden';
};

const showEmptyTag = () => {
    const emptyTag = document.querySelector('.empty');
    emptyTag.style.visibility = 'visible';
};

const updateTotalPrice = () => {
    const totalsParentDiv = document.querySelector('.totals');
    const subTotalDiv = totalsParentDiv.querySelector('.subtotal');
    const taxDiv = totalsParentDiv.querySelector('.tax');
    const totalDiv = totalsParentDiv.querySelectorAll('.total')[1];
	const subtotal = calcSubTotal();
	const taxAmount = calcTaxAmount(subtotal);
	const totalAmount = (Number(subtotal) + Number(taxAmount)).toFixed(2);
	replaceTextInDiv(subTotalDiv, `$${subtotal}`);
	replaceTextInDiv(taxDiv, `$${taxAmount}`);
	replaceTextInDiv(totalDiv, `$${totalAmount}`);
    subtotal > 0 ? hideEmptyTag() : showEmptyTag();
};

export {
	addButtons,
	buttonTransformToCart,
	addItemsToCart
};
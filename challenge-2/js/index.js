import {
	addButtons,
	buttonTransformToCart,
	addItemsToCart
} from './functions.js';

const sendtoCart = () => {
    for (let i = 0; i < addButtons.length; i++) {
      addButtons[i].addEventListener("click", () => {
        if (!addButtons[i].classList.contains("in-cart")) {
          buttonTransformToCart(addButtons[i]);
          addItemsToCart(i);
        }
      });
    }
  };
  
  sendtoCart();

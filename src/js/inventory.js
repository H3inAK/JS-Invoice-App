import { availableProducts, newProductName, newProductPrice, productItemTemplate } from "./selectors";

export const addNewProductBtnHandler = () => {
    const newProduct = createProduct(newProductName.value, newProductPrice.valueAsNumber);
    availableProducts.append(newProduct);
    newProduct.classList.add('translate-y-2', 'opacity-0', 'duration-300')
    setTimeout(() => {
        newProduct.classList.remove('translate-y-2', 'opacity-0')
    }, 0);
}

const createProduct = (name, price) => {
    const productItemFragment = productItemTemplate.content.cloneNode(true);
    const productItem = productItemFragment.querySelector('.product-item')
    const productName = productItem.querySelector('.product-item-name');
    const productPrice = productItem.querySelector('.product-item-price');

    productName.innerText = name;
    productPrice.innerText = price;
    newProductName.value = '';
    newProductPrice.value = null;

    return productItem;
}
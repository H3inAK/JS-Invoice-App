import { v4 as uuidv4 } from 'uuid';

import { availableProducts, newProductName, newProductPrice, productItemTemplate, productSelect } from "./selectors";
import { products } from './states';

export const addNewProductBtnHandler = () => {
    const productName = newProductName.value.trim();
    const productPrice = newProductPrice.valueAsNumber;
    if (!productName && !productPrice) return;

    const newProduct = createInventoryProduct(uuidv4(), productName, productPrice);
    availableProducts.append(newProduct);

    // add animation
    newProduct.classList.add('translate-y-2', 'opacity-0', 'duration-400');
    setTimeout(() => {
        newProduct.classList.remove('translate-y-2', 'opacity-0');
    }, 0);

    products.push({
        id: uuidv4(),
        name: productName,
        price: productPrice
    });

    const instance = window.HSSelect.getInstance(productSelect);
    if (instance) instance.destroy();
    addToSaleProducts(products);
    new HSSelect(productSelect);

    newProductName.value = '';
    newProductPrice.value = null;
};

export const addToSaleProducts = (products) => {
    productSelect.options.length = 1;
    products.forEach(({ id, name, price }) => {
        const newOption = new Option(`${name} - ${price} MMK`, id);
        productSelect.options.add(newOption);
    });
}

export const renderProducts = (products) => {
    products.forEach(({ id, name, price }) => {
        availableProducts.append(
            createInventoryProduct(id, name, price)
        );
        const newOption = new Option(`${name} - ${price} MMK`, id);
        productSelect.options.add(newOption);
    });
}


export const createInventoryProduct = (id, name, price) => {
    const productItemFragment = productItemTemplate.content.cloneNode(true);
    const productItem = productItemFragment.querySelector('.product-item')
    const productName = productItem.querySelector('.product-item-name');
    const productPrice = productItem.querySelector('.product-item-price');

    productItem.id = id;
    productName.innerText = name;
    productPrice.innerText = price;

    return productItem;
}
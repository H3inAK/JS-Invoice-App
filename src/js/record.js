import { v4 as uuidv4 } from 'uuid';

import { addRecordForm, netTotal, noProductRow, productRecordTemplate, productRows, totalCost, totalTax } from "./selectors";
import { products, productRecords } from "./states";

export const renderProductRecords = (productRecords) => {
    if (productRecords.length == 0) {
        noProductRow.classList.remove('hidden')
    } else {
        noProductRow.classList.add('hidden')
    }

    productRows
        .querySelectorAll(".product-record").forEach((productRow) => {
            productRow.remove();
        });

    productRecords.forEach(({ id, count, name, price, quantity, cost }) => {
        const productRecord = createRecordRow(id, count, name, price, quantity, cost);
        productRecord.classList.add('translate-x-2', 'opacity-0', 'duration-300');
        productRows.append(productRecord);
        setTimeout(() => {
            productRecord.classList.remove('translate-x-2', 'opacity-0');
        }, count * 100);
    });

    let total = 0;
    let tax = 0;
    productRecords.forEach(({ cost }) => {
        total += cost;
    });
    tax = total * 0.05;
    
    totalCost.textContent = total + ' mmk';
    totalTax.textContent = tax == 0 ? 'Tax (5%)' : `+ ${tax} mmk (Tax 5%)`;
    netTotal.textContent = total + tax + ' mmk';
};

export const addRecordFormHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(addRecordForm);
    const selectedProduct = products.find(({ id }) => id === formData.get('product_select'));

    productRecords.push({
        id: uuidv4(),
        count: productRecords.length + 1,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: formData.get('quantity'),
        cost: formData.get('quantity') * selectedProduct.price
    });
    renderProductRecords(productRecords);
    addRecordForm.reset();
}

export const createRecordRow = (id, count, name, price, quantity) => {
    const pdRecordTemplate = productRecordTemplate.content.cloneNode(true);
    const productRecord = pdRecordTemplate.querySelector('.product-record');
    const recordProductCount = productRecord.querySelector('.record-product-count');
    const recordRroductName = productRecord.querySelector('.record-product-name');
    const recordProductPrice = productRecord.querySelector('.record-product-price');
    const recordProductQuantity = productRecord.querySelector('.record-product-quantity');
    const recordProductCost = productRecord.querySelector('.record-product-cost');

    productRecord.id = `record-${id}`;
    recordProductCount.innerText = count;
    recordRroductName.innerText = name;
    recordProductPrice.innerText = price + " mmk";
    recordProductQuantity.innerText = quantity;
    recordProductCost.innerText = quantity * price + " mmk";

    return productRecord;
}
import { v4 as uuidv4 } from 'uuid';

import { addRecordForm, netTotal, noProductRow, productRecordTemplate, productRecordsGroup, productSelect, totalCost, totalTax } from "./selectors";
import { products, productRecords } from "./states";
import Swal from 'sweetalert2';
import { HSInputNumber } from 'preline';

const renderProductIds = new Set();

const clearAllProductRecords = () => {
    productRecordsGroup
        .querySelectorAll(".product-record").forEach((productRow) => {
            productRow.remove();
        });
}

export const renderProductRecords = (pdRecords = productRecords) => {
    if (pdRecords.length == 0) {
        noProductRow.classList.remove('hidden')
    } else {
        noProductRow.classList.add('hidden')
    }
    clearAllProductRecords();

    for (let count = 0; count < pdRecords.length; count++) {
        const productRecord = pdRecords[count];
        const { id, name, price, quantity } = productRecord;
        const isNewlyProductRecord = !renderProductIds.has(id);

        const productRecordRow = createRecordRow(id, count + 1, name, price, quantity);

        if (isNewlyProductRecord) {
            productRecordRow.classList.add('translate-y-1.5', 'opacity-0', 'duration-100');
            setTimeout(() => {
                productRecordRow.classList.remove('translate-y-1.5', 'opacity-0');
            }, 100);
        }
        productRecordsGroup.append(productRecordRow);
        renderProductIds.add(id);
    }
};


const removeProductRecord = (id) => {
    const pureId = id.replace('record-', '');
    const productRecordEl = document.getElementById(`${id}`);
    if (!productRecordEl) return;
    const productRecord = productRecords.find((pr) => pr.id == pureId);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-danger",
            cancelButton: "btn btn-cancel"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Please confrim!",
        text: `${productRecord.name} (${productRecord.quantity} pcs) will be removed!`,
        // icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Remove",
        cancelButtonText: "Cancel",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            productRecordEl.classList.add('translate-x-full', 'opacity-0', 'duration-200');
            setTimeout(() => {
                const index = productRecords.findIndex(pr => pr.id == id.replace('record-', ''));
                if (index !== -1) {
                    productRecords.splice(index, 1);
                }
                renderProductRecords(productRecords);
            }, 200);
        }
    });

}

export const increaseProductRecordQuantity = (id) => {
    const pureId = id.replace('record-', '');
    const productRecordRow = productRecords.find(pr => pr.id == pureId);
    if (!productRecordRow) return;

    productRecordRow.quantity = Number(productRecordRow.quantity) + 1;
    renderProductRecords();
}

export const decreaseProductRecordQuantity = (id) => {
    const pureId = id.replace('record-', '');
    const productRecordRow = productRecords.find(pr => pr.id == pureId);
    if (!productRecordRow) return;

    if (productRecordRow.quantity > 1) {
        productRecordRow.quantity = Number(productRecordRow.quantity) - 1;
        renderProductRecords();
    }
}

export const productRecordsGroupHandler = (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const productRecordRow = e.target.closest('.product-record');
        if (!productRecordRow) return;

        removeProductRecord(productRecordRow.id);
    } else if (e.target.classList.contains('quantity-increase')) {
        const productRecordRow = e.target.closest('.product-record');
        if (!productRecordRow) return;

        increaseProductRecordQuantity(productRecordRow.id)
    } else if (e.target.classList.contains('quantity-decrease')) {
        const productRecordRow = e.target.closest('.product-record');
        if (!productRecordRow) return;

        decreaseProductRecordQuantity(productRecordRow.id)
    }
}


export const calculateTotalCost = () => {
    let total = 0;
    let tax = 0;
    productRecords.forEach(({ price, quantity }) => {
        total += price * quantity;
    });
    tax = total * 0.05;

    totalCost.textContent = total + ' mmk';
    totalTax.textContent = tax == 0 ? 'Tax (5%)' : `+ ${tax}mmk (Tax 5%)`;
    netTotal.textContent = total + tax + ' mmk';
}

export const addRecordFormHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(addRecordForm);
    const selectedProduct = products.find(({ id }) => id === formData.get('product_select'));

    if (!selectedProduct) return;

    productRecords.push({
        id: uuidv4(),
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: formData.get('quantity'),
    });
    renderProductRecords(productRecords);

    const quantityInput = addRecordForm.querySelector('[data-hs-input-number]');
    const productSelect = addRecordForm.querySelector('select[name="product_select"]');
    addRecordForm.reset();
    resetHSComponent(quantityInput, productSelect);
}

export const resetHSComponent= (quantityInput, productSelect) => {
    const selectInstance = window.HSSelect.getInstance(productSelect);
    if (selectInstance) selectInstance.destroy();
    new HSSelect(productSelect);

    const quantityInstance = window.HSInputNumber.getInstance(quantityInput);
    if(quantityInstance) quantityInstance.destroy();
    new HSInputNumber(quantityInput);
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
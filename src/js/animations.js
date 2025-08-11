import { netTotal, totalCost, totalTax } from "./selectors";

export const highlightProductRecordRow = (productRecordId) =>  {
    const existingRow = document.getElementById(`record-${productRecordId}`);

    if (existingRow) {
        existingRow.classList.remove('product-highlight');
        existingRow.classList.add('product-highlight');
    }
}

export const highlightCell = (id) => {
    const productRecordRow = document.querySelector(`#record-${id}`);
    if (!productRecordRow) return;

    const quantityCell = productRecordRow.querySelector('.record-product-cost');
    if (quantityCell) {
        quantityCell.classList.remove('product-highlight');
        quantityCell.classList.add('product-highlight');
    }
}

export const highlightTotalCost = () => {
    requestAnimationFrame(() => {
        [totalCost, totalTax, netTotal].forEach(el => {
            el.classList.remove('product-highlight');
            void el.offsetWidth; // force reflow so animation restarts
            el.classList.add('product-highlight');
        });
    });
};

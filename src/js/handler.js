import { renderProductRecords } from "./record";
import { sidebar } from "./selectors";
import { productRecords } from "./states";

export const manageInventoryBtnHandler = () => {
    sidebar.classList.toggle('translate-x-full');
    sidebar.classList.add('duration-300', 'transition-transform', 'ease-in-out');
}

export const sidebarBtnHandler = () => {
    sidebar.classList.toggle('translate-x-full');
}

export const printBtnHandler = () => {
    if (productRecords.length === 0) return;
    
    window.print();
}
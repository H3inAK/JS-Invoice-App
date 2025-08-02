import { sidebar } from "./selectors";

export const manageInventoryBtnHandler = () => {
    sidebar.classList.toggle('translate-x-full');
}

export const sidebarBtnHandler = () => {
    sidebar.classList.toggle('translate-x-full');
}

export const printBtnHandler = () => {
    window.print();
}
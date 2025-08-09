import { sidebar } from "./selectors";

export const manageInventoryBtnHandler = () => {
    sidebar.classList.toggle('translate-x-full');
    sidebar.classList.add('duration-300', 'transition-transform', 'ease-in-out');
}

export const sidebarBtnHandler = () => {
    sidebar.classList.toggle('translate-x-full');
}

export const printBtnHandler = () => {
    window.print();
}
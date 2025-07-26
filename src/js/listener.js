import { manageInventoryBtn, sidebar, sidebarBtn } from "./selectors";

const listener = () => {
    manageInventoryBtn.addEventListener('click', () => {
        sidebar.classList.toggle('translate-x-full');
    })

    sidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('translate-x-full');
    })
};

export default listener;
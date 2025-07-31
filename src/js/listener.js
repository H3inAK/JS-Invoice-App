import { manageInventoryBtnHandler, sidebarBtnHandler } from "./handler";
import { addNewProductBtnHandler } from "./inventory";
import { addNewProductBtn, manageInventoryBtn, sidebarBtn } from "./selectors";

const listener = () => {
    manageInventoryBtn.addEventListener('click', manageInventoryBtnHandler)
    sidebarBtn.addEventListener('click', sidebarBtnHandler)

    addNewProductBtn.addEventListener('click', addNewProductBtnHandler)
};

export default listener;
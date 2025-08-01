import { addRecordFormHandler, manageInventoryBtnHandler, sidebarBtnHandler } from "./handler";
import { addNewProductBtnHandler } from "./inventory";
import { addNewProductBtn, addRecordForm, manageInventoryBtn, sidebarBtn } from "./selectors";

const listener = () => {
    manageInventoryBtn.addEventListener('click', manageInventoryBtnHandler)
    sidebarBtn.addEventListener('click', sidebarBtnHandler)

    addNewProductBtn.addEventListener('click', addNewProductBtnHandler)
    addRecordForm.addEventListener('submit', addRecordFormHandler)
};

export default listener;
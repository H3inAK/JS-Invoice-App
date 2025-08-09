import { manageInventoryBtnHandler, printBtnHandler, sidebarBtnHandler } from "./handler";
import { addNewProductBtnHandler } from "./inventory";
import { addRecordFormHandler, productRecordsGroupHandler } from "./record";
import { addNewProductBtn, addRecordForm, manageInventoryBtn, printBtn, productRecordsGroup, sidebarBtn } from "./selectors";

const listener = () => {
    manageInventoryBtn.addEventListener('click', manageInventoryBtnHandler);
    sidebarBtn.addEventListener('click', sidebarBtnHandler);

    addNewProductBtn.addEventListener('click', addNewProductBtnHandler);
    addRecordForm.addEventListener('submit', addRecordFormHandler);

    productRecordsGroup.addEventListener('click', productRecordsGroupHandler);

    printBtn.addEventListener('click', printBtnHandler);
};

export default listener;
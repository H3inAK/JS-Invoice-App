import { calculateTotalCost } from "./record";
import { productRecordsGroup } from "./selectors";

const observer = () => {
    const config = { attributes: true, childList: true, subtree: true };

    const productRecordsGroupObserver = new MutationObserver(calculateTotalCost);
    productRecordsGroupObserver.observe(productRecordsGroup, config);
}

export default observer;
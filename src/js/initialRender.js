import { renderProducts } from "./inventory";
import { renderProductRecords } from "./record";
import { productRecords, products } from "./states";

const initialRender = () => {
    renderProducts(products);
    renderProductRecords(productRecords);
}

export default initialRender;
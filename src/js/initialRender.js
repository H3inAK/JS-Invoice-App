import { renderProducts } from "./inventory";
import { sidebar } from "./selectors";
import products from "./states";

const initialRender = () => {
    sidebar.classList.remove('translate-x-full');
    renderProducts(products);
}

export default initialRender;
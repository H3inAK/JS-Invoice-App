import { addRecordForm, sidebar } from "./selectors";
import products from "./states";

export const manageInventoryBtnHandler = () => {
    sidebar.classList.toggle('translate-x-full');
}

export const sidebarBtnHandler = () => {
    sidebar.classList.toggle('translate-x-full');
}

export const addRecordFormHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(addRecordForm);
    
    const selectedProduct = products.find(({id}) => id === formData.get('product_select'));
    console.log(selectedProduct, formData.get('quantity') * selectedProduct.price);
    console.log(formData.get('quantity'));
}
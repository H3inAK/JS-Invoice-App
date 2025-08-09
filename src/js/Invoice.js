import initialRender from "./initialRender"
import listener from "./listener"
import observer from "./observer"
import { productRecords } from "./states";

class Invoice {
    init() {
        observer(productRecords);
        initialRender();
        listener();
    }
}

export default Invoice
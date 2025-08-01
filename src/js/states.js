import { v4 as uuidv4 } from 'uuid';

const products = [
  {
    id: uuidv4(),
    name: "Apple Macbook Pro",
    price: 1500 * 2100 // = 3,150,000 MMK
  },
  {
    id: uuidv4(),
    name: "Apple iPhone 17 Pro",
    price: 1200 * 2100 // = 2,520,000 MMK
  },
  {
    id: uuidv4(),
    name: "Xiaomi NoteBook Air",
    price: 800 * 2100 // = 1,680,000 MMK
  },
  {
    id: uuidv4(),
    name: "Xiaomi Redmi Note 13",
    price: 350 * 2100 // = 735,000 MMK
  },
  {
    id: uuidv4(),
    name: "Apple Watch Series 9",
    price: 400 * 2100 // = 840,000 MMK
  }
];

export default products;
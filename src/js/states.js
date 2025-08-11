import { v4 as uuidv4 } from 'uuid';

export const products = [
  // foreign products
  {
    id: uuidv4(),
    name: "Apple Macbook Pro",
    price: 1500 * 2100
  },
  // {
  //   id: uuidv4(),
  //   name: "Apple iPhone 17 Pro",
  //   price: 1200 * 2100
  // },
  {
    id: uuidv4(),
    name: "Xiaomi NoteBook Air",
    price: 800 * 2100
  },
  // {
  //   id: uuidv4(),
  //   name: "Xiaomi Redmi Note 13",
  //   price: 350 * 2100
  // },
  {
    id: uuidv4(),
    name: "Apple Watch Series 9",
    price: 400 * 2100
  },

  // local products
  {
    id: uuidv4(),
    name: "ရွှေဘိုပေါ်ဆန် (၅၀ ကီလို)",
    price: 85000
  },
  // {
  //   id: uuidv4(),
  //   name: "မြန်မာလက်ဖက်အပင် (၁ ကီလို)",
  //   price: 5000
  // },
  {
    id: uuidv4(),
    name: "လက်ဖက်သုတ်မစ်စ်ပတ်",
    price: 3500
  },
  // {
  //   id: uuidv4(),
  //   name: "မြောင်းမြ ချက်ဆီ (၁ လီတာ)",
  //   price: 4200
  // },
  {
    id: uuidv4(),
    name: "ငါးဖယ် ငါးပိ",
    price: 2500
  }
];

export const productRecords = [];

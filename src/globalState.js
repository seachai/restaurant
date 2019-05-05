const companyInfo = {
  title: "Poké Poké",
  phone: "(777) 777 - 7777",
  address: "888 Adams St.",
  zipcode: "90066",
  city: "Los Angeles",
  state: "California",
  email: "info@pokepoke.com"
};

const specialMenu = [
  {
    title: "Bowl Numero Uno",
    description: "Salmon, Avocado, Edamame, Cucumber, Masago",
    price: "$25"
  },
  {
    title: "Bowl Numero Dos",
    description: "Shrimp, Green Onion, Cucumber, Crab Stick",
    price: "$25"
  },
  {
    title: "Bowl Numero Tres",
    description: "Marinated Tuna, Sweet Onion, Seaweed Salad, Masago",
    price: "$25"
  }
];

const globalState = {
  companyInfo,
  specialMenu
};

export default globalState;

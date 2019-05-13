const companyInfo = {
  title: "Poké Poké",
  phone: "(777) 777 - 7777",
  address: "100 Sushi St.",
  zipcode: "90066",
  city: "Los Angeles",
  state: "California",
  email: "info@pokepoke.com"
};

const specialMenu = [
  {
    image: "https://eatpokebros.com/wp-content/uploads/2019/02/signature-bowl-the-duke.jpg",
    title: "Bowl Numero Uno",
    description: "Salmon, Avocado, Edamame, Cucumber, Masago",
    price: "$12.99"
  },
  {
    image: "https://eatpokebros.com/wp-content/uploads/2019/02/signature-bowl-johnny-utah.jpg",
    title: "Bowl Numero Dos",
    description: "Shrimp, Green Onion, Cucumber, Crab Stick",
    price: "$10.99"
  },
  {
    image: "https://eatpokebros.com/wp-content/uploads/2019/02/signature-bowl-da-kine.jpg",
    title: "Bowl Numero Tres",
    description: "Marinated Tuna, Sweet Onion, Seaweed Salad, Masago",
    price: "$9.99"
  }
];

const globalState = {
  companyInfo,
  specialMenu
};

export default globalState;

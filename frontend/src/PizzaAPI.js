import axios from "axios";

export default {
  getPizzas: async () => {
    return await axios
      .get("http://localhost:5000/route", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => res.data);
  },
  createPizza: (pizza) => {
    return fetch("/route", {
      method: "post",
      body: JSON.stringify(pizza),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
};

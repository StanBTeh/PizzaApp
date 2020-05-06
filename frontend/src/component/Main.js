/* eslint-disable default-case */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import Size from "./Size";
import Crust from "./Crust";
import Toppings from "./Toppings";
import Summary from "./Summary";
import axios from "axios";

export class Main extends Component {
  state = {
    pizzas: [],
    step: 1,
    size: "",
    crust: "",
    toppings: "",
    price: "",
  };

  getPizzas = async () => {
    await axios
      .get("http://localhost:5000/route")
      .then((res) => {
        const data = res.data;
        this.setState({ pizzas: data });
        console.log("Pizza list received" + data);
      })
      .catch(() => {
        alert("Error on retrieving pizza list");
      });
  };

  componentDidMount = () => {
    this.getPizzas();
  };

  // for navigating to next page
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // for navigating to previous page
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  displayPizzas = (posts) => {
    return posts.map((posts, index) => (
      <div key={index}>
        <h3>
          {posts.size}, {posts.crust}
        </h3>
      </div>
    ));
  };
  render() {
    const { step } = this.state;
    const { size, crust, toppings, price } = this.state;
    const values = { size, crust, toppings, price };

    switch (step) {
      case 1:
        return (
          // <div>
          //   {this.displayPizzas(this.state.pizzas)}
          // </div>

          <Size
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Crust
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Toppings
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Summary
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            values={values}
          />
        );
    }
  }
}

export default Main;

import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class Toppings extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Pick Your Toppings" />
          <input
            type="checkbox"
            onChange={handleChange("toppings")}
            name="cheese"
            value="2"
          />
          Cheese
          <br />
          <input
            type="checkbox"
            onChange={handleChange("toppings")}
            name="bacon"
            value="4"
          />
          Bacon
          <br />
          <input
            type="checkbox"
            onChange={handleChange("toppings")}
            name="sausage"
            value="6"
          />
          Sausage
          <br />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default Toppings;

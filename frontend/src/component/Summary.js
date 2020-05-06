import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import axios from "axios";
export class Summary extends Component {
  continue = (e) => {
    e.preventDefault();

    // send data to mongo db
    this.submitData(this.props);
    this.props.nextStep();
  };

  submitData(data) {
    debugger;
    axios
      .post("http://localhost:5000/route/add", {
        size: data.size,
        crust: data.crust,
        toppings: data.toppings,
        price: "0",
      })
      .then((response) => {
        console.log(response);
      })
      .catch(() => {
        alert("Error on retrieving pizza list");
      });
  }

  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };
  render() {
    const {
      values: { size, crust, toppings, price },
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Your Order" />
          <List>
            <ListItem primaryText="Size" secondaryText={size} />
            <ListItem primaryText="Crust" secondaryText={crust} />
            <ListItem primaryText="Toppings" secondaryText={toppings} />
          </List>
          <br />
          <RaisedButton
            label="Submit Order"
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

export default Summary;

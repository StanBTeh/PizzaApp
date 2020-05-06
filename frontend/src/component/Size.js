import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import "../App.css";

export class Size extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Choose Your Pizza Size" />
          <select
            className="Select"
            value={this.props.size}
            onChange={handleChange("size")}
          >
            <option value=""></option>
            <option value="8">Small--$8</option>
            <option value="10">Medium--$10</option>
            <option value="12">Large--$12</option>
          </select>
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
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

export default Size;
